import dashboardPage from '../pageObject/dashboardPage';

describe("Website", ()=>{
    beforeEach(() => {
        cy.visit('https://www.moolfinance.com/')
        cy.url().should('eq','https://www.moolfinance.com/')
        cy.title().should('eq','Mool Finance | Income Tax filing | Smart Payroll | Calculators')
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

   it('check the images on dashboard visibility', ()=>{

    const dashboardPageobj = new dashboardPage();
    
    dashboardPageobj.moolLogo1.should('be.visible')

    dashboardPageobj.forIndivisualHeroSection.realHover('mouse')
    cy.get(`body > div:nth-child(2) > div:nth-child(2) > main:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > h4:nth-child(1) > div:nth-child(2)`).should('be.visible')

    dashboardPageobj.forEnterpriseHeroSection.realHover('mouse')
    cy.get(`body > div:nth-child(2) > div:nth-child(2) > main:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > h4:nth-child(1) > div:nth-child(2)`).should('be.visible')

    dashboardPageobj.forTaxProfessionalHeroSection.realHover('mouse')
    cy.get(`body > div:nth-child(2) > div:nth-child(2) > main:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > h4:nth-child(1) > div:nth-child(2)`).should('be.visible')

    dashboardPageobj.heroSectionSwiper.should('be.visible')

    dashboardPageobj.taxPlanningFY202324.invoke('removeAttr','target').click()
    cy.url().should('eq','https://www.jann.moolfinance.com/assistedITR')
    cy.go('back')

    dashboardPageobj.apiSandboxForEnterprise.invoke('removeAttr','target').click()
    cy.url().should('eq','https://www.moolfinance.com/enterprise')
    cy.go('back')





   })


})