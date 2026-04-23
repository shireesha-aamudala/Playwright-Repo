const{test,expect}=require('@playwright/test')
test('Upload Files', async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/#');
await page.locator('#singleFileInput').setInputFiles('tests/Files/test.pdf');
await page.getByRole('button',{name:"Upload Single File"}).click();
const uploaded=page.locator('#singleFileStatus');
await expect(uploaded).toContainText('Single file selected:')
await page.waitForTimeout(3000);
})
