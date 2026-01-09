import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://zero.webappsecurity.com/');
  await page.getByRole('button', { name: ' Signin' }).click();
  await page.getByRole('textbox', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Login' }).fill('username');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('password');
  await page.locator('div').filter({ hasText: 'Log in to ZeroBank Login' }).nth(3).click();
  await page.locator('div:nth-child(3)').first().click();
  await page.getByRole('checkbox', { name: 'Keep me signed in' }).check();
  await page.getByRole('checkbox', { name: 'Keep me signed in' }).uncheck();
  await page.getByRole('checkbox', { name: 'Keep me signed in' }).check();
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByText('My Money Map').click();
  await page.getByRole('link', { name: 'Pay Bills' }).click();
  await page.getByRole('link', { name: 'Add New Payee' }).click();
  await page.getByRole('link', { name: 'Purchase Foreign Currency' }).click();
  await page.getByText('U.S. dollar (USD) Selected').click();
  await page.getByLabel('Currency', { exact: true }).selectOption('AUD');
  await page.getByRole('textbox', { name: 'Amount Conversion Amount' }).click();
  await page.getByRole('textbox', { name: 'Amount Conversion Amount' }).fill('100');
  await page.getByRole('button', { name: 'Purchase' }).click();
});