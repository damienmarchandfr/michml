import {MichML} from '../src/index'
import * as fs from 'fs'

const mich = new MichML()

mich.pathToHTML(__dirname + '/template.mjml', {message : 'Hello'})
.then((html) => {
  console.log(html)
  fs.writeFileSync(__dirname + '/template.html', html)
})
.catch(err => {
  console.error(err)
})
