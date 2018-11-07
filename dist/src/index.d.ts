import { MichMLConfig } from "./Config";
export declare class MichML {
    config: MichMLConfig;
    constructor(config: MichMLConfig);
    toHTMLString(fileName: string, data: any): Promise<string>;
    private loadTemplate;
}
