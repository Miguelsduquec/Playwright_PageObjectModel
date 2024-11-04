import { test, expect } from '@playwright/test';
// const{chromium} = require("@playwright/test");

test('Selectors Demo', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.pause(); //pause and open playright inspector (can add commands and go step-by-step)

  //Using the explore in playright inspector will give you the best possible locator
  //using any object property

  await page.click('id=user-name');
  //option 2   await page.locator('id=user-name').click
  await page.locator('id=user-name').fill('Edison');

  //using CSS selector (open browser page->inspect->right click on object property->Copy Selector)
  await page.locator('#login-button').click()
  //using XPath  await page.locator('xpath=//*[@id="password"]').fill('Password')
  await page.locator('//*[@id="password"]').fill('Password')

  //using Text
  await page.locator('text=LOGIN').click();
  await page.locator('input:has-text("LOGIN")').click();





});