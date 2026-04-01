import {test, expect} from '@playwright/test';

test('Assertion Demo', async ({ page }) => {
  await page.goto('https://kitchen.applitools.com');
  //await page.pause();
  // Check element is present
  await expect(page.locator('text=The Kitchen')).toHaveCount(1);
   if(await page.$('text=The Kitchen')){
    console.log("Element is visible");
    await page.locator('text=The Kitchen').click();

  await expect(page.locator('text=The Kitchen')).toBeVisible();
  await expect(page.locator('text=The Kitchen')).toHaveText('The Kitchen');
  await expect(page.locator('text=The Kitchen')).toHaveCSS('color', 'rgb(0, 162, 152)');
   }
  });