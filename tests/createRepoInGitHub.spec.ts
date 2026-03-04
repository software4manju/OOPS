import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SignInToGitHubPage } from '../pages/SignInToGitHubPage';

test('Sign In To GitHub', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const signInToGitHubPage = new SignInToGitHubPage(page);

  await signInToGitHubPage.clickGitHubLink();
  await signInToGitHubPage.enterUsername("software4manju");
  await signInToGitHubPage.enterPassword("Manju#123");
  
  await signInToGitHubPage.clickSignInButton();
});

