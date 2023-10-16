import loanEmiCalculatorPage from "../../../pageObject/LoanCalculatorsPages/loanEmiCalculatorPage";

describe('Loan Emi Calculator',()=>{
    beforeEach('Go to the Page',()=>{
        cy.visit('https://www.moolfinance.com/')
        cy.url().should('eq','https://www.moolfinance.com/')
        cy.title().should('eq','Mool Finance | Income Tax filing | Smart Payroll | Calculators')
        cy.visit('https://www.moolfinance.com/calculators/loan/loan-emi-calculator?id=0?tabIndex=3')
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

    it('Calculate the Loan Emi',()=>{

        const loanEmiCalculatorPageObj = new loanEmiCalculatorPage;

        loanEmiCalculatorPageObj.loanAmount.type('{selectall}{backspace}')
        loanEmiCalculatorPageObj.loanAmount.type('{moveToEnd}')
        loanEmiCalculatorPageObj.loanAmount.type('860000')

        loanEmiCalculatorPageObj.loanInterestRate.type('{selectall}{backspace}')
        loanEmiCalculatorPageObj.loanInterestRate.type('{moveToEnd}')
        loanEmiCalculatorPageObj.loanInterestRate.type('8.6')

        loanEmiCalculatorPageObj.loanTenure.type('{selectall}{backspace}')
        loanEmiCalculatorPageObj.loanTenure.type('{moveToEnd}')
        loanEmiCalculatorPageObj.loanTenure.type('84')

        cy.xpath(`(//div[normalize-space()='13663'])[1]`).as('MonthlyEmi').should('have.text','13663')
        cy.xpath(`(//div[normalize-space()='860000'])[1]`).as('PrincipleAmount').should('have.text','860000')
        cy.xpath(`(//div[normalize-space()='1147664'])[1]`).as('TotalAmount').should('have.text','1147664')
    })
})