import test, { page, expect } from '@playwright/test';
// const{chromium} = require("@playwright/test")

test ('Assertions Demo', async({page})=>{

await page.goto('https://kitchen.applitools.com/')
await page.pause()

//ASSERTIONS
//check element present or not
await expect (page.locator('text=The Kitchen')).toHaveCount(1)

if(await page.$('text=The Kitchen')){
    await page.locator('text=The Kitchen').click()
}
//check element hidden or visible
await expect (page.locator('text=The Kitchen')).toBeVisible()
//soft means if it has an error it continues
await expect.soft (page.locator('text=The Kitchen')).toBeHidden()

//check element enable or disable
await expect (page.locator('text=The Kitchen')).toBeEnabled()
await expect.soft (page.locator('text=The Kitchen')).toBeDisabled()

//check text
await expect(page.locator('text=The Kitchen')).toHaveText('The Kitchen')
await expect.soft(page.locator('text=The Kitchen')).not.toHaveText('The Kitchen')

//select attribute value
await expect(page.locator('text=The Kitchen')).toHaveAttribute('class','chakra-heading css-dpmy2a')
//or
await expect(page.locator('text=The Kitchen')).toHaveAttribute('class',/.*css-dpmy2a/)
//or
await expect(page.locator('text=The Kitchen')).toHaveClass(/.*css-dpmy2a/)



})