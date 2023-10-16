class forTaxProfessionalsPage{
    
    get lekhakarImg1()
    {
        return cy.get(`img[src='https://strapi.moolfinance.com/uploads/tax_proff_hero_0f2826d3bf.png']`)
    }

    get startFreeTrailButton()
    {
        return cy.get(`button[class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium css-13uzjhu'] a[class='flex items-center gap-4']`)
    }

    get demoButton()
    {
        return cy.xpath(`(//a[normalize-space()='Enquire'])[1]`)
    }

    get salaryPersonalizationContent()
    {
        return cy.xpath(`(//div[@class='MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiAccordion-root MuiAccordion-rounded Mui-expanded MuiAccordion-gutters css-1h5hjhk'])[1]`)
    }

    get complianceAutomationButton()
    {
        return cy.xpath(`(//h4[normalize-space()='Compliance Automation'])[1]`)
    }

    get complianceAutomationContent()
    {
        return cy.xpath(`(//div[@class='MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiAccordion-root MuiAccordion-rounded Mui-expanded MuiAccordion-gutters css-1h5hjhk'])[1]`)
    }

    get payoutManagmentButton()
    {
        return cy.xpath(`(//h4[normalize-space()='Payout Management'])[1]`)
    }

    get payoutManagmentContent()
    {
        return cy.xpath(`(//div[@class='MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiAccordion-root MuiAccordion-rounded Mui-expanded MuiAccordion-gutters css-1h5hjhk'])[1]`)
    }

    get enquireNowButton()
    {
        return cy.get(`button[class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium mt-[4rem] css-13uzjhu'] a[class='flex items-center gap-4']`)
    }

    get moolPayrollProcessImg()
    {
        return cy.get(`div[class='TaxProfessionalsBuildEffectivePayroll_PayrollItem__VBIAg TaxProfessionalsBuildEffectivePayroll_ActiveItem__QdHcm pt-[4rem] pl-[5rem] pb-[3rem] pr-[5rem] w-[50%] max-md:w-[100%]']`)
    }

    get manualPayrollProcessImg()
    {
        return cy.get(`div[class='TaxProfessionalsBuildEffectivePayroll_PayrollItem__VBIAg pt-[4rem] pl-[5rem] pb-[3rem] pr-[5rem] w-[50%] max-md:w-[100%]']`)
    }

    get easyIntegrateImg()
    {
        return cy.get(`div[class='IntegrateWithERPs_ButtonContent__mEJnv mt-[6rem]']`)
    }

    get faq1Button()
    {
        return cy.xpath(`(//div[@class='MuiAccordionSummary-expandIconWrapper css-1fx8m19'])[1]`)
    }

    get faq1Content()
    {
        return cy.xpath(`(//span[contains(text(),"Mool Vetan is the only solution that offers person")])[1]`)
    }

    get faq2Button()
    {
        return cy.xpath(`(//div[@class='MuiAccordionSummary-expandIconWrapper css-1fx8m19'])[2]`)
    }

    get faq2Content()
    {
        return cy.get(`div[class='MuiCollapse-root MuiCollapse-vertical MuiCollapse-entered css-c4sutr'] div[class='MuiCollapse-wrapper MuiCollapse-vertical css-hboir5'] div[class='MuiCollapse-wrapperInner MuiCollapse-vertical css-8atqhb'] div[id='panel2bh-content'] div[class='MuiAccordionDetails-root css-u7qq7e'] div p span span`)
    }

}

export default forTaxProfessionalsPage;