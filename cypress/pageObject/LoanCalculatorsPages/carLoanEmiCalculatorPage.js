class carLoanEmiCalculatorPage{

    get loanAmount(){
        return cy.get(`#investment`)
    }

    get loanInterestRate(){
        return cy.get(`#years`)
    }

    get loanTenure(){
        return cy.get(`#percentage`)
    }
}

export default carLoanEmiCalculatorPage;