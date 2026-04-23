const{test,expect}=require('@playwright/test')
test('Screenshot', async({page})=>{

 await page.goto('https://www.demoblaze.com/');   
 await page.screenshot({path:'tests/Screenshots/'+Date.now()+'fitstscreenshot.png',fullPage:true});
})