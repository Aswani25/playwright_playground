import { test, expect, Browser, Page, Locator, BrowserContext } from '@playwright/test'
import { webkit, chromium, firefox } from '@playwright/test'

test('login test', async () => {
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
    const emailId1: Locator = page1.locator('#input-email');
    const password1: Locator = page1.locator('#input-password');
    const loginButton1: Locator = page1.locator('[value="Login"]');

    emailId1.fill('pwpg@gmail.com');
    password1.fill('test@123');
    loginButton1.click();

    // browser2
    await page2.goto('http://naveenautomationlabs.com/opencart/index.php?route=account/login');
    const emailId2: Locator = page2.locator('#input-email');
    const password2: Locator = page2.locator('#input-password');
    const loginButton2: Locator = page2.locator('[value="Login"]');

    emailId2.fill('pwpg1@gmail.com');
    password2.fill('test@123');
    loginButton2.click();

    // await browser_context_1.close()
    // await browser_context_2.close()

    // await browser.close()
    await new Promise(() => { });  //prevent your script form exiting

});