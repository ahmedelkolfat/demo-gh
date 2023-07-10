// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(page).toHaveTitle(/Playwright/);
});

test('equal', async ({ page }) => {
  

  await expect(page).toHaveTitle(/Playwright/);
});
