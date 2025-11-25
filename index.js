const express = require("express");
const expressJSDocSwagger = require('express-jsdoc-swagger');

const docConfig = {
    info: {
      version: '1.0.0',
      title: 'Backend API',
    },
    filePattern: './src/**/*.js',
    swaggerUIPath: '/api-docs',  
    baseDir: __dirname,     
};

const app = express();

expressJSDocSwagger(app)(docConfig);
app.use(express.json());

const Routers = require("./src/router/index");
app.use(Routers);

app.listen(9000, ()=>{
    console.log("Running on http://localhost:9000");
});
