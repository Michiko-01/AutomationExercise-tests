import { Page, Locator, expect } from '@playwright/test';

export class LandingPageModel {
  readonly page: Page;
  readonly acceptCookies: Locator;
  readonly productsPageButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.acceptCookies = page.getByRole('button', { name: 'Consent' });
    this.productsPageButton = page.getByRole('link', { name: 'Products' });
  }

  async acceptConsent() {
    await this.acceptCookies.click();
  }

  async verifyLogin() {
    await expect(this.page.getByText('Logged in as Customer_SA')).toBeVisible();
  }

  async clickProductsPageButton() {
    await this.productsPageButton.click();
  }
}
