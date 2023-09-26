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
}


export default dashboardPage;