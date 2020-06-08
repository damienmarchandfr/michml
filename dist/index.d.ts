/// <reference types="node" />
import * as fs from 'fs';
export interface MichMLConfig {
    beautify: boolean;
    keepComments: boolean;
    minify: boolean;
    validationLevel: 'strict' | 'soft' | 'skip';
}
export declare class MichML {
    private config;
    /**
     *
     * @param config MJML config
     */
    constructor(config?: MichMLConfig);
    /**
     * Convert a mjml file to HTML string
     * @param path path to your .mjml files
     * @param data data for your template
     * @returns Promise<string> HTML with data
     */
    pathToHTML(path: fs.PathLike, data?: any): Promise<string>;
    /**
     * Convert a mjml string to HTML string
     * @param mjmlString MJML string
     * @param data data for your template
     */
    stringToHTML(mjmlString: string, data?: any): any;
}
