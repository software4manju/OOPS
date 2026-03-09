import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SignInToGitHubPage } from '../pages/SignInToGitHubPage';

test('Sign In To GitHub', async ({ page }) => {

  await page.goto('https://playwright.dev/');
  const homePage = new HomePage(page);

   //Learn: Promise.all() runs multiple async actions at the same time and waits until all of them finish.
  //Learn:waitForEven(page) returns a new object githubPage.

  const signInToGitHubPage = new SignInToGitHubPage(page);

  // Opens to a new tab when we click on GitHub link, need to handle that
   const [githubPage] =   await Promise.all([
    page.context().waitForEvent('page'),
     signInToGitHubPage.clickGitHubLink()]);
     
   await githubPage.waitForLoadState();  

   const gitHubPagesignInTo = new SignInToGitHubPage(githubPage);


  await githubPage.getByRole('link', { name: 'Sign in' }).click();
  await gitHubPagesignInTo.enterUsername("software4manju");
  await gitHubPagesignInTo.enterPassword("Manju#123");

  await gitHubPagesignInTo.clickSignInButton();
  console.log("Successfully signed in to GitHub");
});
