import {test, expect, chromium} from '@playwright/test'
import { serialize } from 'v8';

test('Slow motion and video recording', async()=>{
//without declaring page in the beginning we should add browser context

//launch browser, and set slowmotion to 500
    const browser=await chromium.launch({
        slowMo:500,
        headless:false
    })
//create a context for browser
    const context=await browser.newContext({
        recordVideo:{
            dir: 'video/',
            size: {width:800,height:600}
        }
   });
    const page=await context.newPage();

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.pause();
    await page.locator('[placeholder="Username"]').fill('Admin');
    await page.locator('[placeholder="Password"]').fill('admin123');
    await page.locator('button:has-text("Login")').click();
    
    await context.close();


})

//run command: $ npx playwright test SlowMotion_VideoRecording_Demo.spec --project chromium