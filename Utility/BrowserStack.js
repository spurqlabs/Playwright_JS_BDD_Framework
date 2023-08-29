const cp = require('child_process')
const playwrightClientVersion = cp
    .execSync('npx playwright --version')
    .toString()
    .trim()
    .split(' ')[1]

function caps() {
    return {
        'browser': 'playwright-chromium',
        'os': 'Windows',
        'os_version': '10',
        'browserstack.username': process.env.BROWSERSTACK_USERNAME,
        'browserstack.accessKey': process.env.BROWSERSTACK_ACCESS_KEY,
        'client.playwrightVersion': playwrightClientVersion
    }
}
module.exports = { caps }