class inflationCalculatorPage{

    get currentValue(){
        return cy.xpath(`(//input[@id='investment'])[1]`)
    }

    get rateOfInflation(){
        return cy.xpath(`(//input[@id='investment'])[2]`)
    }

    get timePeriodYears(){
        return cy.get(`#years`)
    }
}
export default inflationCalculatorPage;