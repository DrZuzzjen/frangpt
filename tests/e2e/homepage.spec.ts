import { test, expect } from '@playwright/test'

test('homepage has title', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/franGPT/)
})

test('homepage displays welcome message', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('h1')).toContainText('Welcome to franGPT')
})