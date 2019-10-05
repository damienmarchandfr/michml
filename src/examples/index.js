/**
 * Run yarn run build before run this example with node
 */
var MichML = require('../../dist/index')

const mich = new MichML.MichML()

mich.pathToHTML(__dirname+'/template.mjml',{message : 'Hello'})
  .then((html)=>{
    console.log(html)
  })
  .catch(err=>{
    console.error(err)
  })
