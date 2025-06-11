import { Page, expect } from '@playwright/test'

export class ScreenshotUtils {
    static async takeScreenshot(page: Page, isFullPage = true) { //isFullPage is for flexibility but you can remove this param and just put fullPage: true in toHaveScreenshot
        await expect(page).toHaveScreenshot({fullPage: isFullPage})
    }
    
}