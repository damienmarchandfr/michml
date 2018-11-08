"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const index_1 = require("../index");
const michel = new index_1.MichML();
michel
    .toHTMLString(__dirname + "/templates/template.mjml", {
    firstname: "Damien Marchand",
    job: "Web dev",
    description: "I try to create things not buggy but it's so difficult",
    linkedin: "https://www.linkedin.com/in/damienmarchand/",
    github: "https://github.com/damienmarchandfr",
    skills: [
        {
            name: "JS",
            rating: 3
        },
        {
            name: "CSS",
            rating: 1
        },
        {
            name: "Node",
            rating: 3
        }
    ]
})
    .then(htmlString => {
    console.log(htmlString);
    // Write in html file
    if (process.env.writeHTML) {
        fs.writeFileSync("./index.ts.html", htmlString);
    }
})
    .catch(err => {
    console.error(err);
});
