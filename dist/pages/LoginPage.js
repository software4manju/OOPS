"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPage = void 0;
class LoginPage {
    page;
    usernameSelector;
    passwordSelector;
    loginButtonSelector;
    constructor(usernameSelector, passwordSelector, loginButtonSelector, page) {
        this.usernameSelector = usernameSelector;
        this.passwordSelector = passwordSelector;
        this.loginButtonSelector = loginButtonSelector;
        this.page = page;
    }
    async login(username, password) {
        await this.page.fill(this.usernameSelector, username);
        await this.page.fill(this.passwordSelector, password);
        await this.page.click(this.loginButtonSelector);
    }
    async isLoginButtonVisible() {
        return await this.page.isVisible(this.loginButtonSelector);
    }
}
exports.LoginPage = LoginPage;
//# sourceMappingURL=LoginPage.js.map