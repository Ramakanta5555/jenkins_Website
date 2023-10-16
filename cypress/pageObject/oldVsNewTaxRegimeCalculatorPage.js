class oldVsNewTaxRegimeCalculatrorPage{

    get ctc()
    {
        return cy.get('[id=":Rkd5j9mmja:"]')
    }

    get basic()
    {
        return cy.get('[id=":Rkt5j9mmja:"]')
    }

    get hra()
    {
        return cy.get('[id=":Rl55j9mmja:"]')

    }

    get salaryInfoNext()
    {
        return cy.get(`div[class='w-[100%] max-h-[550px] overflow-auto'] button[type='button']`)
    }

    
    get personalInfoNext()
    {
        return cy.xpath(`(//button[contains(@type,'button')][normalize-space()='Next'])[1]`)
    }

    get rentPaid()
    {
        return cy.get('[id=":r4:"]')

    }

    get housingNext()
    {
        return cy.xpath(`(//button[contains(@type,'button')][normalize-space()='Next'])[1]`)
    }

    get incomeConfigNext()
    {
        return cy.xpath(`(//button[contains(@type,'button')][normalize-space()='Next'])[1]`)
    }

    get alllowances()
    {
        return cy.xpath(`(//div[contains(@role,'combobox')])[1]`)
    }

    get foodAllowances()
    {
        return cy.xpath(`(//li[normalize-space()='Tiffin/Lunch/Dinner/Refreshment Allowance'])[1]`)
    }
    
    get lta()
    {
        return cy.xpath(`(//li[normalize-space()='Leave Travel Allowance (LTA)'])[1]`)
    }

    get childEducationAllowances()
    {
        return cy.xpath(`(//li[normalize-space()="Children's Education Allowance"])[1]`)
    }

    get hostelExpenditureAllowances()
    {
        return cy.xpath(`(//li[normalize-space()='Hostel Expenditure Allowance'])[1]`)
    }

    get allowancesValueField()
    {
        return cy.get('[id=":rh:"]')
    }

    get allowancesAdd()
    {
        return cy.xpath(`(//button[contains(@type,'button')][normalize-space()='Add'])[1]`)
    }

    get alllowancesNext()
    {
        return cy.xpath(`(//button[@type='button'][normalize-space()='Next'])[1]`)
    }

    get declarationSubmit()
    {
        return cy.xpath(`(//button[contains(@type,'button')][normalize-space()='Submit'])[1]`)
    }

}

export default oldVsNewTaxRegimeCalculatrorPage;