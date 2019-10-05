![michml](https://image.ibb.co/emwFVA/michml.png)

## MichML

Create email template with [Nunjucks](https://mozilla.github.io/nunjucks/) syntax and [MJML](https://mjml.io/)

## Installation

    yarn add michml

    npm install michml

## How to use

You can see example in 'examples' folder.

## How to use in TypeScript

    const michel = new MichML();
    const html = michel.pathToHTML(__dirname + "/templates/template.mjml", { template_data } })

## How to use in JavaScript

    const michML_module = require('michml')
    const michel = new michML_module.MichML()
    const html = michel.pathToHTML(__dirname + "/templates/template.mjml", { template_data } })

## Configuration    

You can configure MJML to HTML transformation

    const options = {
        // Option to beautify the HTML output (default : false )
        beautify: boolean;
        // Option to keep comments in the HTML output ( default : true )
        keepComments: boolean;
        // Option to minify the HTML output ( default : false )
        minify: boolean;
        // Available values for the validator: 'strict', 'soft', 'skip' ( defaullt : 'soft' )
        validationLevel: "strict" | "soft" | "skip";
    }
    const michel = new MichML(options)

