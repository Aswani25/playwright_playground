import {test, expect, Browser, Page, Locator} from '@playwright/test'
import { webkit, chromium, firefox } from '@playwright/test'

test('login test', async() => {
    const browser: Browser = await chromium.launch({headless:false});
    const page: Page = await browser.newPage();
    await page.goto('http://naveenautomationlabs.com/opencart/index.php?route=account/login');
    const emailId: Locator = await page.locator('#input-email');
    const password: Locator = await page.locator('#input-password');
    const loginButton:Locator = await page.locator('[value="Login"]')
    
    await emailId.fill('pwpg@gmail.com');
    await password.fill('test@123');
    await loginButton.click();

    const title = await page.title()
    console.log("homepage title: ", title)

    await page.screenshot({path: 'homepage.png'})

    expect(title).toEqual('Account Login')

    await browser.close()
});