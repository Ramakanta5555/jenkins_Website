class gratuityCalculatorPage{

    get lastDrawnbasic(){
        return cy.xpath(`(//input[@id='investment'])[1]`)
    }

    get lastDrawnDA(){
        return cy.xpath(`(//input[@id='investment'])[2]`)
    }

    get tenureOfService(){
        return cy.xpath(`(//input[@id='years'])[1]`)
    }
}
export default gratuityCalculatorPage;