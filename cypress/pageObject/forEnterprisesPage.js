class forEnterprisesPage{

    get startFreeTrailButton()
    {
        return cy.get(`div[class='flex flex-col md:flex-row md:items-center gap-10 mt-[2.5rem] max-md:gap-[1.5rem] md:mb-[3rem]'] div button[type='button'] a[class='flex items-center gap-4']`)
    }

    get bookAFreeDemoButton1()
    {
        return cy.xpath(`(//a[normalize-space()='Book a demo'])[1]`)
    }

    get personaLizationImage1()
    {
        return cy.get(`img[src='https://strapi.moolfinance.com/uploads/Vetan_product_img_b2ff994702.png']`)
    }

    get clientsAndAssociatesImg()
    {
        return cy.get(`div[class='slick-slider slick-initialized']`)
    }

    get forEmployeeImg()
    {
        return cy.get(`div[class='EnterpriseHowMoolWorks_EnterpriseEmployeesSection__AEQKQ mt-[4rem]']`)
    }

    get forEmployerImg()
    {
        return cy.xpath(`(//div[contains(@class,'EnterpriseHowMoolWorks_EnterpriseEmployerSection__cxVOC p-[1.8rem]')])[1]`)
    }

    get vetanByMoolImg()
    {
        return cy.xpath(`img[class='max-md:order-2 mt-[2rem]']`)
    }

    get paragPranapteSpeak()
    {
        return cy.get(`div[class='PeopleReview_PeopleReviewContainer__bBGYw pt-[4rem] pb-[4rem] pl-[1rem] pr-[1rem] max-md:pt-[5rem] max-md:pl-[1rem] max-md:pr-[1rem] max-md:pb-[7rem] relative people-review-swiper']`)
    }

    get getStartedButton()
    {
        return cy.xpath(`(//a[normalize-space()='Get Started'])[1]`)
    }

    get easyIntegrateImg()
    {
        return cy.get(`div[class='IntegrateWithERPs_ButtonContent__mEJnv mt-[6rem]']`)
    }

    get startfreeTrailForStartUpsbutton()
    {
        return cy.xpath(`(//a[@target='_blank'][normalize-space()='Start Free Trial'])[2]`)
    }

    get startFreeTrailForSMEsButton()
    {
        return cy.xpath(`(//a[@target='_blank'][normalize-space()='Start Free Trial'])[3]`)
    }

    get contactUsButtonForEnterprise()
    {
        return cy.xpath(`(//a[normalize-space()='Contact us'])[1]`)
    }

    get bookAFreeDemoButton2()
    {
        return cy.xpath(`(//a[normalize-space()='Book a Demo'])[1]`)
    }

    get faq1()
    {
        return cy.xpath(`(//div[@class='MuiAccordionSummary-expandIconWrapper css-1fx8m19'])[1]`)
    }
    get faq1Content()
    {
        return cy.xpath(`(//span[contains(text(),"Mool Vetan is the only solution that offers person")])[1]`)
    }

    get faq2()
    {
        return cy.xpath(`(//div[@class='MuiAccordionSummary-expandIconWrapper css-1fx8m19'])[2]`)
    }
    get faq2Content()
    {
        return cy.xpath(`(//span[contains(text(),'Mool’s salary personalization is a unique feature ')])[1]`)
    }



}

export default forEnterprisesPage;