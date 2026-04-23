const {test, expect}=require('@playwright/test');

test('home', async({page})=>{
await page.goto('https://playwright.dev/');

console.log("URL is",page.url());
console.log("page title is",await page.title());

await expect(page).toHaveTitle(/Playwright/);
await expect(page).toHaveURL('https://playwright.dev/');

page.close();

});