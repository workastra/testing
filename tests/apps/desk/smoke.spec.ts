import { test, expect } from '@playwright/test';

test('We can access Desk application', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveURL(/^https?:\/\/desk\./);
});
