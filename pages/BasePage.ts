import { Locator, Page, expect } from "@playwright/test"


export default class BasePage {
    readonly page: Page
    readonly loginInfo: Locator
    
    constructor(page: Page) {
        this.page = page

        //Common Locators
        this.loginInfo = this.page.locator('.login_info')
    }
    

    //Reuseable Methods
    async wait(ms: number) {
        await this.page.waitForTimeout(ms)
    }
}