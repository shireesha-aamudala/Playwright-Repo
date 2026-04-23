const {test,expect}=require('@playwright/test');
test('Multiple Web Elements',async ({page})=>{
//to find all the links in home page
 await page.goto('https://www.demoblaze.com/index.html');

  const links=await page.$$('a');
  console.log('Below are the links',links);

  for(let k of links){

    let linktext=await k.textContent();
    console.log(linktext);
  }
//To find all the product names in the page --xpath //div[@id='tbodyid']//div//h4/a
await page.goto('https://www.demoblaze.com/index.html');
await page.waitForSelector("//div[@id='tbodyid']//div//h4/a");
const products=await page.$$("//div[@id='tbodyid']//div//h4/a");

for(const p of products)
    {
    const productname=await p.textContent();
    console.log(productname);
    }

});

