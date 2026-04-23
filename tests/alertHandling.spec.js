const{expect, test}=require('@playwright/test')
test('Handle Alerts', async({page})=>{
//Launch the site
await page.goto('https://testautomationpractice.blogspot.com/');
//Handling alert dialog
page.on('dialog',async dialog=>{
    expect(dialog.type()).toContain('alert');
    expect(dialog.message()).toContain('I am an alert box!');
    dialog.accept();

});

await page.getByRole('button',{name:'Simple Alert'}).click();
await page.waitForTimeout(3000)
});


//Handle confirmation dialog box
test('Handle  confirm Alerts', async({page})=>{
//Launch the site
await page.goto('https://testautomationpractice.blogspot.com/');

page.on('dialog', async dialog=>{
expect(dialog.type()).toContain('confirm');
expect(dialog.message()).toContain('Press a button!');
dialog.accept();
});
await page.getByRole('button',{name:'Confirmation Alert'}).click();
await page.waitForTimeout(3000);
});

//Handle Prompt dialog

test('Handle Prompt Alerts', async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/');
page.on('dialog', async dialog=>{

    expect.soft((dialog.type())).toContain('prompt');
    expect(dialog.message()).toContain('Please enter your name:');
    await dialog.accept('Shireesha');
});

await page.locator('#promptBtn').click();
await page.waitForTimeout(3000);
});