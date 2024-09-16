import { test, expect, Browser, Page, Locator, BrowserContext } from '@playwright/test'
import { webkit, chromium, firefox } from '@playwright/test'

test('browser context', async () => {
    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    // const page: Page = await browser.newPage();

    // browser_context_1
    const browser_context_1: BrowserContext = await browser.newContext();
    const page1: Page = await browser_context_1.newPage();
    // browser_context_2
    const browser_context_2: BrowserContext = await browser.newContext();
    const page2: Page = await browser_context_2.newPage();

    // browser1
    await page1.goto('http://naveenautomationlabs.com/opencart/index.php?route=account/login');
    const emailId1: Locator = await page1.locator('[name="email"]');
    const password1: Locator = await page1.locator('#input-password');
    const loginButton1: Locator = await page1.locator('[value="Login"]');
    
    await emailId1.fill('pwpg@gmail.com');
    await password1.fill('test@123');
    await loginButton1.click();

    // browser2
    await page2.goto('http://naveenautomationlabs.com/opencart/index.php?route=account/login',{timeout:30000});
    const emailId2: Locator = await page2.locator('[name="email"]');
    const password2: Locator = await page2.locator('#input-password');
    const loginButton2: Locator = await page2.locator('[value="Login"]');
    
    await password2.fill('test@123');
    await emailId2.fill('pwpg1@gmail.com');    
    await loginButton2.click();

    const title1 = await page1.title()
    console.log("homepage title: ", title1)

    const title2 = await page2.title()
    console.log("homepage title: ", title2)

    await browser_context_1.close()
    await browser_context_2.close()
    
    await browser.close()
    // await new Promise(() => { });  //prevent your script form exiting

});