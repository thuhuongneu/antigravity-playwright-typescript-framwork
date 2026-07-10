import { Page } from '@playwright/test';
import { allure } from 'allure-playwright';

export class LoginPage {
  private readonly page: Page;

  // Locators using semantic Playwright roles
  readonly emailInput;
  readonly passwordInput;
  readonly loginButton;

  constructor(page: Page) {
    this.page = page;
    this.emailInput    = this.page.getByRole('textbox', { name: 'Email Address' });
    this.passwordInput = this.page.getByRole('textbox', { name: 'Password' });
    this.loginButton   = this.page.getByRole('button',  { name: 'Login' });
  }

  /**
   * Navigate to the CRM login page
   */
  async navigate() {
    await allure.step('Navigate to CRM login page', async () => {
      await allure.step('Open URL: https://crm.anhtester.com/admin/authentication', async () => {
        await this.page.goto('https://crm.anhtester.com/admin/authentication');
      });
    });
  }

  /**
   * Perform login action with the given credentials
   * @param email    Login email address
   * @param password Login password
   */
  async login(email: string, password: string) {
    await allure.step(`Login with email "${email}"`, async () => {
      await allure.step(
        `Fill Email Address input [getByRole('textbox', {name: 'Email Address'})] with value "${email}"`,
        async () => {
          await this.emailInput.fill(email);
        }
      );

      await allure.step(
        `Fill Password input [getByRole('textbox', {name: 'Password'})] with value "****"`,
        async () => {
          await this.passwordInput.fill(password);
        }
      );

      await allure.step(
        `Click Login button [getByRole('button', {name: 'Login'})]`,
        async () => {
          await this.loginButton.click();
        }
      );
    });
  }
}
