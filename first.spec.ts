import { test, expect, Locator } from "@playwright/test";

test("first test", async ({ page }) => {
    console.log("This is my first test");
    await page.goto("http://zero.webappsecurity.com");
    await expect(page).toHaveTitle("Zero - Personal Banking - Loans - Credit Cards");

    //ID Locator
    const searchBox: Locator = await page.locator('id=searchTerm');
    await searchBox.fill("Pay Bills");

    //By Name Locator
    const searchBoxByName: Locator = await page.locator('[name="searchTerm"]');
    await searchBoxByName.fill("Credit Cards");

    //By Class Locator
    const searchBoxByClass: Locator = await page.locator('.search-query');
    await searchBoxByClass.fill("Savings Accounts");

    //Login
    await page.click('#signin_button');
    await page.fill('id=user_login', 'username');
    await page.fill('id=user_password', 'password');
    const checkbox: Locator = await page.locator('id=user_remember_me');
    if (!(await checkbox.isChecked())) {
        await checkbox.check();
    }else {
        //continue;
        console.log('Checkbox is already checked');
    }

    await page.click('text=Sign in');
    await page.waitForTimeout(3000);

    await page.goBack();
    await page.waitForTimeout(3000);

    await page.locator('#transfer_funds_link').isVisible();

    //xpath Locator
    const searchBoxByXpath: Locator = await page.locator('//*[@id="searchTerm"]');
    await searchBoxByXpath.fill("Account Summary");

    //getByLabel Locator
    //const searchBoxByLabel: Locator = await page.getByLabel('Search');
    //await searchBoxByLabel.fill("Brokerage");

    await page.goto("http://zero.webappsecurity.com/bank/pay-bills.html");
    await page.locator('text=Purchase Foreign Currency').click();
    //await page.getByRole('radio', { name: 'U.S. dollar (USD)' }).check();
    
    if (await page.getByRole('radio', { name: 'U.S. dollar (USD)' }).isChecked()) {
        console.log('U.S. dollar radio button is checked');
    } else {
        console.log('U.S. dollar radio button is NOT checked');
        await page.getByRole('radio', { name: 'U.S. dollar (USD)' }).check();
        await expect(page.getByRole('radio', { name: 'U.S. dollar (USD)' })).toBeChecked();
    }
});