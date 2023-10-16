import nscCalculatorPage from "../../../pageObject/GovermentSchemeCalculatorsPages/nscCalculatorPage"

describe(`NSC calculator`,()=>{
    beforeEach('Go to the Page',()=>{
        cy.visit('https://www.moolfinance.com/')
        cy.url().should('eq','https://www.moolfinance.com/')
        cy.title().should('eq','Mool Finance | Income Tax filing | Smart Payroll | Calculators')
        cy.visit('https://www.moolfinance.com/calculators/government-scheme/national-savings-certificate-calculator')
        cy.title().should('eq','National Savings Certificate NSC Calculator')
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

    it(`Calculate the Nsc for 10 years`,()=>{

        const nscCalculatorPageObj  = new nscCalculatorPage;

        nscCalculatorPageObj.nscInvestment.type('{selectall}{backspace}')
        nscCalculatorPageObj.nscInvestment.type('{moveToEnd}')
        nscCalculatorPageObj.nscInvestment.type('67800')

        nscCalculatorPageObj.nscTimePeriodYear.click()
        nscCalculatorPageObj.nscTimePeriodYear10.click()

        cy.xpath(`(//div[normalize-space()='67800'])[1]`).as('totalInvestmentAmount').should('have.text','67800')
        cy.xpath(`(//div[contains(text(),'78575')])[1]`).as('totalEstimatedReturn').should('have.text','78575')
        cy.xpath(`(//div[normalize-space()='146375'])[1]`).as('totalReturnAmount').should('have.text','146375')


    })

})