
class HomePage
{
    constructor(page)
    { 
        this.page=page;

        this.productsList=page.locator('.col-lg-4 a');
        this.addToCartBtn=page.locator('a.btn');
        this.cartTab=page.locator('#cartur');  
        this.cartItem=page.locator('td');
    
       
    }

    async addToCart(productName)
    {
        for(const product of productsList)
        {
            if (productName===await productsList.textContent())
            {

                await product.click();
                break;

            }

        }
     
        await this.page.on('dialog', async(dialog)=>
            {

                if (await dialog.message().toContainText('added'))
                {
                await dialog.accept();
                }
            })
            
            await  this.addToCartBtn.click();
    }

    async goToCart()
    {
        this.cartTab.click()
    }


}

module.exports={HomePage}

