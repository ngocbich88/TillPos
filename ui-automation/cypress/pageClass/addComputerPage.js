const addComputerObjects = require('../pageObjects/addComputerObjects.json')
const homeObjects = require('../pageObjects/homeObjects.json')

class AddComputerPage {
 
    /**
     * Add new computer with computer_info is json data contains name, introduced date, discontinued date, company
     * @param {*} computer_info 
     *              computer_info: {
     *                    "name": "computer_name",
     *                    "introduced_date": "2022-08-07",
     *                    "discontinued_date": "2023-08-07",
     *                    "company": "company_name",
     *              }
     */
    addANewComputer(computer_info) {
        cy.get(homeObjects.addANewComputerBtn).click()
        cy.get(addComputerObjects.computerNameTxt).type(computer_info.name) // Enter name
        cy.get(addComputerObjects.introducedDateTxt).type(computer_info.introduced_date) // Enter introduced date
        cy.get(addComputerObjects.discontinuedDateTxt).type(computer_info.discontinued_date) // Enter discontinued date
        cy.get('select').select(computer_info.company) 
        cy.get(addComputerObjects.createThisComputerBtn).click() 

    }
}
module.exports = new AddComputerPage();