import fixedDepositeCalculatorPage from '../../../pageObject/InvestmentCalculatorsPages/fixedDepositeCalculatorPage.js'

describe('Fixed Desposite Calculators',()=>{
    beforeEach('Go to calculator Page',()=>{
        
        cy.visit('https://www.moolfinance.com/')
        cy.url().should('eq','https://www.moolfinance.com/')
        cy.title().should('eq','Mool Finance | Income Tax filing | Smart Payroll | Calculators')
        cy.visit('https://www.moolfinance.com/calculators/investment/fixed-deposit-calculator')
    })

    it('Fixed Disposeite calculation with invest Amount 200001, without selecting the month',()=>{

        const fixedDepositeCalculatorPageObj = new fixedDepositeCalculatorPage();

        fixedDepositeCalculatorPageObj.fixDespositeInvestmentAmount.click()
        for(let n = 0; n < 6; n ++){
        fixedDepositeCalculatorPageObj.fixDespositeInvestmentAmount.type('{backspace}');
        }
        fixedDepositeCalculatorPageObj.fixDespositeInvestmentAmount.type('20000');
        fixedDepositeCalculatorPageObj.fixDespositeExpectedAnnualReturnRate.type('{selectall}{backspace}');
        fixedDepositeCalculatorPageObj.fixDespositeExpectedAnnualReturnRate.type('8.9')

        fixedDepositeCalculatorPageObj.fixDespositeYear.type('{selectall}{backspace}');
        fixedDepositeCalculatorPageObj.fixDespositeYear.type('1')
        // fixedDepositeCalculatorPageObj.fixDespositeMonth.select('2',{setTimeout:2000})

        fixedDepositeCalculatorPageObj.fixDespositeInvestmentAmount.should('have.value','200001')
        fixedDepositeCalculatorPageObj.fixedDepositeEstimatedReturns.should('have.text','269148')
        fixedDepositeCalculatorPageObj.fixedDepositeReturnAmount.should('have.text','469149')

       
    })

    it('Fixed Disposeite calculation with invest Amount 200001, with the month',()=>{

        const fixedDepositeCalculatorPageObj = new fixedDepositeCalculatorPage();

        fixedDepositeCalculatorPageObj.fixDespositeExpectedAnnualReturnRate.type('{selectall}{backspace}');
        fixedDepositeCalculatorPageObj.fixDespositeExpectedAnnualReturnRate.type('8.9')

        fixedDepositeCalculatorPageObj.fixDespositeYear.type('{selectall}{backspace}');
        fixedDepositeCalculatorPageObj.fixDespositeYear.type('1')

        cy.get(`div[role='combobox']`).click()
        cy.xpath(`(//li[normalize-space()='5'])[1]`).click()

        fixedDepositeCalculatorPageObj.fixDespositeInvestmentAmount.should('have.value','100000')
        cy.xpath(`(//div[contains(text(),'143056')])[1]`).should('have.text','143056')
        cy.xpath(`(//div[normalize-space()='243056'])[1]`).should('have.text','243056')  
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
})