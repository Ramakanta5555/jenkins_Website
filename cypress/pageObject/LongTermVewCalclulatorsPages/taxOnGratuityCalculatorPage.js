class taxOnGratuityCalculatorPage{

    get lastDrawnbasic(){
        return cy.xpath(`(//input[@id='investment'])[1]`)
    }

    get lastDrawnDA(){
        return cy.xpath(`(//input[@value='0'])[1]`)
    }

    get tenureOfService(){
        return cy.get(`#years`)
    }

    get gratuityReceivedFromEmployer()
    {
        return cy.get(`input[value='300000']`)
    }
}
export default taxOnGratuityCalculatorPage;