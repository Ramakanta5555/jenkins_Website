class fixedDepositeCalculatorPage{


    get fixDespositeInvestmentAmount()
    {
        return cy.get(`#investment`)
    }

    get fixDespositeExpectedAnnualReturnRate()
    {
        return cy.get(`#percentage`)
    }

    get fixDespositeYear()
    {
        return cy.get(`#years`)
    }

    get fixDespositeMonth()
    {
        return cy.get(`div[role='combobox']`)
    }
    
    get fixedDepositeinvestmentAmount()
    {
        return cy.xpath(`(//div[normalize-space()='200001'])[1]`)
    }

    get fixedDepositeEstimatedReturns()
    {
        return cy.xpath(`(//div[contains(text(),'269148')])[1]`)
    }

    get fixedDepositeReturnAmount()
    {
        return cy.xpath(`(//div[normalize-space()='469149'])[1]`)
    }

}

export default fixedDepositeCalculatorPage;