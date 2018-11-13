import * as fs from 'fs'
import * as nunjucks from 'nunjucks'
import * as util from 'util'
const mjml = require('mjml')

export interface MichMLConfig {
  beautify: boolean;
  keepComments: boolean;
  minify: boolean;
  validationLevel: 'strict' | 'soft' | 'skip';
}

export class MichML {
  private config: MichMLConfig

  /**
   *
   * @param config MJML config
   */
  constructor(config?: MichMLConfig) {
    this.config = config || {
      beautify: false,
      keepComments: true,
      minify: false,
      validationLevel: 'soft'
    }
  }

  /**
   * Convert a mjml file to HTML string
   * @param path path to your .mjml files
   * @param data data for your template
   * @returns Promise<string> HTML with data
   */
  public async pathToHTML(path: fs.PathLike, data: any = {}): Promise<string> {
    const readFile = util.promisify(fs.readFile)
    const template = await readFile(path, 'utf8')
    const mjmlWithData = nunjucks.renderString(template, data)

    return  mjml.default(mjmlWithData, this.config).html
  }

  /**
   * Convert a mjml string to HTML string
   * @param mjmlString MJML string
   * @param data data for your template
   */
  public stringToHTML(mjmlString: string, data: any = {}) {
    const mjmlWithData = nunjucks.renderString(mjmlString, data)

    return  mjml.default(mjmlWithData, this.config).html
  }

  // ------------ Old methods --------

  /**
   * Convert a mjml file to HTML string
   * @param path path to your .mjml files
   * @param data data for your template
   * @deprecated
   */
  public toHTMLString(path: string, data?: any): Promise<string> {
    console.warn('toHTMLString is a deprecated method replaced by pathToHTML method.')
    return this.pathToHTML(path, data)
  }

  /**
   * Convert a mjml string to HTML string
   * @param mjmlString MJML string
   * @param data data for your template
   * @deprecated
   */
  public async mjmlToHTMLString(mjmlString: string, data?: any): Promise<string> {
    console.warn('mjmlToHTMLString is a deprecated method replaced by stringToHTML')
    return this.stringToHTML(mjmlString, data)
  }
}
