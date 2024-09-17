import {test, expect, Browser, Page, Locator} from '@playwright/test'
import { webkit, chromium, firefox } from '@playwright/test'

test('locator test', async() => {
    const browser: Browser = await chromium.launch({headless:false});
    const page: Page = await browser.newPage();
    await page.goto('http://naveenautomationlabs.com/opencart/index.php?route=account/register');

    // create a web element(locator) + perform action on it (fill , click)
    // 1. Id
    const firstName: Locator = await page.locator('#input-firstname');
    const lastName: Locator = await page.locator('#input-lastname');

    await firstName.fill('Naveen');
    await lastName.fill('Automation');

    await page.screenshot({path: './screenshots/registration.png'});

    // 2. class Name Selector
    const logo: Locator = await page.locator('.img-responsive');
    const logoExist: Boolean = await logo.isEnabled();
    console.log(logoExist)

    // 3. Text Selector
    const header: Locator = await page.locator('text=Register Account')
    const headerExist: Boolean = await header.isEnabled();
    console.log(headerExist)

    const continueButton: Locator = await page.locator('text=Continue')
    const continueButtonExist: Boolean = await continueButton.isEnabled();
    console.log(continueButtonExist)

    const forgotPasswordLink: Locator = await page.locator('text=Forgotten Password');
    const forgotPasswordLinkExist: Boolean = await forgotPasswordLink.isEnabled();
    console.log(forgotPasswordLinkExist)

    // 4. css Selector
    const email: Locator = await page.locator('input#input-email');
    const telephone: Locator = await page.locator('input[name="telephone"]');
    const checkbox: Locator = await page.locator('input[type="checkbox"]');

    await email.fill('naveen@gmail.com');
    await telephone.fill('1234567890');
    await checkbox.click();

    // 5.  xpath Selector
    const password: Locator = await page.locator('xpath=//input[@id="input-password"]');
    const search: Locator = await page.locator('xpath=//input[@name="search" and @type="text"]');

    await password.fill('test@123');
    await search.fill('Macbook')

});