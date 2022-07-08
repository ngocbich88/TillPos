/// <reference types="cypress" />
require('cypress-xpath')
const homeObjects = require('../../pageObjects/homeObjects.json')
context('Filter Matched Test', () => {
  
  beforeEach(() => {
    cy.goToHomePage() // Go to Computer site
  })

  it('Check filter result with matched computer name', () => {
    // Steps:
    //      1. Go to site:
    //        https://computer-database.herokuapp.com/
    //      2. Pick partial string of any computer name in the displayed list
    //      3. Enter the filter by name
    //      4. Check the result filtered list
    cy.xpath(homeObjects.resultTable.computerNameCol, {timeout:5000}).eq(0).invoke('text').then(($filter_str) => {
      cy.get(homeObjects.filterTxt, {timeout:5000}).type($filter_str).type('{enter}')
      cy.xpath(homeObjects.resultTable.computerNameCol, {timeout:5000}).each(($computer_name_col) => {
        let cp_name = $computer_name_col.text().toLowerCase()
        expect(cp_name).to.include($filter_str.toLowerCase())
      })
    })
   

  })


})
