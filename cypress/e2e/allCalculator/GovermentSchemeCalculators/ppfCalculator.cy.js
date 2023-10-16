import ppfCalculatorPage from "../../../pageObject/GovermentSchemeCalculatorsPages/ppfCalculatorPage.js";

describe('PPF Calculator',()=>{
    beforeEach('Go to the PPF Page',()=>{
        cy.visit('https://www.moolfinance.com/')
        cy.url().should('eq','https://www.moolfinance.com/')
        cy.title().should('eq','Mool Finance | Income Tax filing | Smart Payroll | Calculators')
        cy.visit('https://www.moolfinance.com/calculators/government-scheme/public-provident-fund-calculator')
        cy.title().should('eq','Public Provident Fund PPF Calculator')
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

    it ('Pf Calculation with investment of 5600',()=>{
        
        const ppfCalculatorPageObj = new ppfCalculatorPage;

        ppfCalculatorPageObj.ppfInvestment.type('{selectall}{backspace}')
        ppfCalculatorPageObj.ppfInvestment.type('{moveToEnd}')
        ppfCalculatorPageObj.ppfInvestment.type('5600')

        cy.xpath(`(//div[normalize-space()='84000'])[1]`).should('have.text','84000')
        cy.xpath(`(//div[contains(text(),'80216')])[1]`).should('have.text','80216')
        cy.xpath(`(//div[normalize-space()='164216'])[1]`).should('have.text','164216')
    })

    it ('Pf Calculation with investment of 49000',()=>{
        
        const ppfCalculatorPageObj = new ppfCalculatorPage;

        ppfCalculatorPageObj.ppfInvestment.type('{selectall}{backspace}')
        ppfCalculatorPageObj.ppfInvestment.type('{moveToEnd}')
        ppfCalculatorPageObj.ppfInvestment.type('49000')

        cy.xpath(`(//div[normalize-space()='735000'])[1]`).should('have.text','735000')
        cy.xpath(`(//div[contains(text(),'701890')])[1]`).should('have.text','701890')
        cy.xpath(`(//div[normalize-space()='1436890'])[1]`).should('have.text','1436890')
    })
})