import forTaxProfessionalsPage from "../pageObject/forTaxProfessionalsPage";

describe('For Tax Professionals',()=>{
    beforeEach('Go to the Page',()=>{
        cy.visit('https://www.moolfinance.com/')
        cy.url().should('eq','https://www.moolfinance.com/')
        cy.title().should('eq','Mool Finance | Income Tax filing | Smart Payroll | Calculators')
        cy.visit('https://www.moolfinance.com/taxprofessionals')
        cy.title().should('eq','Mool for Tax Experts | Manage multiple clients | File ITR FY 2023-24')
    })

    it('The all links should work properly', ()=>{


        cy.get('a').each(link =>{
            if(link.prop('href')){
              cy.request({
                url: link.prop('href'),
                failOnStatusCode: false,
                timeout:10000,
              })
              cy.log(link.prop('href'))
        }
    })
    })

    it('Css and the Buttons validation of the Page',()=>{

        const forTaxProfessionalsPageObj = new forTaxProfessionalsPage;

        forTaxProfessionalsPageObj.lekhakarImg1.should('be.visible')

        forTaxProfessionalsPageObj.startFreeTrailButton.invoke('removeAttr','target').click()
        cy.url().should('eq','https://www.ca.moolfinance.com/register')
        cy.go('back')
        
        forTaxProfessionalsPageObj.demoButton.invoke('removeAttr','target').click()
        cy.url().should('eq','https://www.moolfinance.com/contactUs')
        cy.go('back')
        
        forTaxProfessionalsPageObj.salaryPersonalizationContent.should('be.visible')
        
        forTaxProfessionalsPageObj.complianceAutomationButton.click()
        forTaxProfessionalsPageObj.complianceAutomationContent.should('be.visible')
        
        forTaxProfessionalsPageObj.payoutManagmentButton.click()
        forTaxProfessionalsPageObj.payoutManagmentContent.should('be.visible')
        
        forTaxProfessionalsPageObj.enquireNowButton.invoke('removeAttr','target').click()
        cy.url().should('eq','https://www.moolfinance.com/contactUs')
        cy.go('back')

        forTaxProfessionalsPageObj.moolPayrollProcessImg.should('be.visible')
        forTaxProfessionalsPageObj.manualPayrollProcessImg.should('be.visible')

        forTaxProfessionalsPageObj.easyIntegrateImg.should('be.visible')

        forTaxProfessionalsPageObj.faq1Button.click()
        forTaxProfessionalsPageObj.faq1Content.should('be.visible')

        forTaxProfessionalsPageObj.faq2Button.click()
        forTaxProfessionalsPageObj.faq2Content.should('be.visible')
        
    })
})