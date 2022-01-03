# Web accessibility test

## Using axe-webdriverjs and Selenium to perform test on https://dequeuniversity.com/demo/mars

## Usage

```
# Install dependencies
npm init -y 
npm i selenium-webdriver --save
npm i @axe-core/webdriverjs

# Run first test - main-nav (CSS selector) loaded?
node index

# Run second test - accessibility scan of the page
node axe

```
