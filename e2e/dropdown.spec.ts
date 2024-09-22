import {test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test'
import {log} from 'console'
import { webkit, chromium, firefox } from '@playwright/test'

test('select based dropdown test', async() => {
    const browser: Browser = await chromium.launch({headless: false})
    const page: Page = await browser.newPage();
    await page.goto('https://www.magupdate.co.uk/magazine-subscription/phrr');

    const countryDropdown = 'select#Contact_CountryCode';

    // await page.selectOption(countryDropdown, {value: 'GA'});
    // await page.selectOption(countryDropdown, {label: 'Australia'});
    // await page.selectOption(countryDropdown, {index: 10});

    const alloptions = await page.$$(countryDropdown + '> option');
    console.log(alloptions.length);

    for (const e of alloptions){
        const text = await e.textContent();
        console.log(text);
        if (text === 'India'){
            await page.selectOption(countryDropdown, {label: text});
            break;
        }
    }
    

    await page.waitForTimeout(15000);
})