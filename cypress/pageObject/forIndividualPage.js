class forIndividualPage{

    get forIndividual()
    {
        return cy.xpath(`(//a[normalize-space()='For Individuals'])[1]`)
    }

    get amplifyYourFinanceImg()
    {
        return cy.get(`.IndividualHero_animationSVG__RTY2F`)
    }

    get slideRentreceipt()
    {
        return cy.xpath(`(//div[contains(@class,'pb-0 max-md:flex-col max-md:h-[25rem] max-md:w-[32rem]')])[4]`)
    }
    get salaryOptimizationImage()
    {
        return cy.get(`img[src='https://strapi.moolfinance.com/uploads/salary_optimization_at_work_c8237ef477.png']`)
    }
    get solutionImage()
    {
        return cy.get(`div[class='slick-slide'] div div[class='IndividualSolutions_solutionContainer___JLPd flex justify-between pb-[3.2rem] max-md:flex-col'] div[class='IndividualSolutions_secondContent__vrX__ inline-flex flex-col justify-between py-[2.4rem] px-[1rem] h-[20.8rem] items-start w-[50%] max-md:w-[100%] max-md:order-0 max-md:mb-[5rem]']`)
    }

    get clientSpeakSlide()
    {
        return cy.get(`div[class='PeopleReview_PeopleReviewContainer__bBGYw pt-[4rem] pb-[4rem] pl-[1rem] pr-[1rem] max-md:pt-[5rem] max-md:pl-[1rem] max-md:pr-[1rem] max-md:pb-[7rem] relative people-review-swiper']`)
    }
    get knowledgeImage()
    {
        return cy.get(`a[class='BlogCard_BlogCard__UTFVl max-w-[320px] h-[412px]']`)
    }
    get supportSection()
    {
        return cy.get(`.SupportContact_SupportContactMain__495Nz`)
    }
    get newsLetterSection()
    {
        return cy.get(`div[class='SubscribeNewsletter_SubscribeNewsletterContainer__asqlM flex items-center max-md:items-start max-md:pt-[3rem]']`)
    }
    get footerSection()
    {
        return cy.get(`.Footer_FooterSection__uBmaS`)
    }

    get getStaredButton()
    {
        return cy.get(`a[class='flex items-center gap-4']`)
    }

    









    
    
}

export default forIndividualPage;