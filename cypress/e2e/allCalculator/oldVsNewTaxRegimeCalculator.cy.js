import oldVsNewTaxRegimeCalculatrorPage from "../../pageObject/oldVsNewTaxRegimeCalculatorPage";

describe('Old Vs New Tax Regime Calculator',()=>{
    beforeEach('Go to the Page',()=>{
        cy.visit('https://www.moolfinance.com/')
        cy.url().should('eq','https://www.moolfinance.com/')
        cy.title().should('eq','Mool Finance | Income Tax filing | Smart Payroll | Calculators')
        cy.visit('https://www.moolfinance.com/oldVsNew')
        cy.title().should('eq','Mool Finance')
    })

    it('Check all the links of the page',()=>{
        cy.get('a').each(link =>{
            if (link.prop('href')){
                cy.request({
                    url: link.prop('href'),
                    failOnStatusCode: false,
                    timeout: 10000
                })
            }
        })
    })

    it(`Calculate the Tax with Max Declaration`,()=>{

        const oldVsNewTaxRegimeCalculatorPageObj = new oldVsNewTaxRegimeCalculatrorPage;

        oldVsNewTaxRegimeCalculatorPageObj.ctc.type('{moveToEnd}')
        oldVsNewTaxRegimeCalculatorPageObj.ctc.type('1500000')

        oldVsNewTaxRegimeCalculatorPageObj.basic.type('{moveToEnd}')
        oldVsNewTaxRegimeCalculatorPageObj.basic.type('60000')

        oldVsNewTaxRegimeCalculatorPageObj.hra.type('{moveToEnd}')
        oldVsNewTaxRegimeCalculatorPageObj.hra.type('30000')

        oldVsNewTaxRegimeCalculatorPageObj.salaryInfoNext.click()

        oldVsNewTaxRegimeCalculatorPageObj.personalInfoNext.click()

        oldVsNewTaxRegimeCalculatorPageObj.rentPaid.type('{moveToEnd}')
        oldVsNewTaxRegimeCalculatorPageObj.rentPaid.type('25000')

        oldVsNewTaxRegimeCalculatorPageObj.housingNext.click()

        oldVsNewTaxRegimeCalculatorPageObj.incomeConfigNext.click()
        
        //Add Food Allowances
        oldVsNewTaxRegimeCalculatorPageObj.alllowances.click()
        oldVsNewTaxRegimeCalculatorPageObj.foodAllowances.click()
        // oldVsNewTaxRegimeCalculatorPageObj.allowancesValueField.type('{moveToEnd}')
        oldVsNewTaxRegimeCalculatorPageObj.allowancesValueField.type('2500')
        oldVsNewTaxRegimeCalculatorPageObj.allowancesAdd.click()

        //LTA 
        oldVsNewTaxRegimeCalculatorPageObj.alllowances.click()
        oldVsNewTaxRegimeCalculatorPageObj.lta.click()
        oldVsNewTaxRegimeCalculatorPageObj.allowancesValueField.type('{moveToEnd}')
        oldVsNewTaxRegimeCalculatorPageObj.allowancesValueField.type('8000')
        oldVsNewTaxRegimeCalculatorPageObj.allowancesAdd.click()

        //Child Education Alloowances
        oldVsNewTaxRegimeCalculatorPageObj.alllowances.click()
        oldVsNewTaxRegimeCalculatorPageObj.childEducationAllowances.click()
        oldVsNewTaxRegimeCalculatorPageObj.allowancesValueField.type('{moveToEnd}')
        oldVsNewTaxRegimeCalculatorPageObj.allowancesValueField.type('300')
        oldVsNewTaxRegimeCalculatorPageObj.allowancesAdd.click()

        //Hostel Expenditure Allowances
        oldVsNewTaxRegimeCalculatorPageObj.alllowances.click()
        oldVsNewTaxRegimeCalculatorPageObj.hostelExpenditureAllowances.click()
        oldVsNewTaxRegimeCalculatorPageObj.allowancesValueField.type('{moveToEnd}')
        oldVsNewTaxRegimeCalculatorPageObj.allowancesValueField.type('600')
        oldVsNewTaxRegimeCalculatorPageObj.allowancesAdd.click()

        oldVsNewTaxRegimeCalculatorPageObj.alllowancesNext.click()
        oldVsNewTaxRegimeCalculatorPageObj.declarationSubmit.click()

        cy.xpath(`(//p[contains(@class,'font-semibold text-[#101828] text-[16px]')][normalize-space()='1,500,000'])[1]`).as('TotalCTC').should('have.text','1,500,000')
        cy.xpath(`(//p[contains(@class,'font-semibold text-[#101828] text-[16px]')][normalize-space()='120,314'])[1]`).as('grossPerMonth').should('have.text','120,314')
        cy.xpath(`(//p[contains(@class,'font-semibold text-[#101828] text-[16px]')][normalize-space()='60,000'])[1]`).as('basicPerMonth').should('have.text','60,000')
        cy.xpath(`(//p[contains(@class,'font-semibold text-[#101828] text-[16px]')][normalize-space()='30,000'])[1]`).as('hraPerMonth').should('have.text','30,000')
        cy.get(`body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(5) > td:nth-child(2) > p:nth-child(1)`).as('nonTaxableAllowances').should('have.text','11,300')
        cy.get(`body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(6) > td:nth-child(2) > p:nth-child(1)`).as('specialAllowances').should('have.text','18,914')
        cy.xpath(`(//p[contains(text(),'1,800')])[1]`).as('employerPF').should('have.text','1,800')
        cy.xpath(`(//p[contains(text(),'1,800')])[3]`).as('employeePF').should('have.text','1,800')
        cy.xpath(`(//p[contains(@class,'font-semibold text-[#101828] text-[16px]')][normalize-space()='2,886'])[1]`).as('gratuityPerMonth').should('have.text','2,886')
        cy.xpath(`(//p[contains(@class,'font-semibold text-[#101828] text-[16px]')][normalize-space()='200'])[1]`).as('ptPerMonth').should('have.text','200')
        cy.get(`body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(11) > td:nth-child(2) > p:nth-child(1)`).as('tdsPerMonth').should('have.text','1,738')
        cy.get(`body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(12) > td:nth-child(2) > p:nth-child(1)`).as('netSalaryPerMonth').should('have.text','116,576')
        cy.get(`body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(13) > td:nth-child(2) > p:nth-child(1)`).as('balanceCash').should('have.text','1,210,512')
    })
})