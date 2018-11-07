import * as fs from "fs";
import { MichML } from "../src";
import { MichMLConfig } from "../src/Config";

const michel = new MichML(new MichMLConfig(__dirname + "/templates"));

michel
  .toHTMLString("template", {
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
