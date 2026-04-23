const{expect, test}= require('@playwright/test')

test('Print String', async({page})=>{
let str='SIRISHA'
for(let s of str)
{
    console.log(s);
}



})




const  browser=await chromium.launch();
const context=await browser.newContext();
const page=await context.newPage();


