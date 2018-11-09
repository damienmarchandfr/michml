export interface MichMLConfig {
    beautify: boolean;
    keepComments: boolean;
    minify: boolean;
    validationLevel: "strict" | "soft" | "skip";
}
export declare class MichML {
    private config;
    constructor(config?: MichMLConfig);
    toHTMLString(path: string, data?: any): Promise<string>;
    mjmlToHTMLString(mjmlString: string, data?: any): Promise<string>;
    private loadTemplate;
}
