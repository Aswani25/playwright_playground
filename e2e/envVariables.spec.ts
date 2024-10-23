import {test} from '@playwright/test';

test.only('basic env test', async({page}) => {
    console.log(process.env.URL);
});