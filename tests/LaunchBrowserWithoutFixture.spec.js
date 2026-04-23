const{test, chromium, firefox, webkit}=require('@playwright/test')
test('Launch Browser Without Using Page Fixture', async()=>
{
 const browser=await webkit.launch();
 const context=await browser.newContext();
 const page=await context.newPage();
 await context.storageState({path:'Login.json'})

 await page.goto('https://www.demoblaze.com/cart.html#');
 await page.waitForTimeout(3000);



})