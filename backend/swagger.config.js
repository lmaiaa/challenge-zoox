var swaggerJSDoc = require('swagger-jsdoc')
// swagger definition
var swaggerDefinition = {
    info: {
        title: 'Challenge Zoox API',
        version: '1.0.0',
        description:
            'Documentação do Challenge Zoox API',
        termsOfService: 'http://example.com/terms/',
        contact: {
            name: 'API Support',
            url: 'https://www.linkedin.com/in/luccasmaia/',
            email: 'lmaiaa@live.com',
        },
    },
}

// options for the swagger docs
var options = {
    // import swaggerDefinitions
    swaggerDefinition: swaggerDefinition,
    // path to the API docs
    apis: ['./src/routes/index.ts'],
}

// initialize swagger-jsdoc
var swaggerSpec = swaggerJSDoc(options)
module.exports = swaggerSpec