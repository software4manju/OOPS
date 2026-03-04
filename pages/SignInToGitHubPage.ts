import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class SignInToGitHubPage extends BasePage {

    readonly usernameId = "login_field";
    readonly passwordID = "password";
    readonly signInButtonID = "commit";
    
    constructor(page: Page) {
        super(page);        
   
}
    async enterwrongUsername(values: string) {     
        await this.page.locator(this.usernameId).fill(values);
    }
     async enterUsername(values: string) {     
        await this.page.locator(`#${this.usernameId}`).fill(values);
    }
    async enterPassword(values: string) {     
        await this.page.locator(this.passwordID).fill(values);
    }   

    async clickSignInButton() {
        await this.page.locator(this.signInButtonID).click();
    }

    async clickGitHubLink() {
       await this.page.getByRole("link", { name: "GitHub repository" }).click();
       await this.page.setViewportSize({ width: 1280, height: 800 });
       const signinLink = await this.page.getByRole("link", { name: "Sign in" });
       await signinLink.click();
    }

}
    

