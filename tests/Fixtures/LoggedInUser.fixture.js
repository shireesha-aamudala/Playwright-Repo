import {test as base} from '@playwright/test'


export const test=base.extend({
loggedInUser: async ({page},use)=>{

await  page.goto('https://www.demoblaze.com/index.html');
await page.locator('#login2').click();
await page.locator('#loginusername').fill('pavanol');
await page.locator('#loginpassword').fill('test@123');
await page.getByRole('button',{name:'Log in'}).click();

await page.context.storageState({path:'demoblazeuiAuth.json'});
await use(page);

}





})