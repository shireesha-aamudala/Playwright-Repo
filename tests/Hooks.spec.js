const{test, expect}= require('@playwright/test')
let page;
test.beforeEach(async({browser})=>{

 page= await browser.newPage();

await page.goto('https://www.demoblaze.com/')
await page.locator('#login2').click();
await page.fill('#loginusername','pavanol');
await page.fill('#loginpassword','test@123')

await page.getByRole('button',{name: 'Log in'}).click();
})
//Login
test('Grouping',async({page})=>{

//Add item to Cart
await page.locator('.card-img-top').first().click();
page.on('dialog', async dialog=>{
expect(dialog.message()).toContain('Product added.');
dialog.accept();
});
page.locator('a.btn.btn-success', { hasText: 'Add to cart' }).click();
await page.waitForTimeout(3000);

//logout

await page.locator('#logout2').click();
})