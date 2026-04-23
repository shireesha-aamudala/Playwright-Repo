const{test,expect}=require('@playwright/test')
test('Mouse Actions', async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/');
await page.getByText('GUI Elements').hover();

await page.locator('.dropbtn').hover();
await page.getByRole('link', { name: 'Mobiles' }).click();
await page.getByRole('button',{name:'Copy Text'}).dblclick();
const source=page.locator('#draggable');
const target=page.locator('#droppable');

// await source.dragTo(target);

await source.hover()
await page.mouse.down()

await target.hover()
await page.mouse.up()


await page.waitForTimeout(5000);
})