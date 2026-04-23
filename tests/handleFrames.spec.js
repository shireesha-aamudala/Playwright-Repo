const {expect,test}= require('@playwright/test')

test('Frames', async({page})=>{
await page.goto('https://ui.vision/demo/webtest/frames/');
const frames= page.frames();
console.log("Number of frames are:",frames.length);
const frame1= page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
const value=frame1.locator("[name='mytext1']")
await value.fill('Rishi');
await expect(value).toHaveValue('Rishi');

const frame3=page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});
const childFrame=frame3.childFrames()[0];
//const radioButton=childFrame.locator('input[type="radio"]').first();
await childFrame.getByText('Hi, I am the UI.Vision IDE').click();
});

