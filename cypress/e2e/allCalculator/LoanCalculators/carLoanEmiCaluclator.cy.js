import carLoanEmiCalculatorPage from "../../../pageObject/LoanCalculatorsPages/carLoanEmiCalculatorPAge";

describe('Car Loan Emi Calculator',()=>{
    beforeEach('Go to the Page',()=>{
        cy.visit('https://www.moolfinance.com/')
        cy.url().should('eq','https://www.moolfinance.com/')
        cy.title().should('eq','Mool Finance | Income Tax filing | Smart Payroll | Calculators')
        cy.visit('https://www.moolfinance.com/calculators/loan/car-loan-emi-calculator')
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

    it('Calculate the Car Loan Emi',()=>{

        const carLoanoanEmiCalculatorPageObj = new carLoanEmiCalculatorPage;

        carLoanoanEmiCalculatorPageObj.loanAmount.type('{selectall}{backspace}')
        carLoanoanEmiCalculatorPageObj.loanAmount.type('{moveToEnd}')
        carLoanoanEmiCalculatorPageObj.loanAmount.type('860000')

        carLoanoanEmiCalculatorPageObj.loanInterestRate.type('{selectall}{backspace}')
        carLoanoanEmiCalculatorPageObj.loanInterestRate.type('{moveToEnd}')
        carLoanoanEmiCalculatorPageObj.loanInterestRate.type('8.6')

        carLoanoanEmiCalculatorPageObj.loanTenure.type('{selectall}{backspace}')
        carLoanoanEmiCalculatorPageObj.loanTenure.type('{moveToEnd}')
        carLoanoanEmiCalculatorPageObj.loanTenure.type('84')

        cy.xpath(`(//div[normalize-space()='13663'])[1]`).as('MonthlyEmi').should('have.text','13663')
        cy.xpath(`(//div[normalize-space()='860000'])[1]`).as('PrincipleAmount').should('have.text','860000')
        cy.xpath(`(//div[normalize-space()='1147664'])[1]`).as('TotalAmount').should('have.text','1147664')
    })
})