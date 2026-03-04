import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {

    private githubLink: Locator;

    constructor(page: Page) {
        super(page);
        this.githubLink = page.getByRole('link', { name: 'GitHub repository' });
    }

    async navigate() {
        await this.page.goto('https://playwright.dev/');
    }

    async clickGithub(): Promise<Page> {

        const popupPromise = this.page.waitForEvent('popup');

        await this.githubLink.click();

        return await popupPromise;
    }

    // Getter example
    async getGithubLinkText(): Promise<string> {
        return await this.getText(this.githubLink);
    }
}