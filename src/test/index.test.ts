import { readFile } from 'fs';
import { promisify } from 'util';
import { MichML } from '..';

const read = promisify(readFile);

let mjmlContent: string = ''
let htmlContent: string = ''

describe('MichML class', () => {
  beforeEach(async()=>{
    const mjmlBuffer = await read(__dirname+'/template.mjml')
    const htmlBuffer = await read(__dirname +'/template.html')

    mjmlContent = mjmlBuffer.toString()
    htmlContent = htmlBuffer.toString()
  })

  it('should test pathToHTML', async () => {
    const mich = new MichML()
    const generated = await mich.pathToHTML(__dirname+'/template.mjml',{message : 'Hello'})
    expect(generated).toEqual(htmlContent)
  });

  it('should test stringToHTML',async()=>{
    const mich = new MichML()
    const generated = await mich.stringToHTML(mjmlContent,{message : 'Hello'})
    expect(generated).toEqual(htmlContent)
  })
});
