import { Page, expect } from "@playwright/test"


export default class BasePage {
    readonly page: Page
    
    constructor(page: Page) {
        this.page = page

        //Common Locators
    }
    

    //Reuseable Methods
}