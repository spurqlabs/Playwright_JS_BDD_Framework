const { expect } = require('@playwright/test');
let { setDefaultTimeout } = require('@cucumber/cucumber')
const path = require('path');
setDefaultTimeout(60 * 15000)

require('dotenv').config({
    path: path.join(__dirname, '../.env'),
});

class LoginPage {

    async navigate() {
        await global.page.goto(process.env.WEB_URL,)
    }

    async enterUsername() {
        await global.page.locator('//input[@placeholder="Username"]').waitFor({ status: 'visible', setTimeout: 20000 })
        await global.page.locator('//input[@placeholder="Username"]').fill(process.env.WEB_USERNAME)
    }

    async enterPassword() {
        await global.page.locator('//input[@placeholder="Password"]').fill(process.env.WEB_PASSWORD)
    }

    async clickOnLoginButton() {
        await global.page.locator('//button[@type="submit"]').click()
    }

    async verifyDashboardURL() {
        expect(await global.page.url()).toEqual('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    }
}

module.exports = { LoginPage }