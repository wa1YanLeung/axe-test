const AxeBuilder = require('@axe-core/webdriverjs');
const {
    Builder
} = require("selenium-webdriver");
const assert = require("assert");

async function scanTest() {

    const driver = await new Builder().forBrowser("firefox").build();
    driver.get('https://dequeuniversity.com/demo/mars/').then(() => {
        new AxeBuilder(driver).analyze(async (err, results) => {
            try {
                console.log(results);
                assert.strictEqual(results.violations.length, 0);
            } catch (err) {
                console.log(err);
            }
        });
    });

}
scanTest()