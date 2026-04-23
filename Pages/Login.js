class LoginPage
{
  constructor(page)
  {
    this.page=page;
    //loctors
    this.loginLink=page.locator('#login2');
    this.userNameInput=page.locator('#loginusername');
    this.passwordInput=page.locator('#loginpassword');
    this.loginButton=page.getByRole('button',{name:'Log in'});

  }

    async launchURL()
        {
        await  this.page.goto('https://www.demoblaze.com/index.html');
        }
    async login(username, password)
        {
        await this.loginLink.click();
        await this.userNameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
        }
}

module.exports={LoginPage}