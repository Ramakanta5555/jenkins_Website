class homeLoanEmiCalculatorPage{

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

export default homeLoanEmiCalculatorPage;