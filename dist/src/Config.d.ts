export declare class MichMLConfig {
    templatesDirectory: string;
    mjml: IMJMLConfig;
    constructor(templatesDirectory: string);
}
/**
 * MJML lib default configuration
 */
export interface IMJMLConfig {
    beautify: boolean;
    keepComments: boolean;
    minify: boolean;
    validationLevel: "strict" | "soft" | "skip";
}
