## MickML

Create email template with [Nunjucks](https://mozilla.github.io/nunjucks/) syntax and [MJML](https://mjml.io/)

**This lib is made in TypeScript but you can access JavaScript code in the /dist directory**

## Installation

    yarn add https://github.com/damienmarchandfr/michml#master

    npm install https://github.com/damienmarchandfr/michml#master

## How to use in TypeScript

    const michel = new MichML();
    const html = michel.toHTMLString(__dirname + "/templates/template.mjml", { template_data } })

## How to use in JavaScript

    const michML_module = require('michml')
    const michel = new michML_module.MichML()
    const html = michel.toHTMLString(__dirname + "/templates/template.mjml", { template_data } })

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
    

## Examples

See examples in the examples directory. 

Run examples in TypeScript

    // Create an index.ts.html file
    yarn run example:ts:write

    //Return an HTML string
    yarn run example:ts

Run examples in JavaScript

    // Create an index.js.html file
    yarn run example:js:write

    //Return an HTML string
    yarn run example:js

## Contributors

[Jeremy Bensimon](https://github.com/jeremyben)

