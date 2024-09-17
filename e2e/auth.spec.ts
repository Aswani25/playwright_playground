import {test, expect, Page, Browser, Locator, BrowserContext} from '@playwright/test'
import { webkit, chromium, firefox } from '@playwright/test'

test('authentication pop up method 1 (bad Practice)', async() => {
    const browser: Browser = await chromium.launch({headless:false, channel:'chrome'});
    const context: BrowserContext = await browser.newContext();
    const page: Page = await context.newPage();

    await page.goto('https://admin:admin@the-internet.herokuapp.com/basic_auth')

    // await new Promise(() => { });  //prevent your script form exiting
});

test('authentication pop up method 2', async() => {
    const browser: Browser = await chromium.launch({headless:false, channel:'chrome'});
    const context: BrowserContext = await browser.newContext();
    const page: Page = await context.newPage();

    const username = 'admin';
    const password = 'admin';
    const autHeader = 'Basic '+ btoa(username + ':' + password);
    page.setExtraHTTPHeaders({Authorization: autHeader});

    await page.goto('https://the-internet.herokuapp.com/basic_auth')

    // await new Promise(() => { });  //prevent your script form exiting
});

test('authentication pop up method 3', async() => {
    const browser: Browser = await chromium.launch({headless:false, channel:'chrome'});
    const context: BrowserContext = await browser.newContext();
    const page: Page = await context.newPage();

    const username = 'admin';
    const password = 'admin';
    page.setExtraHTTPHeaders({Authorization: createAuthHeader(username,password)});

    await page.goto('https://the-internet.herokuapp.com/basic_auth')

    // await new Promise(() => { });  //prevent your script form exiting
});

function createAuthHeader(username:any, password:any){
    return 'Basic '+ btoa(username + ':' + password);
}