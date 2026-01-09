import { test, expect, Browser, Page, Locator, chromium } from '@playwright/test';

test('Working with browsers', async () => {
    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    const page: Page = await browser.newPage();
    await page.goto('http://zero.webappsecurity.com/');
    await browser.close();
    console.log('Chromium Closed successfully');

    const browserFirefox: Browser = await chromium.launch({ headless: false });
    const pageFirefox: Page = await browserFirefox.newPage();
    await pageFirefox.goto('http://zero.webappsecurity.com/');
    await browserFirefox.close();
    console.log('Firefox Closed successfully');

    const browserWebkit: Browser = await chromium.launch({ headless: false });
    const pageWebkit: Page = await browserWebkit.newPage();
    await pageWebkit.goto('http://zero.webappsecurity.com/');
    await browserWebkit.close();
    console.log('Webkit Closed successfully');
});