import rdCalculatorPage from "../../../pageObject/InvestmentCalculatorsPages/rdCalculatorPage.js";

describe('RD Calculator',()=>{
    beforeEach('Go to the RD Calculator page',()=>{
        cy.visit('https://www.moolfinance.com/')
        cy.url().should('eq','https://www.moolfinance.com/')
        cy.title().should('eq','Mool Finance | Income Tax filing | Smart Payroll | Calculators')
        cy.visit('https://www.moolfinance.com/calculators/investment/rd-calculator')
        cy.title().should('eq','Mool Finance')
    })

    it('Check all links on the Page',()=>{
        cy.get('a').each(link =>{
            if(link.prop('href')){
                cy.request({
                    url: link.prop('href'),
                    failOnStatusCode: false,
                    timeout: 10000
                })
            }
        })
    })

    it('Calcuaation of RD Calculator',()=>{

        const rdCalculatorPageObj = new rdCalculatorPage;

        rdCalculatorPageObj.investmentAmount.type('{selectall}{backspace}')
        rdCalculatorPageObj.investmentAmount.type('{moveToEnd}')
        rdCalculatorPageObj.investmentAmount.type('10000')

        rdCalculatorPageObj.roi.type('{selectall}{backspace}')
        rdCalculatorPageObj.roi.type('{moveToEnd}')
        rdCalculatorPageObj.roi.type('11.34')

        rdCalculatorPageObj.timePeriodYears.type('{selectall}{backspace}')
        rdCalculatorPageObj.timePeriodYears.type('{moveToEnd}')
        rdCalculatorPageObj.timePeriodYears.type('9')

        cy.xpath(`(//div[normalize-space()='1080000'])[1]`).should('have.text','1080000')
        cy.xpath(`(//div[contains(text(),'801736')])[1]`).should('have.text','801736')
        cy.xpath(`(//div[normalize-space()='1881736'])[1]`).should('have.text','1881736')


    })
})