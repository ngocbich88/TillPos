/// <reference types="cypress" />
require('cypress-xpath')
const addComputerPage = require('../../pageClass/addComputerPage')
const homeObjects = require('../../pageObjects/homeObjects.json')
const Generics = require('../../common/Generics');
context('Add New Computer Test', () => {
  
  beforeEach(() => {
    cy.goToHomePage() // Go to Computer site
  })

  it('Check filter result with matched computer name', () => {
    // Steps:
    //        1. Go to site:
    //        https://computer-database.herokuapp.com/
    //        2. Click Add a new computer
    //        3. Enter all valid fields
    //        4. Click Create this computer
    //        5. Check the computer is created with correct details
    let computer_name = "computer_name_" + Generics.randomString(7)
    let computer_info = {
                          "name": computer_name,
                          "introduced_date": "2022-08-07",
                          "discontinued_date": "2023-08-07",
                          "company": "RCA",
                        }
    addComputerPage.addANewComputer(computer_info)
    cy.xpath(homeObjects.message.addComputerSuccessMsgXpath, {timeout:5000}).should("exist")  // Success message displayed 
    cy.get(homeObjects.filterTxt).type(computer_info.name).type('{enter}') // Check the computer is created with correct details
    cy.xpath(homeObjects.resultTable.computerNameCol, {timeout:5000}).eq(0).should("have.text", computer_info.name)
   
    let short_month_intro, short_month_dis
    let day_intro, day_dis, year_intro, year_dis
    let intro_date = new Date(computer_info.introduced_date)
    let disc_date = new Date(computer_info.discontinued_date)
    short_month_intro = intro_date.toLocaleString('en-us', { month: 'short' });
    short_month_dis = disc_date.toLocaleString('en-us', { month: 'short' });
    day_intro = computer_info.introduced_date.split('-')[2]
    day_dis = computer_info.discontinued_date.split('-')[2]
    year_intro = computer_info.introduced_date.split('-')[0]
    year_dis = computer_info.discontinued_date.split('-')[0]

    cy.xpath(homeObjects.resultTable.introducedCol, {timeout:5000}).eq(0).should("include.text", day_intro + " " + short_month_intro + " " + year_intro)
    cy.xpath(homeObjects.resultTable.discontinuedCol, {timeout:5000}).eq(0).should("include.text", day_dis + " " + short_month_dis + " " + year_dis)
    cy.xpath(homeObjects.resultTable.companyCol, {timeout:5000}).eq(0).should("include.text", computer_info.company)

  })


})
