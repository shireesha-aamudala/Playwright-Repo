const {expect, test}=require('@playwright/test')

test("Handle single and multiple dropdowns",async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/');
//page.locator('#country').selectOption({label:'India'}); 
page.locator('#country').selectOption('India');
await page.locator('#country').selectOption({index :3});
await page.locator('#country').selectOption({value: 'uk'});
const countryOptions=page.locator('#country option');
const count=await countryOptions.count();
console.log("Number of Countries are : ",count);

for(let i=0; i<count; i++){
const countryName=await countryOptions.nth(i).textContent();
console.log("country Name is:" ,countryName.trim());

}

});

//Approach#2

const {expect, test}= require('@playwright/test')
test("Handle Dropdowns", async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    let  countryOptions=page.locator('#country option');
    let  countryNames=await page.locator('#country option').allTextContents();
    const count=await countryOptions.count();
    console.log("Number of countries are : ", count);

    for(let c of  countryNames)
    {
        console.log("Conutry Name is",c.trim());
        if(c.includes('India'))
        {
            await page.locator('#country').selectOption({value:'india'});
            console.log("Made country selection")
            break;
           
        }
    }
    await expect(page.locator('#country')).toHaveValue('india');
});