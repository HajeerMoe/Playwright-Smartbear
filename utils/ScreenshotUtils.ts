import { Page, expect } from '@playwright/test'

export class ScreenshotUtils {
    static async takeScreenshot(page: Page) {
        await expect(page).toHaveScreenshot({fullPage: true})
    }
    
}