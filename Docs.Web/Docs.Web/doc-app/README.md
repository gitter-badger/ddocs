# DocApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Prepare application

Once latest files are downloaded by git checkout, run npm install to install all required npm packages.

## Build

Run `ng build` to build the project using the below command. The build artifacts will be stored in the `dist/` directory for every successful build and then all js files will be copied to ..\wwwroot\js. Any existing files will be overwriten without warning. 

"build": "ng build && copy .\\dist\\doc-app\\*.js  ..\\wwwroot\\js /Y",

## How to run the application

Idea behind this angular application is to use along with asp.net core. All required javascript files will be loaded from the wwwroot\js by _layout.cshtml.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

