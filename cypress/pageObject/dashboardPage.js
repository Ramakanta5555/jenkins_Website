class dashboardPage{
    
    get moolLogo1()
    {
        return cy.get(`img[src='https://strapi.moolfinance.com/uploads/Mool_main_img_32fd44bc0d.png']`)
    }

    get forIndivisualHeroSection()
    {
        return cy.xpath(`(//span[normalize-space()='For Individual'])[1]`)
    }


    get forEnterpriseHeroSection()
    {
        return cy.xpath(`(//span[normalize-space()='For Enterprise'])[1]`)
    }

    get forTaxProfessionalHeroSection()
    {
        return cy.xpath(`(//span[normalize-space()='For Tax Professional'])[1]`)
    }

    get heroSectionSwiper()
    {
        return cy.get(`.HomeHeroSwiperSection_HomeHeroSwiperSection__X23n1.flex.items-center.justify-center.home-hero-swiper`)
    }

    get taxPlanningFY202324()
    {
        return cy.xpath(`(//a[@href='https://www.jann.moolfinance.com/assistedITR'])[1]`)
    }

    get apiSandboxForEnterprise()
    {
        return cy.xpath(`(//a[@href='https://www.moolfinance.com/enterprise'])[1]`)
    }

    get trustedByProfessionalsAcrossIndia()
    {
        return cy.xpath(`(//div[contains(@class,'HomeAuthSection_HomeAuthoriseSection__kBCZw flex justify-between items-center max-md:flex-col max-md:gap-[2rem]')])[1]`)
    }

    get moolForEveryOneLogo()
    {
        return cy.get(`img[src='https://strapi.moolfinance.com/uploads/Mool_Enterprise_5a96320c25.png']`)
    }

    get safeAndSeamless()
    {
        return cy.get(`body > div:nth-child(2) > div:nth-child(2) > main:nth-child(1) > div:nth-child(8) > div:nth-child(2) > div:nth-child(1)`)
    }

    get secureDataStorage()
    {
        return cy.get( `body > div:nth-child(2) > div:nth-child(2) > main:nth-child(1) > div:nth-child(8) > div:nth-child(2) > div:nth-child(2)`)
    }

    get gouravMalhotra()
    {
        return cy.get(`a[class='BlogCard_BlogCard__UTFVl max-w-[320px] h-[412px]']`)
    }

    get weAreHereToSupportYou()
    {
        return cy.get(`.SupportContact_SupportContactMain__495Nz`)
    }

    get subscribeToNewsletter()
    {
        return cy.get(`div[class='SubscribeNewsletter_SubscribeNewsletterContainer__asqlM flex items-center max-md:items-start max-md:pt-[3rem]']`)
    }

    get moolLogoFooter()
    {
        return cy.get(`div[class='Footer_FooterTop__RQDS4 flex gap-20 items-end max-md:flex-col max-md:items-start']`)
    }

    get footer()
    {
        return cy.get(`div[class='Footer_Menus__LH0c3 mt-[3rem] grid grid-cols-2 md:flex md:justify-between max-md:flex-wrap max-md:gap-[2rem] ']`)
    }
    

}


export default dashboardPage;