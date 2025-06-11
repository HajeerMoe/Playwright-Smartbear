import { test, expect } from './../../fixtures/PageObjects'
import LoginPage from '../../pages/LoginPage'
import { ScreenshotUtils } from '../../utils/ScreenshotUtils'
import { InvalidLoginData, ValidLoginData } from '../../test-data/LoginData'

test.describe('SmartBear App Login Page visual Verification', () => {
    // let loginPage: LoginPage

    // test.beforeEach(async ({ page }) => {
    //     await page.goto('')
    //     loginPage = new LoginPage(page)
    // })


    test('Login Page Visual Regression', async ({ loginPage }) => {
        await expect(loginPage.loginForm).toBeVisible()
        await ScreenshotUtils.takeScreenshot(loginPage.page)
    })

    test('SmartBear App Login Page snapshot verification @Login @Smoke', async ({ loginPage }) => {
        await expect(loginPage.loginForm).toMatchAriaSnapshot(`
            - paragraph
            - text: "Username:"
            - textbox "Username:"
            - text: "Password:"
            - textbox "Password:"
            - button "Login"
            - paragraph: "In order to log in Orders sample use the following information:"
            - paragraph: Username - Tester Password - test
            `);
    })
    
})