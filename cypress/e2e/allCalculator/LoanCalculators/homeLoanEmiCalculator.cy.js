import homeLoanEmiCalculatorPage from "../../../pageObject/LoanCalculatorsPages/homeLoanEmiCalculator";

describe('Home Loan Emi Calculator',()=>{
    beforeEach('Go to the Page',()=>{
        cy.visit('https://www.moolfinance.com/')
        cy.url().should('eq','https://www.moolfinance.com/')
        cy.title().should('eq','Mool Finance | Income Tax filing | Smart Payroll | Calculators')
        cy.visit('https://www.moolfinance.com/calculators/loan/home-loan-emi-calculator')
        cy.title().should('eq','Home Loan Calculator')
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

    it('Calculate the Home Loan Emi',()=>{

        const homeLoanEmiCalculatorPageObj = new homeLoanEmiCalculatorPage;

        homeLoanEmiCalculatorPageObj.loanAmount.type('{selectall}{backspace}')
        homeLoanEmiCalculatorPageObj.loanAmount.type('{moveToEnd}')
        homeLoanEmiCalculatorPageObj.loanAmount.type('5000000')

        homeLoanEmiCalculatorPageObj.loanInterestRate.type('{selectall}{backspace}')
        homeLoanEmiCalculatorPageObj.loanInterestRate.type('{moveToEnd}')
        homeLoanEmiCalculatorPageObj.loanInterestRate.type('7.33')

        homeLoanEmiCalculatorPageObj.loanTenure.type('{selectall}{backspace}')
        homeLoanEmiCalculatorPageObj.loanTenure.type('{moveToEnd}')
        homeLoanEmiCalculatorPageObj.loanTenure.type('360')

        cy.xpath(`(//div[normalize-space()='34381'])[1]`).as('MonthlyEmi').should('have.text','34381')
        cy.xpath(`(//div[normalize-space()='5000000'])[1]`).as('PrincipleAmount').should('have.text','5000000')
        cy.xpath(`(//div[normalize-space()='12376995'])[1]`).as('TotalAmount').should('have.text','12376995')
    })
})