const {test,expect}=require('@playwright/test');

test('Automation Practice',async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/');
await expect(page.getByText('Automation Testing Practice')).toBeVisible();
await page.locator('#name').fill('Rishi');
await page.getByPlaceholder('Enter EMail').fill('Arjun@gmail.com');
await page.locator('#phone').fill('9999999999');
await page.locator('#textarea').fill('Ruby #42');
await page.locator('#male').check();
// Select day of the week
page.locator('#tuesday').check();
page.locator('#country').selectOption({label:'Australia'});
page.locator('#colors').selectOption({value:'green'});
page.locator('#animals').selectOption({label:'Deer'});

await page.waitForTimeout(5000);

expect(page.locator('#tuesday')).toBeChecked();
expect(page.locator('#tuesday')).isChecked().toBeTruthy();
expect(page.locator('#country')).toHaveValue('Australia');
expect(page.locator('#colors')).toHaveValue('green');
expect(page.locator('#animals')).toHaveValue('Deer');
});