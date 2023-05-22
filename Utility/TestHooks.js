const { Before, AfterAll } = require('@cucumber/cucumber')
const page = require('@playwright/test')

Before(async () => {
  let browser = await page.chromium.launch({ headless: false })
  global.browser = browser
  const context = await browser.newContext()
  global.page = await context.newPage()
})

AfterAll(async () => {
  await global.browser.close()
})