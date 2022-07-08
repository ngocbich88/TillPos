/// <reference types="cypress" />
require('cypress-xpath')
const homeObjects = require('../../pageObjects/homeObjects.json')
context('Filter Not Matched Test', () => {
  
  beforeEach(() => {
    cy.goToHomePage() // Go to Computer site
  })

  it('Check filter result with not matched computer name', () => {
    // Steps:
    //       1. Go to site:
    //          https://computer-database.herokuapp.com/
    //       2. Enter the filter by name with non-existed string
    //       3. Check the result, not found message should displayed
    let non_existed_computer_name = "````&&&********98989898`````9"
    cy.get(homeObjects.filterTxt).type(non_existed_computer_name).type('{enter}')
    cy.xpath(homeObjects.message.notFoundComputerMsgXpath, {timeout:5000}).should("exist")
  })


})
