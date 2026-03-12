import { Page } from "@playwright/test";
import { SignInToGitHubPage } from "../pages/SignInToGitHubPage";
import { BasePage } from "../pages/BasePage";

export class SignInToGitHub extends BasePage {
    private signInToGitHubPage: SignInToGitHubPage;
    constructor(page: Page) {
        super(page); 
        this.signInToGitHubPage = new SignInToGitHubPage(page);      
    }   

    async enterCredentialToSigIn(username: string, password: string) {
        await this.signInToGitHubPage.clickSignInSection();        
        await this.signInToGitHubPage.enterUsername(username);
        await this.signInToGitHubPage.enterPassword(password);
        await this.signInToGitHubPage.clickSignInButton();       
        console.log("Successfully signed in to GitHub");
    }
}