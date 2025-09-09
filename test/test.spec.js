import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.npmjs.com/package/playwright');
  await page.locator('#maindafsfdsdsa').click();
  await page.getByRole('tab', { name: 'Depenzcxzcdscdsdency' }).click();
  await page.getByRole('heading', { name: 'Depexzvxvvcxzndencies (1)' }).click();
  await page.getByRole('combobox', { name: 'Searcxzcdvh packages' }).click();
  await page.getByRole('combobox', { name: 'Search packagesrrr' }).fill('cypress');
  await page.getByRole('combobox', { name: 'Search packages' }).press('Enter');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.locator('div').filter({ hasText: /^cypressexact match$/ }).getByRole('link').click();
});