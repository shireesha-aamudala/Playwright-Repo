const {test,expect} =require ('@playwright/test')
import {test,expect} from '@playwright/test'
import { listen } from 'node:quic'

await page.frameLocator('name').locator('#input1').fill('sfasfas')

const frame=page.frame({name:'frame1'})
const frame1=page.frame({url:'xxx'})
frame.click()
frame1.locator('asaf').fill('')

//nested iframes
await page.frameLocator('#outerFrame').frameLocator('innerFrame').locator().fill()

//toget All the frames
const frames=await page.frames();
frames.forEach(f=> console.log(f.url()));

//CSS
#uesrname //id
input[type="text"]
div>button

//Xpath
//input[@id='username']
//input[@type='text']
//input[text()="Login"]

await page.getByRole('button',{name:'login'})
await page.getBytext('');
await page.getByAltText('');
await page.getByPlaceHolder('');
await page.lcoator(input[type='text']).filter({hasText:'login'}).fill('hello')
await page.locator('.input').first().click()
await page.lcoator('.input').nth(4).click();

const items=page.locator('.items')
const count=await items.count();


for(let i=0;i<=count;i++)
{
  const text=items.nth(i).textContent();

  if(text==='Moto G')
  {
    
 await items.nth(i).click()
 break;

  }


}


const user={
    name:'Siri',
    greet:function()
    {
    console.log("Hello",this.name)
    }
}

user.greet();


//POM

class Login
{
constructor(page)
{
this.page=page;

this.userName=page.locator();
this.userPwd=page.locator();
this.loginButton=page.locator();

}

async launchURL()
{
    await this.page.goto('');
}


async loginUsr(username,password)
{
  

await this.userName.fill(username)
await this.userPwd.fill(password)
await this.loginButton.click();
};


}

module.exports={LoginPage}

import {LoginPage } from '..pages/login.js'


const loggedinUser=new Login(page);
await loggedinUser.launchURL();
await loggedinUser.loginUsr