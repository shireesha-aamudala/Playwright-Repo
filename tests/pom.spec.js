const{test, expect}=require('@playwright/test')
import { LoginPage } from '../Pages/Login';
import { HomePage } from '../Pages/Home'; 
import { CartPage } from '../Pages/Cart';

test('POM', async({page})=>
{
//Login Page
const loginPOM=new LoginPage(page);
await loginPOM.launchURL();
await loginPOM.login('pavanol','test@123');


//Home Page
const home=new HomePage(page);
await home.addToCart('Nexus 6');
await home.goToCart();


//Cartpage

const cart=new CartPage(page);
const status=await cart.product('Nexus 6');
expect(await status).toBe(true);
await page.waitForTimeout(3000);

});
