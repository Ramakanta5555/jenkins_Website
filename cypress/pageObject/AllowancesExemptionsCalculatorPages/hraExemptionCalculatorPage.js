const { realType } = require("cypress-real-events/commands/realType")

class hraExemptionCalculatorPage{

    get hraInputType()
    {
        return cy.get(`div[data='Monthly,Annually'] div[role='combobox']`)
    }

    get hraInputTypeAnnually()
    {
        return cy.xpath(`(//li[normalize-space()='Annually'])[1]`)
    }

    get hraInputTypeMonthly()
    {
        return cy.get(`(//li[normalize-space()='Monthly'])[1]`)
    }
    
    get hraStayingInMetro()
    {
        return cy.get(`div[data='Yes,No'] div[role='combobox']`)
    }

    get hraStayingInMetroNo()
    {
        return cy.xpath(`(//li[normalize-space()='No'])[1]`)
    }

    get hraStayingInMetroYes()
    {
        return cy.xpath(`(//li[normalize-space()='Yes'])[1]`)
    }

    get hraBasicSalary()
    {
        return cy.get(`input[value='62500']`)
    }

    get hraReceived()
    {
        return cy.get(`input[value='25000']`)
    }

    get hraRentPaid()
    {
        return cy.get(`input[value='22000']`)
    }
}

export default hraExemptionCalculatorPage;