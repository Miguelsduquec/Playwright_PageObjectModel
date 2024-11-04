const { test, expect } = require('@playwright/test');


test.skip('Test One', async(page)=>{


})


// 05:20 will mark test as failure will show error if the test does not fail
test('not yet ready', async ({ page }) => {
   test.fail();
 });

// 06:39 test will be aborted
test.fixme('test to be fixed', async ({ page }) => {
 });

// 07:36 marks the test as slow and triples the test timeout
test('slow test', async ({ page })=> {
   test.slow();
 });

// 08:21 runs specific tests
test.only('focus this test', async ({ page }) => {
   // Run only focused tests in the entire project
 });

 //TAGS/////////////////////////////////////////////////////////////////////

//  @smoke
// @sanity
// @fast  @slow 
// and only run the tests that have the certain tag

test('Test full report @smoke', async ({ page }) => {
   // ...
 });

// npx playwright test --grep “@smoke”

// Opposite of grep  Skip tests with certain tag
// npx playwright test --grep-invert “@smoke”