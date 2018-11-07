import * as fs from "fs";
import * as nunjucks from "nunjucks";
import * as util from "util";
import { MichMLConfig } from "./Config";
const mjml = require("mjml");

const readFile = util.promisify(fs.readFile);

export class MichML {
  config: MichMLConfig;

  constructor(config?: MichMLConfig) {
    this.config = config || {
      beautify: false,
      keepComments: true,
      minify: false,
      validationLevel: "soft"
    };
  }

  public async toHTMLString(path: string, data?: any): Promise<string> {
    const buffer = await this.loadTemplate(path);
    return mjml.default(nunjucks.renderString(buffer, data || {}), this.config)
      .html;
  }

  private async loadTemplate(path: string) {
    const buffer = await readFile(path, "utf8");
    return buffer;
  }
}
