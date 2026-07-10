import { Page } from '@playwright/test';
import { allure } from 'allure-playwright';

export class DashboardPage {
  private readonly page: Page;

  // Use regex to avoid hardcoding special icon characters in menu text
  readonly customersMenuLink;

  constructor(page: Page) {
    this.page = page;
    this.customersMenuLink = this.page.getByRole('link', { name: /Customers/ });
  }

  /**
   * Click the Customers menu to navigate to the customer management page
   */
  async clickCustomersMenu() {
    await allure.step('Navigate to Customers module via sidebar menu', async () => {
      await allure.step(
        `Click Customers menu link [getByRole('link', {name: /Customers/})]`,
        async () => {
          await this.customersMenuLink.click();
        }
      );
    });
  }
}
