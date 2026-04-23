const {test,expect}=require('@playwright/test');
test('Built-in Locators', async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    const logo=page.getByAltText('company-branding');
    //await page.waitForSelector('img[alt="company-branding"]');

    await expect(logo).toBeVisible();
    expect(page.getByText('OrangeHRM, Inc')).toBeVisible
    
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button',{type:'submit'}).click();
    const userName=page.locator('.oxd-userdropdown-name');
    await expect(userName).toBeVisible();



}); 