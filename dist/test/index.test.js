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
const fs_1 = require("fs");
const util_1 = require("util");
const __1 = require("..");
const read = util_1.promisify(fs_1.readFile);
let mjmlContent = '';
let htmlContent = '';
describe('MichML class', () => {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        const mjmlBuffer = yield read(__dirname + '/template.mjml');
        const htmlBuffer = yield read(__dirname + '/template.html');
        mjmlContent = mjmlBuffer.toString();
        htmlContent = htmlBuffer.toString();
    }));
    it('should test pathToHTML', () => __awaiter(void 0, void 0, void 0, function* () {
        const mich = new __1.MichML();
        const generated = yield mich.pathToHTML(__dirname + '/template.mjml', { message: 'Hello' });
        expect(generated).toEqual(htmlContent);
    }));
    it('should test stringToHTML', () => __awaiter(void 0, void 0, void 0, function* () {
        const mich = new __1.MichML();
        const generated = yield mich.stringToHTML(mjmlContent, { message: 'Hello' });
        expect(generated).toEqual(htmlContent);
    }));
});
