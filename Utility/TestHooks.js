const { Before, AfterAll } = require('@cucumber/cucumber')
const page = require('@playwright/test')
const path = require('path');
const { chromium } = require('playwright')

require('dotenv').config({
  path: path.join(__dirname, '../.env'),
});

Before(async (scenario) => {
  if (process.env.BrowserStack === 'true') {
    try {
      const capabilitiesBr = require('./BrowserStack').caps(scenario)
      global.browser = await chromium.connect({
        wsEndpoint: `wss://cdp.browserstack.com/playwright?caps=${encodeURIComponent(JSON.stringify(capabilitiesBr))}`,
      })
      viewport = {
        width: 1920,
        height: 900,
      }
    } catch (e) {
      console.error('Error connecting to BrowserStack', e)
    }
  } else {
    global.browser = await page.chromium.launch({ headless: false })
  }
  const context = await browser.newContext()
  global.page = await context.newPage()
})

AfterAll(async () => {
  await global.browser.close()
})