import forIndividualPage from '../pageObject/forIndividualPage'

describe(`for individual Page`, ()=>{
    beforeEach(()=>{
        
        cy.visit('https://www.moolfinance.com/')
        cy.url().should('eq','https://www.moolfinance.com/')
        cy.title().should('eq','Mool Finance | Income Tax filing | Smart Payroll | Calculators')
        cy.visit('https://www.moolfinance.com/individuals')
        cy.title().should('eq','Mool for Individuals | ITR Filing for FY 2023-24 | Rent Receipts | Form 12BB')
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

it('css of the Page',()=>{

    const individualPage = new forIndividualPage();

    // individualPage.forIndividual.click({force:true});
    cy.get(`div[class='AppBar_AppBarMiddleMenu__rXXyx'] li:nth-child(1) a:nth-child(1)`).click()

    cy.wait(5000)

    individualPage.amplifyYourFinanceImg.should('be.visible');

    individualPage.slideRentreceipt.should('be.visible');

    individualPage.salaryOptimizationImage.should('be.visible');

    individualPage.solutionImage.should('be.visible');

    individualPage.clientSpeakSlide.should('be.visible');

    individualPage.knowledgeImage.should('be.visible');

    individualPage.supportSection.should('be.visible');

    individualPage.newsLetterSection.should('be.visible');

    individualPage.footerSection.should('be.visible');
})

it('Click on the Get Started Button, It should take you to the Jann', ()=>{

    const individualPage = new forIndividualPage();
    individualPage.getStaredButton.invoke('removeAttr','target').click()
    
    cy.url().should('eq','https://www.jann.moolfinance.com/rentReceipt/create')
    cy.go('back')
})
})


