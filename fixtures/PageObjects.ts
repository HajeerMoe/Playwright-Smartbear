import { test as base, expect } from '@playwright/test'
import BasePage from '../pages/BasePage'
import LoginPage from '../pages/LoginPage'

type PageObject = {
    basePage: BasePage,
    loginPage: LoginPage,
}

export const test = base.extend<PageObject>({
    basePage: async ({ page }, use) => {
        const basePage = new BasePage(page)
        //ACTIONS BELOW

        await use(basePage)
    },
    
    loginPage: async ({ page }, use) => { // if you can go anywhere like TG website, go anywhere from anywhere, use extends (i think)
        await page.goto('')
        const loginPage = new LoginPage(page)
        //ACTIONS BELOW

        await use(loginPage)
    }
})

export { expect }