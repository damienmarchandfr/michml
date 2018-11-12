import * as fs from 'fs'
import * as nunjucks from 'nunjucks'
import * as util from 'util'
import mjml = require('mjml')

type ArgumentTypes<F extends Function> = F extends (...args: infer A) => any ? A : never
type MJMLOptions = ArgumentTypes<typeof mjml>[1]

export class MichML {
  private config: MJMLOptions

  constructor(config?: MJMLOptions) {
    this.config = config || {
      beautify: false,
      keepComments: true,
      minify: false,
      validationLevel: 'soft'
    }
  }

  public async pathToHTML(path: fs.PathLike, data: any = {}): Promise<string> {
    const readFile = util.promisify(fs.readFile)
    const template = await readFile(path, 'utf8')
    const mjmlWithData = nunjucks.renderString(template, data)

    return mjml(mjmlWithData, this.config).html
  }

  public stringToHTML(mjmlString: string, data: any = {}) {
    const mjmlWithData = nunjucks.renderString(mjmlString, data)

    return mjml(mjmlWithData, this.config).html
  }
}
