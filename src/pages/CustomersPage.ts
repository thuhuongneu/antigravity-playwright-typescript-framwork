import { Page } from '@playwright/test';
import { allure } from 'allure-playwright';

export class CustomersPage {
  private readonly page: Page;

  // CSS locators targeting the customers data table
  readonly customerTable;
  readonly customerRows;

  constructor(page: Page) {
    this.page = page;
    this.customerTable = this.page.locator('table#clients');
    this.customerRows  = this.page.locator('table#clients tbody tr');
  }

  /**
   * Get the current number of data rows in the customer list table
   * @returns Number of visible data rows
   */
  async getRowCount(): Promise<number> {
    return await allure.step('Get customer table row count', async () => {
      let count = 0;
      await allure.step(
        `Count rows in customer table [locator('table#clients tbody tr')]`,
        async () => {
          count = await this.customerRows.count();
        }
      );
      return count;
    });
  }
}
