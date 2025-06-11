import { test, expect } from './../../fixtures/PageObjects'
import LoginPage from '../../pages/LoginPage'
import { ScreenshotUtils } from '../../utils/ScreenshotUtils'

test.describe('SmartBear App Login Page visual Verification', () => {
    let loginPage: LoginPage

    // test.beforeEach(async ({ page }) => {
    //     await page.goto('')
    //     loginPage = new LoginPage(page)
    // })


    test('Login Page Visual Regression', async ({ loginPage }) => {
        await expect(loginPage.loginForm).toBeVisible()
        await ScreenshotUtils.takeScreenshot(loginPage.page)
    })
})