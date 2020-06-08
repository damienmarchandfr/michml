"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const fs = require("fs");
const mich = new index_1.MichML();
mich.pathToHTML(__dirname + '/template.mjml', { message: 'Hello' })
    .then((html) => {
    console.log(html);
    fs.writeFileSync(__dirname + '/template.html', html);
})
    .catch(err => {
    console.error(err);
});
