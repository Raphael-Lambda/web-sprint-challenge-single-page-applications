import { getByAltText } from "@testing-library/dom"

describe('Pizza App', () => {
    //schedule smthg to run before every test
    //start each test with a blank space
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const pizzaButton = () => cy.get('#root > div > div > a:nth-child(2) > button')
    const box = () => cy.get('#name-input')
    const box2 = () => cy.get('#special-text')
    const onions = () => cy.get('#Onions')
    const pepperoni = () => cy.get('#Pepperoni')
    const sausage = () => cy.get('#Sausage')
    // const sauce = () => cy.get('#Original-red')
    // const submitbutton = () => cy.get('#order-button')
    const pizzaForm = () => cy.get('#pizza-form')
    const sauce = () => cy.get('#Original-red')


    // const textInput = () => cy.get('input[name=text]')
    // const authorInput = () => cy.get('input[name=author]')

    //it: keyword to create test
    it('add text to the box', () => {
        //to create an asserstion use 'expect'
        pizzaButton().click()
        box().type('some text').should('have.value','some text')
    })
    it('add text to the box2', () => {
        //to create an asserstion use 'expect'
        pizzaButton().click()
        box2().type('some text').should('have.value','some text')
    })

    it('select toppings', () => {
        //to create an asserstion use 'expect'
        pizzaButton().click()
        onions().check().should('be.checked')
        pepperoni().check().should('be.checked')
        sausage().check().should('be.checked')
    })

    it('submit form', () => {
        //to create an asserstion use 'expect'
        pizzaButton().click()
        onions().check()
        pepperoni().check()
        sauce().check()
        sausage().check()
        box2().type('some text')
        box().type('some text')
        pizzaForm().submit()
    })
    
})