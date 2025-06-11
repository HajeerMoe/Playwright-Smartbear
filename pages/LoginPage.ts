import { Locator, Page } from "playwright"
import BasePage from "./BasePage"

export default class LoginPage extends BasePage{
    readonly loginForm: Locator
    readonly usernameField: Locator
    readonly passwordField: Locator
    readonly loginButton: Locator
    readonly errorMessage: Locator

    constructor(page: Page) {
        super(page)

        //Common Locators
        this.loginForm = this.page.locator('.login')
        this.usernameField = this.page.locator('#ctl00_MainContent_username')
        this.passwordField = this.page.locator('#ctl00_MainContent_password')
        this.loginButton = this.page.locator('#ctl00_MainContent_login_button')
        this.errorMessage = this.page.locator('#ctl00_MainContent_status')
    }

    //Reuseable Methods

    async enterUsername(username: string) {
        await this.usernameField.fill(username)
    }
    async enterPassword(password: string) {
        await this.passwordField.fill(password)
    }

    async login(username: string, password: string) {
        await this.enterUsername(username)
        await this.enterPassword(password)
        await this.loginButton.click()
    }
}