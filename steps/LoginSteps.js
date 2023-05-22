const { When, Then } = require('@cucumber/cucumber')
const { LoginPage } = require('../page/LoginPage')

let loginPage = new LoginPage()

When('I Visit the OrangeHRM login page', async () => {
    await loginPage.navigate()
})

When('I enter username', async () => {
    await loginPage.enterUsername()
})

When('I enter Password', async () => {
    await loginPage.enterPassword()
})

When('I click on Login button', async () => {
    await loginPage.clickOnLoginButton()
})

Then('I verify dashboard URL', async () => {
    await loginPage.verifyDashboardURL()
})