const {test, expect} =require('@playwright/test');

test('API Mocking', async({page})=>{

await page.route('**/abc/users', async (route)=>{

await route.fulfill({
status: 500,
body : 'Server Error'

})


})






})