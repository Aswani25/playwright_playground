import {test, expect, Browser, Page, Locator} from '@playwright/test'
import { webkit, chromium, firefox } from '@playwright/test'

test('login test', async() => {
    const browser: Browser = await firefox.launch({headless:false});
    const page: Page = await browser.newPage();
    await  page.goto('http://naveenautomationlabs.com/opencart/index.php?route=account/login');
    const emailId: Locator = await page.locator('#input-email');
    const password: Locator = await page.locator('#input-email');
    const loginButton:Locator = await page.locator('[value="Login"]')
    
    emailId.fill('pwtest@opencart.com');
    password.fill('playwright@123');
    loginButton.click();

    const title = await page.title()
    console.log("homepage title: ", title)

    await page.screenshot({path: 'homepage.png'})

    expect(title).toEqual('My Account')

    await browser.close()
});