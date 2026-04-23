const{expect,test}=require('@playwright/test');
test('Select Products', async ({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/');
const productTable=page.locator('#productTable');

const rows=productTable.locator('tr');
console.log("Rows of Product Table: ",await rows.count());

const columns=productTable.locator('tr th');
console.log("Coloumns of Product Table: ",await columns.count());
//call the function to select multiple products
await rowsMatched(rows, page,'Smartwatch');
await rowsMatched(rows, page,'Tablet');
await rowsMatched(rows, page,'Laptop');
await page.waitForTimeout(3000);

})
//function 
async function rowsMatched(rows,page,product)
{
const rowsMatched=rows.filter(
    {
        has: page.locator('td'),
        hasText: product

    })
   await rowsMatched.locator('input').check();
}