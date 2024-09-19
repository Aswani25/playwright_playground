import {test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test'
import { webkit, chromium, firefox } from '@playwright/test'

test('No Incognito Test', async() => {
    // const browser: Browser = await chromium.launch({headless:false});
    const browser: BrowserContext = await chromium.launchPersistentContext('', {headless:false});

    const pages: Page[] = browser.pages(); //2 - 0 to 1
    const page: Page = pages[0];
    // const page: Page = await browser.newPage();
    await page.goto('http://naveenautomationlabs.com/opencart/index.php?route=account/register');

    const firstName: Locator = await page.locator('#input-firstname');
    const lastName: Locator = await page.locator('#input-lastname');

    await page.waitForTimeout(3000)

});