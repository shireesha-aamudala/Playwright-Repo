const{test,expect, chromium}=require('@playwright/test')

test('Handle Multiple Tabs/Windows', async()=>{

const browser= await chromium.launch({headless:true});
const context=await browser.newContext();
const page=await context.newPage();
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

const pagePromise=context.waitForEvent('page');
await page.getByRole('link', { name: 'OrangeHRM, Inc' }).click();

const newPage=await pagePromise;
expect(newPage).toHaveTitle('');

const pages=context.pages();
await pages[0].bringToFront();

})