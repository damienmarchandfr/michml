import * as fs from 'fs'
import * as nunjucks from 'nunjucks'
import * as util from 'util'
import mjml = require('mjml')

type ArgumentTypes<F extends Function> = F extends (...args: infer A) => any ? A : never
type MJMLOptions = ArgumentTypes<typeof mjml>[1]

export class MichML {
  private config: MJMLOptions

  /**
   *
   * @param config MJML config
   */
  constructor(config?: MJMLOptions) {
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

    return mjml(mjmlWithData, this.config).html
  }

  /**
   * Convert a mjml string to HTML string
   * @param mjmlString MJML string
   * @param data data for your template
   */
  public stringToHTML(mjmlString: string, data: any = {}) {
    const mjmlWithData = nunjucks.renderString(mjmlString, data)

    return mjml(mjmlWithData, this.config).html
  }

  // ------------ Old methods --------
  public toHTMLString(path: string, data?: any): Promise<string> {
    console.warn('toHTMLString is a deprecated method replaced by pathToHTML method.')
    return this.pathToHTML(path, data)
  }

  public async mjmlToHTMLString(mjmlString: string, data?: any): Promise<string> {
    console.warn('mjmlToHTMLString is a deprecated method replaced by  ')
    return this.stringToHTML(mjmlString, data)
  }
}
