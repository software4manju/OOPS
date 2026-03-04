"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const LoginPage_1 = require("../pages/LoginPage");
(0, test_1.test)('Login Page', async ({ page }) => {
    const loginPage = new LoginPage_1.LoginPage("#username", "#password", "#login-button", page);
    await loginPage.login('testuser', 'testpassword');
});
(0, test_1.test)('get started link', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    // Click the get started link.
    await page.getByRole('link', { name: 'Get started' }).click();
    // Expects page to have a heading with the name of Installation.
    await (0, test_1.expect)(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
//# sourceMappingURL=example.spec.js.map