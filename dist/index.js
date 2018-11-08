"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const nunjucks = require("nunjucks");
const util = require("util");
const mjml = require("mjml");
const readFile = util.promisify(fs.readFile);
class MichML {
    constructor(config) {
        this.config = config || {
            beautify: false,
            keepComments: true,
            minify: false,
            validationLevel: "soft"
        };
    }
    toHTMLString(path, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const buffer = yield this.loadTemplate(path);
            return mjml.default(nunjucks.renderString(buffer, data || {}), this.config)
                .html;
        });
    }
    loadTemplate(path) {
        return __awaiter(this, void 0, void 0, function* () {
            const buffer = yield readFile(path, "utf8");
            return buffer;
        });
    }
}
exports.MichML = MichML;
