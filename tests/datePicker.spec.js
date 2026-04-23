const{expect, test}=require('@playwright/test')
test('Date Picker',async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/'); 

//await page.locator('#datepicker').fill('01/26/2026');
await page.locator('#datepicker').click();
const year="2023";
const month="June";
const day="12";

while(true)
{
const currentMonth= await page.locator('.ui-datepicker-month').textContent();
const currentYear=await page.locator('.ui-datepicker-year').textContent();
if(currentMonth==month && currentYear==year)
{
 break;
}
await page.locator('[title="Prev"]').click();
}

const days=await page.$$("//a[@class='ui-state-default']");
const numberOfDays=days.length;
console.log("Number of days:", numberOfDays);

/* //pick a date using loop

for(let d of days)

    {
        if(await d.textContent()==day)
            {
                await d.click()
                break;
            }
    }
*/
await page.click(`//a[@class='ui-state-default'][text()=${day}]`)

    await page.waitForTimeout(3000);

})

