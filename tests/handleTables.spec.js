const{expect, test}=require('@playwright/test')
test('Handle Tables',async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/');   
const table = page.locator('table[name="BookTable"]');
const columns=table.locator('th');
//Print number of columns
console.log("Columns: ", await columns.count());
//assertion for number of columns
expect(await columns.count()).toBe(4);

const rows=table.locator('tr');
console.log("Rows: ", await rows.count());

expect(await rows.count()).toBe(7);

//to get all the product details
//Iterate through all the pages
const pages=page.locator('.pagination li a');
for(let p=0;p<await pages.count();p++)
{
 if(p>0)
 {
    await pages.nth(p).click();
 }
for(let i=0;i<await rows.count();i++)
{
 const row=rows.nth(i);
 const tableData=row.locator('td');

 for(let j=0;j<await tableData.count()-1;j++)
 {
  
  console.log(await tableData.nth(j).textContent());

 }


 }
}
await page.waitForTimeout(5000);

});