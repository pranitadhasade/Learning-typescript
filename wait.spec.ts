import { test } from "@playwright/test";

// Increase overall test timeout to 60s (default is 30s)
test.setTimeout(60000);
test.use({ actionTimeout: 35000 });

test("wait examples", async ({ page }) => {
    // Make navigation more robust: wait for DOMContentLoaded and increase navigation timeout
    await page.goto("https://www.cnn.com", { waitUntil: 'domcontentloaded', timeout: 60000 });

    //implicit Wait
    //playwright by default have 30 sec of implicit wait for every step 
    //await page.getByRole('button', { name: ' Signin' }).click({ timeout: 10000 });

    //Explicit Wait - waitForTimeout
    await page.waitForTimeout(5000);
});

//Soft Assert used for multiple validation in single test
test("Soft Assert example", async ({ page }) => {
    await page.goto("http://zero.webappsecurity.com/");
});