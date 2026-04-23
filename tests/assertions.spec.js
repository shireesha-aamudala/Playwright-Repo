const {test, expect}=require('@playwright/test');

test('assertions',({page})=>{

    page.locator().allTextContents()
    waitFor({state:'visible'})
    page.waitForURL()
    page.selectOption()

})