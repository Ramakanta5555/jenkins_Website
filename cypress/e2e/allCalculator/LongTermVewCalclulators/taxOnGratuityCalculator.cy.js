import taxOnGratuityCalculatorPage from "../../../pageObject/LongTermVewCalclulatorsPages/taxOnGratuityCalculatorPage";

describe('Tax On Gratuity Calculatir',()=>{
    beforeEach('Go to the Page',()=>{
        cy.visit('https://www.moolfinance.com/')
        cy.url().should('eq','https://www.moolfinance.com/')
        cy.title().should('eq','Mool Finance | Income Tax filing | Smart Payroll | Calculators')
        cy.visit('https://www.moolfinance.com/calculators/long-term-view/tax-on-gratuity-calculator')
        cy.title().should('eq','Mool Finance')
    })

    it('Check all the links of the page',()=>{
        cy.get('a').each(link =>{
            if (link.prop('href')){
                cy.request({
                    url: link.prop('href'),
                    failOnStatusCode: false,
                    timeout: 10000
                })
            }
        })
    })

    it('Calculation of Tax on Gratity with 7 years tenure',()=>{

        const taxOnGratuityCalculatorPageObj = new taxOnGratuityCalculatorPage;

        taxOnGratuityCalculatorPageObj.lastDrawnbasic.type('{selectall}{backspace}')
        taxOnGratuityCalculatorPageObj.lastDrawnbasic.type('{moveToEnd}')
        taxOnGratuityCalculatorPageObj.lastDrawnbasic.type('67000')

        taxOnGratuityCalculatorPageObj.lastDrawnDA.type('{selectall}{backspace}')
        taxOnGratuityCalculatorPageObj.lastDrawnDA.type('{moveToEnd}')
        taxOnGratuityCalculatorPageObj.lastDrawnDA.type('22000')

        taxOnGratuityCalculatorPageObj.tenureOfService.type('{selectall}{backspace}')
        taxOnGratuityCalculatorPageObj.tenureOfService.type('{moveToEnd}')
        taxOnGratuityCalculatorPageObj.tenureOfService.type('7')

        taxOnGratuityCalculatorPageObj.gratuityReceivedFromEmployer.type('{selectall}{backspace}')
        taxOnGratuityCalculatorPageObj.gratuityReceivedFromEmployer.type('{moveToEnd}')
        taxOnGratuityCalculatorPageObj.gratuityReceivedFromEmployer.type('359423')

        cy.xpath(`(//div[contains(text(),'292577')])[1]`).as('EligibleGratuity').should('have.text','292577')
        cy.xpath(`(//div[contains(text(),'66846')])[1]`).as('TaxableAmount').should('have.text','66846')
        cy.xpath(`(//div[contains(text(),'292577')])[2]`).as('ExemptedAmount').should('have.text','292577')
    })

})