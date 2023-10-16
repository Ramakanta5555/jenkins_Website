import sipCalculatorPage from "../../../pageObject/InvestmentCalculatorsPages/sipCalculatorPage.js"

describe('SIP Calculator',()=>{
    beforeEach('Go to the SIP Calculator page',()=>{
        cy.visit('https://www.moolfinance.com/')
        cy.url().should('eq','https://www.moolfinance.com/')
        cy.title().should('eq','Mool Finance | Income Tax filing | Smart Payroll | Calculators')
        cy.visit('https://www.moolfinance.com/calculators/investment/sip-calculator')
        cy.title().should('eq','SIP Calculator')
    })
    it('check all links of the page',()=>{

        cy.get('a').each(link =>{
            if (link.prop('href')){
                cy.request({
                    url: link.prop('href'),
                    failOnStatusCode: false,
                    timeOut:10000
                })
                cy.log(link.prop('href'))
            }
        })
    })

    it('Calculatte SIP with 3 years and 10% ROI',()=>{
        const sipCalculatorPageObj = new sipCalculatorPage;

        sipCalculatorPageObj.sipinvestment.click()
        sipCalculatorPageObj.sipinvestment.type('{selectall}{backspace}');
        cy.wait(2000)
        sipCalculatorPageObj.sipinvestment.type('10000');

        sipCalculatorPageObj.roi.type('{selectall}{backspace}')
        sipCalculatorPageObj.roi.type('{moveToEnd}')
        sipCalculatorPageObj.roi.type('22')

        sipCalculatorPageObj.timePeriodYears.type('{selectall}{backspace}')
        sipCalculatorPageObj.timePeriodYears.type('{moveToEnd}')
        sipCalculatorPageObj.timePeriodYears.type('3')

        cy.xpath(`(//div[normalize-space()='3600000'])[1]`).should('have.text','3600000')
        cy.xpath(`(//div[contains(text(),'1528303')])[1]`).should('have.text','1528303')
        cy.xpath(`(//div[normalize-space()='5128303'])[1]`).should('have.text','5128303')



    })
})