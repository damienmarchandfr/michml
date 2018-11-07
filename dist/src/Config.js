"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MichMLConfig = /** @class */ (function () {
    function MichMLConfig(templatesDirectory) {
        this.mjml = {
            beautify: false,
            keepComments: true,
            minify: false,
            validationLevel: "soft"
        };
        this.templatesDirectory = templatesDirectory;
    }
    return MichMLConfig;
}());
exports.MichMLConfig = MichMLConfig;
//# sourceMappingURL=Config.js.map