import hraExemptionCalculatorPage from "../../../pageObject/AllowancesExemptionsCalculatorPages/hraExemptionCalculatorPage.js"

describe(`HRA Exemption calculator`,()=>{
    beforeEach('Go to the Page',()=>{
        cy.visit('https://www.moolfinance.com/')
        cy.url().should('eq','https://www.moolfinance.com/')
        cy.title().should('eq','Mool Finance | Income Tax filing | Smart Payroll | Calculators')
        cy.visit('https://www.moolfinance.com/calculators/allowance-exemptions/hra-exemption-calculator?id=0?tabIndex=2')
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

    it(`Calculation of the HRA Exemption Annually`,()=>{

        const hraExemptionCalculatorPageObj = new hraExemptionCalculatorPage;

        hraExemptionCalculatorPageObj.hraInputType.click()
        hraExemptionCalculatorPageObj.hraInputTypeAnnually.click()

        hraExemptionCalculatorPageObj.hraStayingInMetro.click()
        hraExemptionCalculatorPageObj.hraStayingInMetroYes.click()

        hraExemptionCalculatorPageObj.hraBasicSalary.type('{selectall}{backspace}')
        hraExemptionCalculatorPageObj.hraBasicSalary.type('{moveToEnd}')
        hraExemptionCalculatorPageObj.hraBasicSalary.type('75000')

        hraExemptionCalculatorPageObj.hraReceived.type('{selectall}{backspace}')
        hraExemptionCalculatorPageObj.hraReceived.type('{moveToEnd}')
        hraExemptionCalculatorPageObj.hraReceived.type('30000')

        hraExemptionCalculatorPageObj.hraRentPaid.type('{selectall}{backspace}')
        hraExemptionCalculatorPageObj.hraRentPaid.type('{moveToEnd}')
        hraExemptionCalculatorPageObj.hraRentPaid.type('27000')

        cy.xpath(`(//div[normalize-space()='324000'])[1]`).as('rentPaidResult').should('have.text','324000')
        cy.xpath(`(//div[contains(text(),'234000')])[1]`).as('hraAnnualExemptionAmount').should('have.text','234000')

    })
})