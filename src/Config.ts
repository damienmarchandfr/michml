export class MichMLConfig {
  templatesDirectory: string;
  mjml: IMJMLConfig = {
    beautify: false,
    keepComments: true,
    minify: false,
    validationLevel: "soft"
  };

  constructor(templatesDirectory: string) {
    this.templatesDirectory = templatesDirectory;
  }
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
