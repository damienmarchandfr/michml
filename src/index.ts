import * as fs from "fs";
import * as nunjucks from "nunjucks";
import * as util from "util";
import { MichMLConfig } from "./Config";
import { MichMLError } from "./Error";
const mjml = require("mjml");

const readFile = util.promisify(fs.readFile);

export class MichML {
  config: MichMLConfig;

  constructor(config: MichMLConfig) {
    this.config = config;
  }

  public async toHTMLString(fileName: string, data: any): Promise<string> {
    const buffer = await this.loadTemplate(fileName);
    return mjml.default(nunjucks.renderString(buffer, data), this.config.mjml)
      .html;
  }

  private async loadTemplate(fileName: string) {
    const path = this.config.templatesDirectory + "/" + fileName + ".mjml";
    try {
      const buffer = await readFile(path, "utf8");
      return buffer;
    } catch (error) {
      let mjmlError = new MichMLError("Cannot load template : " + path);
      mjmlError.stack = error.stack;
      throw mjmlError;
    }
  }
}
