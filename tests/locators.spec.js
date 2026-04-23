//import {test, expect} from '@playwright/test';
const {test, expect}= require('@playwright/test');
const path = require('node:path');

test('locator', async({page,context})=>{
    //Launch URL
    await page.goto('https://www.demoblaze.com/index.html');

    //Click on Login --property
    await page.click('id=login2');

    //Enter User Name  --css

    await page.fill('input#loginusername','pavanol');

    //Enter password --css

    await page.fill('input#loginpassword','test@123');

    //Click on Login -xpath

    await page.click("//button[normalize-space()='Log in']")

    //check for logout option
    const logoutlink= await page.locator('id=logout2');

    await expect(logoutlink).toBeVisible();

    //store cookies

    await context.storageState({path:'login.json'})
    //close the page
    await page.close();

});