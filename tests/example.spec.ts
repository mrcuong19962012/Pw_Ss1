import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  // Di chuyển Page "https://material.playwrightvn.com/"
  await page.goto('https://material.playwrightvn.com/');

  // Check có Title contanin "Tài liệu học automation test"
  await expect(page).toHaveTitle(/Tài liệu học automation test/);
});

test('get started link', async ({ page }) => {
  // Di chuyển đến Page "https://material.playwrightvn.com/"
  await page.goto('https://material.playwrightvn.com/');

  // Click vào element link có name "Bài học 1: Register Page"
  await page.getByRole('link', { name: 'Bài học 1: Register Page' }).click();

  // Check có hiển thị element heading có name "User Registration'"
  await expect(page.getByRole('heading', { name: 'User Registration' })).toBeVisible();
});
