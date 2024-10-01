import {test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test'
import {log} from 'console'
import { webkit, chromium, firefox } from '@playwright/test'

test('move to the element', async() => {
    const browser: Browser = await chromium.launch({headless: false})
    const page: Page = await browser.newPage();
    await page.goto('https://www.spicejet.com');
    await page.getByText('Add-ons').first().hover();
    await page.getByText('TaxiVisa Services').first().click();

    await page.waitForTimeout(15000);

    browser.close();
})

test('move to the element using mousehover', async() => {
    const browser: Browser = await chromium.launch({headless: false})
    const page: Page = await browser.newPage();
    await page.goto('https://www.bigbasket.com/');
    await page.getByText('Shop by').last().click();
    await page.locator('//a[@role="none"][normalize-space()="Beverages"]').hover();
    // await page.getByText('Beverages').first().hover();
    await page.locator("//a[normalize-space()='Tea']").hover();
    // await page.getByText('Tea').first().hover();
    await page.locator("//a[normalize-space()='Leaf & Dust Tea']").click();
    // await page.getByText('Leaf & Dust Tea').first().click();

    await page.waitForSelector("//h2[normalize-space()='Leaf & Dust Tea']")

    const pageHeader: Locator = await page.locator("//h2[normalize-space()='Leaf & Dust Tea']");
    await expect(pageHeader).toContainText('Leaf & Dust Tea');

    await page.waitForTimeout(15000);
    browser.close();
})