"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MichML = void 0;
const fs = require("fs");
const nunjucks = require("nunjucks");
const util = require("util");
const mjml2html = require("mjml");
class MichML {
    /**
     *
     * @param config MJML config
     */
    constructor(config) {
        this.config = config || {
            beautify: false,
            keepComments: true,
            minify: false,
            validationLevel: 'soft'
        };
    }
    /**
     * Convert a mjml file to HTML string
     * @param path path to your .mjml files
     * @param data data for your template
     * @returns Promise<string> HTML with data
     */
    pathToHTML(path, data = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const readFile = util.promisify(fs.readFile);
            const template = yield readFile(path, 'utf8');
            const mjmlWithData = nunjucks.renderString(template, data);
            return mjml2html(mjmlWithData, this.config).html;
        });
    }
    /**
     * Convert a mjml string to HTML string
     * @param mjmlString MJML string
     * @param data data for your template
     */
    stringToHTML(mjmlString, data = {}) {
        const mjmlWithData = nunjucks.renderString(mjmlString, data);
        return mjml2html(mjmlWithData, this.config).html;
    }
}
exports.MichML = MichML;
