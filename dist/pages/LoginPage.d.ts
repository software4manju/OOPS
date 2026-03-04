import { Page } from '@playwright/test';
export declare class LoginPage {
    readonly page: Page;
    readonly usernameSelector: string;
    readonly passwordSelector: string;
    readonly loginButtonSelector: string;
    constructor(usernameSelector: string, passwordSelector: string, loginButtonSelector: string, page: Page);
    login(username: string, password: string): Promise<void>;
    isLoginButtonVisible(): Promise<boolean>;
}
//# sourceMappingURL=LoginPage.d.ts.map