import { test, expect } from './../../fixtures/PageObjects'
import { ValidLoginData, InvalidLoginData } from '../../test-data/LoginData'

test('SmartBear App Login Page sucessful login', async ({ loginPage }) => {
    await loginPage.login('Tester', 'test')
    await expect(loginPage.loginInfo).toBeVisible()
    await expect(loginPage.loginInfo).toContainText('Welcome, Tester!')
});


InvalidLoginData.forEach(user => {
    test(`SmartBear App Login Page invalid login ${user.case}`, async ({ loginPage }) => {
        await loginPage.login(user.username, user.password)
        await expect(loginPage.loginInfo).not.toBeVisible()
        await expect(loginPage.errorMessage).toBeVisible()
        await expect(loginPage.errorMessage).toHaveText('Invalid Login or Password.')
    })
})