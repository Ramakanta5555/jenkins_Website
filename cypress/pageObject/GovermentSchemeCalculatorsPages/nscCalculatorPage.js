class nscCalculatorPage{

    get nscInvestment(){
        return cy.get(`#investment`)
    }

    get nscTimePeriodYear(){
        return cy.get(`div[role='combobox']`)
    }

    get nscTimePeriodYear10(){
        return cy.xpath(`(//li[normalize-space()='10'])[1]`)
    }

    get nscTimePeriodYear5(){
        return cy.xpath(`(//li[normalize-space()='5'])[1]`)
    }


}

export default nscCalculatorPage;