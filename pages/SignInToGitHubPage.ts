import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class SignInToGitHubPage extends BasePage {

    readonly usernameId = "login_field";
    readonly passwordID = "password";  
    
    constructor(page: Page) {
        super(page);        
   
}
    async enterwrongUsername(values: string) {
        await this.page.locator(this.usernameId).fill(values);
    }
    async enterUsername(values: string) {
    console.log("Username: " + values);

    await this.page.waitForSelector(`#${this.usernameId}`, { state: 'visible' });

    await this.page.locator(`#${this.usernameId}`).fill(values);
}
    async enterPassword(values: string) {     
        await this.page.locator(`#${this.passwordID}`).fill(values);
    }   

    async clickSignInButton() {
        await this.page.getByRole('button', { name: 'Sign in' }).nth(1).click();  
         }

    async clickGitHubLink() {
       await this.page.getByRole("link", { name: "GitHub repository" }).click();
       await this.page.setViewportSize({ width: 1280, height: 800 });
    }

     async clickSignInSection() {     
        await this.page.getByRole('link', { name: 'Sign in' }).click();
    } 

}
    

