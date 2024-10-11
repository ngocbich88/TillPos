HOW TO RUN TEST
------------

To run the automation test using Cypress at local. Please follow the steps as below:

 * Install Node.js
 * Install Visual Studio Code
 * Open Visual Studio Code and browse to the source folder
 * Run "npm install" at terminal to install nessesary tools and libraries specified in package.json
 * Run "npx cypress run" to run all the tests
 * Open Cypress/report/index.html to view the test report

Update on Oct 11,
To install xpath in Cypress
* brew install yarn
* npm install -D cypress-xpath
* yarn add cypress-xpath --dev

Use below code in the test
require('cypress-xpath');
