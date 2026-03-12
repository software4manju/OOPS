import {Page} from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { SignInToGitHubPage } from "../pages/SignInToGitHubPage";
import { NewRepositoryPage } from "../pages/newRepository"; 

export class GitHubLoginFlow {
    private homePage: HomePage;
    private signInToGitHubPage: SignInToGitHubPage;
    private newRepositoryPage: NewRepositoryPage;

constructor(page: Page) {
    this.homePage = new HomePage(page);
    this.signInToGitHubPage = new SignInToGitHubPage(page);
    this.newRepositoryPage = new NewRepositoryPage(page);
}} 

