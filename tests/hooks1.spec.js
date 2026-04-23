const{test, expect}= require('@playwright/test')
let page;

test.beforeEach(async({browser})=>{
page=await browser.newPage();
//Login
await page.goto('https://www.demoblaze.com/')
await page.locator('#login2').click();
await page.fill('#loginusername','pavanol');
await page.fill('#loginpassword','test@123')
await page.getByRole('button',{name: 'Log in'}).click();
});

test.afterEach(async()=>{
//logout

await page.locator('#logout2').click();

});

//Add item to Cart
test('Add Item to Cart',async()=>{
await page.locator('.card-img-top').first().click();
page.on('dialog', async dialog=>{
expect(dialog.message()).toContain('Product added.');
dialog.accept();
});
await page.locator('a.btn.btn-success', { hasText: 'Add to cart' }).click();
await page.waitForTimeout(3000);
});