class sipCalculatorPage{

    get sipinvestment()
    {
        return cy.xpath(`(//input[@id='investment'])[1]`)
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

export default sipCalculatorPage;