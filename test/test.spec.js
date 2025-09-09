import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.npmjs.com/package/playwright');
  await page.locator('#main').click();
  await page.getByRole('tab', { name: 'Dependency' }).click();
  await page.getByRole('heading', { name: 'Dependencies (1)' }).click();
  await page.getByRole('combobox', { name: 'Search packages' }).click();
  await page.getByRole('combobox', { name: 'Search packages' }).fill('cypress');
  await page.getByRole('combobox', { name: 'Search packages' }).press('Enter');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.locator('div').filter({ hasText: /^cypressexact match$/ }).getByRole('link').click();
});