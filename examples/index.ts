import { MJMLTemplateLoader } from "../src/index";
import { MJMLTemplateLoaderConfig } from "../src/Config";
import * as fs from "fs";

const templatator = new MJMLTemplateLoader(
  new MJMLTemplateLoaderConfig(__dirname + "/templates")
);

templatator
  .toHTMLString("template", {
    firstname: "Damien Marchand",
    job: "Web dev",
    description: "I try to create things not buggy but it's so difficult",
    linkedin: "https://www.linkedin.com/in/damienmarchand/",
    github: "https://github.com/damienmarchandfr",
    skills: [
      {
        name: "JS",
        rating: "3"
      },
      {
        name: "CSS",
        rating: "1"
      },
      {
        name: "Node",
        rating: "3"
      }
    ]
  })
  .then(htmlString => {
    console.log(htmlString);
    // Write in html file
    if (process.env.writeHTML) {
      fs.writeFileSync("./index.html", htmlString);
    }
  })
  .catch(err => {
    console.error(err);
  });
