import { Locator, Page } from "@playwright/test";    
export class BasePage {
    readonly page: Page;
    constructor(page: Page) {//constructor is used to pass the browser page.
        this.page = page;
    }

    //Setter and Getter for page

    //Setter-> Set Value in the textbox

    async setInput(locator: Locator, value: string): Promise<void>
    {
        await locator.fill(value);
    } 

    async getInputValue(locator: Locator): Promise<string>
    {
        return await locator.inputValue();
    }

    async getText(locator: Locator): Promise<string>
    {
        return await locator.textContent() || "";
    }

    async getAttribute(locator: Locator, attributeName: string): Promise<string | null>
    {
        return await locator.getAttribute(attributeName);
    }

    //Common Click
    async clickElement(locator: Locator): Promise<void>
    {
        await locator.click();
    }

}