class npsCalculatorPage{

    get npsInvestment()
    {
        return cy.get(`#investment`)
    }
    get npsROI()
    {
        return cy.get(`input[value='10']`)
    }
    get npsCurremtAge()
    {
        return cy.get(`input[value='24']`)
    }
    get npsAnnuity()
    {
        return cy.get(`input[value='60']`)
    }
    get npsExpectesAnnuityRate()
    {
        return cy.get(`input[value='6']`)
    }

}

export default npsCalculatorPage;