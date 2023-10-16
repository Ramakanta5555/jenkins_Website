class lumpsumCalculatorPage{

    get investmentAmount()
    {
        return cy.get(`#investment`)
    }

    get roi()
    {
        return cy.get(`#percentage`)
    }

    get timePeriodYears()
    {
        return cy.get(`#years`)
    }

}

export default lumpsumCalculatorPage;