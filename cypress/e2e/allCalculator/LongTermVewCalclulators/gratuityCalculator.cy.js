import gratuityCalculatorPage from "../../../pageObject/LongTermVewCalclulatorsPages/gratuityCalculatorPage";

describe('Gratuity Calculatir',()=>{
    beforeEach('Go to the Page',()=>{
        cy.visit('https://www.moolfinance.com/')
        cy.url().should('eq','https://www.moolfinance.com/')
        cy.title().should('eq','Mool Finance | Income Tax filing | Smart Payroll | Calculators')
        cy.visit('https://www.moolfinance.com/calculators/long-term-view/gratuity-calculator?id=0?tabIndex=4')
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

    it('Calculation of Gratity with 7 years tenure',()=>{

        const gratuityCalculatorPageObj = new gratuityCalculatorPage;

        gratuityCalculatorPageObj.lastDrawnbasic.type('{selectall}{backspace}')
        gratuityCalculatorPageObj.lastDrawnbasic.type('{moveToEnd}')
        gratuityCalculatorPageObj.lastDrawnbasic.type('67000')

        gratuityCalculatorPageObj.lastDrawnDA.type('{selectall}{backspace}')
        gratuityCalculatorPageObj.lastDrawnDA.type('{moveToEnd}')
        gratuityCalculatorPageObj.lastDrawnDA.type('22000')

        gratuityCalculatorPageObj.tenureOfService.type('{selectall}{backspace}')
        gratuityCalculatorPageObj.tenureOfService.type('{moveToEnd}')
        gratuityCalculatorPageObj.tenureOfService.type('7')

        cy.xpath(`(//div[normalize-space()='359423'])[1]`).as('TotalGratuityPayable').should('have.text','359423')
        cy.xpath(`(//div[normalize-space()='7'])[1]`).as('TenureOfServuce').should('have.text','7')
    })

})