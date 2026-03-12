import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class NewRepositoryPage extends BasePage {
    constructor(page: Page) {
        super(page);
    } 
  async createNewRepository() {  
  await this.page.locator('button[aria-haspopup="dialog"]').click();
  await this.page.locator('[data-testid="side-nav-menu-item-CONTRIBUTED_REPOS"]').click();
  const newRepoButton = this.page.locator('a', { hasText: 'New repository' });
  await newRepoButton.click();
}
}