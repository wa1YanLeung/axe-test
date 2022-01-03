const {
    Builder,
    By
} = require("selenium-webdriver");


async function mainNav() {

    // launch the browser
    const driver = await new Builder().forBrowser("firefox").build();
    // navigate to the webpage
    await driver.get("https://dequeuniversity.com/demo/mars")
    // check mainNav loaded?
    try {
        const mainNavLoad = await driver.findElement(By.css("#main-nav")).isDisplayed();
        console.log(mainNavLoad) //will display true
    } catch (error) {
        console.error(error)
    }
    // close the browser
    await driver.quit();
}
mainNav()