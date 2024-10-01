import {test, expect, Page, Locator, Browser} from '@playwright/test'
import { webkit, chromium, firefox } from '@playwright/test'

test('mouse click event', async() => {
    const browser: Browser = await chromium.launch({headless: false});
    const page: Page = await browser.newPage();

    // Double click event
    await page.goto('https://www.demo.guru99.com/test/simple_context_menu.html');
    await page.getByText('Double-Click Me To See Alert').dblclick();
    await page.waitForTimeout(3000);

    // Right click event
    await page.getByText('right click me').click({button: 'right'});
    await page.waitForTimeout(3000);

    // shift click event    
    await page.goto('https://the-internet.herokuapp.com/shifting_content');
    await page.getByText('Example 1: Menu Element').click({modifiers: ['Shift']});
    await page.waitForTimeout(3000);

    // mousehover
    await page.goto('https://www.spicejet.com');
    await page.getByText('Add-ons').first().hover();
    await page.getByText('TaxiVisa Services').first().click();

    browser.close()

});