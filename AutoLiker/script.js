require('chromedriver');
const wd = require('selenium-webdriver');

const browser = new wd.Builder().forBrowser('chrome').build();
// style-scope ytd-grid-renderer
// style-scope ytd-c4-tabbed-header-renderer iron-selected



async function main() {
    await browser.get('https://www.youtube.com/c/FlyingBeast320');

    await browser.wait(wd.until.elementLocated(wd.By.css('.scrollable.style-scope paper-tab')));
    let navBar = await browser.findElements(wd.By.css('.scrollable.style-scope paper-tab'));


    navBar[1].click();

    await browser.wait(wd.until.elementLocated(wd.By.css('.style-scope.ytd-grid-renderer div#dismissible')));
    let videos = await browser.findElements(wd.By.css('.style-scope.ytd-grid-renderer div#dismissible'));
    console.log(videos.length);
    for (let i = 0; i < videos.length; i++) {
        videos[i].click();
        await browser.navigate().back();
        //yt-simple-endpoint style-scope ytd-toggle-button-renderer
        //await browser.wait(wd.until.elementLocated(wd.By.css('.yt-simple-endpoint.style-scope.ytd-toggle-button-renderer')));
        //let likeDislike = await browser.findElements(wd.By.css('.yt-simple-endpoint.style-scope.ytd-toggle-button-renderer'));
        //likeDislike[0].click();
    }

}
main();
