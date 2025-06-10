// import { chromium, expect} from "@playwright/test"
// import dotenv from 'dotenv'
// dotenv.config()

// export default async function globalSetup() {
//   const browser = await chromium.launch()
//   const context = await browser.newContext()
//   const page = await context.newPage()

//   await page.goto('http://secure.smartbearsoftware.com/samples/TestComplete12/WebOrders/Login.aspx'); //THIS IS ONE WAY, other way is global-setup.ts

//   await page.getByRole("textbox", { name: "Username:" }).fill("Tester");
//   await page.getByRole("textbox", { name: "Password:" }).fill("test");
//   await page.getByRole("button", { name: "Login" }).click();

//   await expect(page.getByText("Welcome, Tester! | Logout")).toBeVisible();

//   await page.context().storageState({ path: "./auth/smartlogin.json" });
// }
