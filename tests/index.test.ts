// import { expect } from "chai";
// import "mocha";
// import * as util from "util";
// import * as fs from "fs";
// import { MichML } from "../src";
// import * as cheerio from "cheerio";

// const readFile = util.promisify(fs.readFile);

// const mich = new MichML();

// describe("Test michml", () => {
//   it("should throw error if template file does not exist", async () => {
//     let error: any;
//     try {
//       await mich.toHTMLString(__dirname + "/templates/nop.mjml");
//     } catch (err) {
//       error = err;
//     }

//     expect(error.code).to.eql("ENOENT");
//   });

//   it("should return valid HTML without var in MJML", async () => {
//     const html = await mich.toHTMLString(__dirname + "/templates/no_var.mjml");
//     const htmlLoaded = await readFile(
//       __dirname + "/templates/no_var.html",
//       "utf8"
//     );

//     // fs.writeFileSync(__dirname + "/templates/no_var.html", html);
//     const cheerioLoaded = cheerio.load(html);
//     const cheerioGenerated = cheerio.load(htmlLoaded);
//   });
// });
