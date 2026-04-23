const {test, expect}=require('@playwright/test')

test('Handle Multiple Checboxes',async({page})=>{

  await page.goto('https://testautomationpractice.blogspot.com/');
  const days=[
  "//input[@type='checkbox' and @id='sunday']",
  "//input[@type='checkbox' and @id='monday']",
  "//input[@type='checkbox' and @id='tuesday']",
  ];

  for(const day of days)
  {
    await page.locator(day).check();
  }
       
        for(const day of days)
            {
                if(await page.locator(day).isChecked())
                {
                await page.locator(day).uncheck(); 
                }
            }
    
});