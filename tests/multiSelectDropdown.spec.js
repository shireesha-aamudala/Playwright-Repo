const {expect, test}= require('@playwright/test');

test('Multi Select Dropdown',async({page})=>{


    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.selectOption('#colors',['Yellow','Blue','Red']);

    //  const colors=await page.$$('#colors option');
    //  const colorCount=colors.length;
    const colors= await page.locator('#colors option');
    const colorCount=await colors.count();
    
    console.log("Number of color options are: ",colorCount);
     expect(colorCount).toBe(7);
    
    let colorName =await page.locator('#colors option').allTextContents();
     for(let name of colorName)
     {
        console.log("Color name is:",name);
     }
    await page.waitForTimeout(5000);
});