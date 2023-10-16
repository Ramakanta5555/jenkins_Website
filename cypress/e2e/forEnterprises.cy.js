import forEnterprisesPage from "../pageObject/forEnterPrisesPage";

describe('For Enterprise Page',()=>{
    beforeEach('Go to the Page',()=>{
        cy.visit('https://www.moolfinance.com/')
        cy.url().should('eq','https://www.moolfinance.com/')
        cy.title().should('eq','Mool Finance | Income Tax filing | Smart Payroll | Calculators')
        cy.visit('https://www.moolfinance.com/enterprise')
        cy.title().should('eq','Mool for Enterprises | Payroll automation | Compensation Design | Compliance Audit')
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

        const forEnterPrisesPageObj = new forEnterprisesPage;

        forEnterPrisesPageObj.startFreeTrailButton.invoke('removeAttr','target').click()
        cy.url().should('eq','https://www.vetan.moolfinance.com/register/newOrganization')
        cy.go('back')
        
        forEnterPrisesPageObj.bookAFreeDemoButton1.invoke('removeAttr','target').click()
        cy.url().should('eq','https://www.moolfinance.com/contactUs')
        cy.go('back')
        
        forEnterPrisesPageObj.personaLizationImage1.should('be.visible')
        forEnterPrisesPageObj.clientsAndAssociatesImg.should('be.visible')
        forEnterPrisesPageObj.forEmployeeImg.should('be.visible')
        forEnterPrisesPageObj.forEmployerImg.should('be.visible')
        // forEnterPrisesPageObj.vetanByMoolImg.should('be.visible')
        forEnterPrisesPageObj.paragPranapteSpeak.should('be.visible')

        forEnterPrisesPageObj.getStartedButton.invoke('removeAttr','target').click()
        cy.url().should('eq','https://www.vetan.moolfinance.com/login')
        cy.wait(5000)
        cy.go('back')
        cy.go('back')
        
        forEnterPrisesPageObj.easyIntegrateImg.should('be.visible')
        
        forEnterPrisesPageObj.startfreeTrailForStartUpsbutton.invoke('removeAttr','target').click()
        cy.url().should('eq','https://www.vetan.moolfinance.com/register/newOrganization')
        cy.go('back')

        forEnterPrisesPageObj.startFreeTrailForSMEsButton.invoke('removeAttr','target').click()
        cy.url().should('eq','https://www.vetan.moolfinance.com/register/newOrganization')
        cy.go('back')

        forEnterPrisesPageObj.contactUsButtonForEnterprise.invoke('removeAttr','target').click()
        cy.url().should('eq','https://www.moolfinance.com/contactUs')
        cy.go('back')

        forEnterPrisesPageObj.bookAFreeDemoButton2.invoke('removeAttr','target').click()
        cy.url().should('eq','https://www.moolfinance.com/contactUs')
        cy.go('back')

        forEnterPrisesPageObj.faq1.click()
        forEnterPrisesPageObj.faq1Content.should('be.visible')

        forEnterPrisesPageObj.faq2.click()
        cy.xpath(`(//div[@class='MuiCollapse-root MuiCollapse-vertical MuiCollapse-entered css-c4sutr'])[1]`).should('be.visible')



        

    })
})