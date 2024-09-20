import {test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test'
import {log} from 'console'
import { webkit, chromium, firefox } from '@playwright/test'

test('locator test', async() => {
    const browser: Browser = await chromium.launch({headless: false})
    const page: Page = await browser.newPage();
    await page.goto('https://www.orangehrm.com/en/30-day-free-trial');

    // await page.locator('form#Form_getForm >> #Form_getForm_Name').fill('Aswani');
    // await page.locator('form#Form_getForm >> text=Get Your Free Trial').click();

    const form = await page.locator('form#Form_getForm');
    const getYourFreeTrailButton = await page.locator('text=Get Your Free Trial');
    await form.locator(getYourFreeTrailButton).click();

    // await page.locator('form#Form_getForm').locator('#Form_getForm_Name').fill('Aswani');
    // await page.locator('form#Form_getForm').locator('text=Get Your Free Trial').click()
    await page.waitForTimeout(3000);
});