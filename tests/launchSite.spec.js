const {test, expect}= require('@playwright/test')

test('Launch Site', async({page})=>{

await page.goto('https://www.demoblaze.com/');
await page.locator('#signin2').click();
await page.getByLabel('Username:').fill('Arjun2023');
await page.getByLabel('Password:').fill('Arjun@2023');

const dialogPromise= page.waitForEvent('dialog');
await page.getByRole("button", {name:'Sign up'}).click();

const dialog= await dialogPromise;
console.log(dialog.message());

await dialog.accept();
})