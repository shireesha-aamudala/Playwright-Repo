class CartPage
{
  constructor(page)
  {

    this.page=page;
    this.cartItem=page.locator('tr.success').locator('td');


  }


async product(productName)
{

    const products= await this.cartItem;
    for(const p of products)
    {
        console.log(await p.textContent())
        if(productName=await p.textContent())
            return true;
            break;
    }


}

}

module.exports={CartPage}