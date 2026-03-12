import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

import { SignInToGitHub } from '../business/signInToGitHub';
import { NewRepositoryPage } from '../pages/NewRepository';

test('Sign In To GitHub', async ({ page }) => {

  await page.goto('https://playwright.dev/');
  await page.setViewportSize({ width: 1920, height: 1080 })


   //Learn: Promise.all() runs multiple async actions at the same time and waits until all of them finish.
  //Learn:waitForEven(page) returns a new object githubPage.
  // Opens to a new tab when we click on GitHub link, need to handle that
   
   const [githubPage] =   await Promise.all([
    page.context().waitForEvent('page'),
    page.getByRole('link', { name: 'GitHub repository' }).click()
    ]);    
    await githubPage.waitForLoadState(); 

   //Create object using new page.

   const gitHubPagesignInTo = new SignInToGitHub(githubPage);
   await gitHubPagesignInTo.enterCredentialToSigIn("software4manju", "Jesusismyysaviour");
  
   const newRepositoryPage = new NewRepositoryPage(githubPage); 

   await newRepositoryPage.createNewRepository();
   console.log("Successfully created a new repository in GitHub");

});
