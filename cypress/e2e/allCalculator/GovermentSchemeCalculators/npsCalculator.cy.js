import npsCalculatorPage from "../../../pageObject/GovermentSchemeCalculatorsPages/npsCalculatorPage.js";

describe('NPS Calculator', ()=>{ 
    
    beforeEach('Go to the NPS Page', ()=>{
        cy.visit('https://www.moolfinance.com/')
        cy.url().should('eq','https://www.moolfinance.com/')
        cy.title().should('eq','Mool Finance | Income Tax filing | Smart Payroll | Calculators')
        cy.visit('https://www.moolfinance.com/calculators/government-scheme/national-pension-scheme-calculator')
        cy.title().should('eq','National Pension Scheme NPS Calculator')
    })

    it('check all links of the page',()=>{

        cy.get('a').each(link =>{
            if (link.prop('href')){
                cy.request({
                    url: link.prop('href'),
                    failOnStatusCode: false,
                    timeOut:10000
                })
                cy.log(link.prop('href'))
            }
        })
    })

    it('Calculation of NPS',()=>{

        const npsCalculatorPageObj = new npsCalculatorPage;

        npsCalculatorPageObj.npsInvestment.type('{selectall}{backspace}')
        npsCalculatorPageObj.npsInvestment.type('{moveToEnd}')
        npsCalculatorPageObj.npsInvestment.type('9000')
        
        npsCalculatorPageObj.npsROI.type('{selectall}{backspace}')
        npsCalculatorPageObj.npsROI.type('{moveToEnd}')
        npsCalculatorPageObj.npsROI.type('6.88')

        npsCalculatorPageObj.npsCurremtAge.type('{selectall}{backspace}')
        npsCalculatorPageObj.npsCurremtAge.type('{moveToEnd}')
        npsCalculatorPageObj.npsCurremtAge.type('26')

        npsCalculatorPageObj.npsAnnuity.type('{selectall}{backspace}')
        npsCalculatorPageObj.npsAnnuity.type('{moveToEnd}')
        npsCalculatorPageObj.npsAnnuity.type('65')

        npsCalculatorPageObj.npsExpectesAnnuityRate.type('{selectall}{backspace}')
        npsCalculatorPageObj.npsExpectesAnnuityRate.type('{moveToEnd}')
        npsCalculatorPageObj.npsExpectesAnnuityRate.type('7')

        cy.xpath(`(//p[normalize-space()='3672000'])[1]`).should('have.text','3672000')
        cy.xpath(`(//p[normalize-space()='14688651'])[1]`).should('have.text','14688651')
        cy.xpath(`(//p[normalize-space()='9547623'])[1]`).should('have.text','9547623')
        cy.xpath(`(//p[normalize-space()='59332'])[1]`).should('have.text','59332')
        cy.xpath(`(//p[normalize-space()='5141028'])[1]`).should('have.text','5141028')


    })


})