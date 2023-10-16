import inflationCalculatorPage from "../../../pageObject/LongTermVewCalclulatorsPages/inflationCalculatorPage";

describe('Inflation Calculatir',()=>{
    beforeEach('Go to the Page',()=>{
        cy.visit('https://www.moolfinance.com/')
        cy.url().should('eq','https://www.moolfinance.com/')
        cy.title().should('eq','Mool Finance | Income Tax filing | Smart Payroll | Calculators')
        cy.visit('https://www.moolfinance.com/calculators/long-term-view/inflation-calculator')
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

    it('Calculation of Inflation for 120K with 2 years tenure',()=>{

        const inflationCalculatorPageObj = new inflationCalculatorPage;

        inflationCalculatorPageObj.currentValue.type('{selectall}{backspace}')
        inflationCalculatorPageObj.currentValue.type('{moveToEnd}')
        inflationCalculatorPageObj.currentValue.type('1200000')

        inflationCalculatorPageObj.rateOfInflation.type('{selectall}{backspace}')
        inflationCalculatorPageObj.rateOfInflation.type('{moveToEnd}')
        inflationCalculatorPageObj.rateOfInflation.type('5.5')

        inflationCalculatorPageObj.timePeriodYears.type('{selectall}{backspace}')
        inflationCalculatorPageObj.timePeriodYears.type('{moveToEnd}')
        inflationCalculatorPageObj.timePeriodYears.type('2')

        cy.xpath(`(//div[normalize-space()='1200000'])[1]`).as('CurrentValue').should('have.text','1200000')
        cy.xpath(`(//div[contains(text(),'135630')])[1]`).as('ValueInflated').should('have.text','135630')
        cy.xpath(`(//div[normalize-space()='1335630'])[1]`).as('FutureValue').should('have.text','1335630')
    })

})