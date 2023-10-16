import lumpsumCalculatorPage from "../../../pageObject/InvestmentCalculatorsPages/lumpsumCalculatorPage.js";

describe('Lumpsum Calculator page',()=>{
    beforeEach('go to the lumpsum Calculator page',()=>{
        cy.visit('https://www.moolfinance.com/')
        cy.url().should('eq','https://www.moolfinance.com/')
        cy.title().should('eq','Mool Finance | Income Tax filing | Smart Payroll | Calculators')
        cy.visit('https://www.moolfinance.com/calculators/investment/lumpsum-calculator')
        cy.title().should('eq','Lumpsum Calculator - magic of compounding')
    })

    it('check all links of the page',()=>{

        cy.get('a').each(link =>{
            if (link.prop('href')){
                cy.request({
                    url: link.prop('href'),
                    failOnStatusCode: false,
                    timeOut:10000
                })
                // cy.log(link.prop('href'))
            }
        })
    })

    

    it(`calculation with constant values`,()=>{

        const lumpsumCalculatorPageObj = new lumpsumCalculatorPage;

        lumpsumCalculatorPageObj.investmentAmount.click()
        lumpsumCalculatorPageObj.investmentAmount.type('{selectall}{backspace}')
        lumpsumCalculatorPageObj.investmentAmount.type('{moveToEnd}')
        lumpsumCalculatorPageObj.investmentAmount.type('200000')

        lumpsumCalculatorPageObj.roi.type('{selectall}{backspace}')
        lumpsumCalculatorPageObj.roi.type('{moveToEnd}')
        lumpsumCalculatorPageObj.roi.type('9.7')

        lumpsumCalculatorPageObj.timePeriodYears.type('{selectall}{backspace}')
        lumpsumCalculatorPageObj.timePeriodYears.type('{moveToEnd}')
        lumpsumCalculatorPageObj.timePeriodYears.type('8')

        cy.xpath(`(//div[normalize-space()='200000'])[1]`).should('have.text','200000')
        cy.xpath(`(//div[contains(text(),'219453')])[1]`).should('have.text','219453')
        cy.xpath(`(//div[normalize-space()='419453'])[1]`).should('have.text','419453')


        
    })
})