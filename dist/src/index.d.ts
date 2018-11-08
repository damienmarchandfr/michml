import { MichMLConfig } from "./Config";
export declare class MichML {
    private config;
    constructor(config?: MichMLConfig);
    toHTMLString(path: string, data?: any): Promise<string>;
    private loadTemplate;
}
