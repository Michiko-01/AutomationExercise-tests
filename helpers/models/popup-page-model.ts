import { Page, Locator } from '@playwright/test';

export class PopupPageModel {
  readonly page: Page;
  readonly viewCartLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.viewCartLink = page
      .getByRole('paragraph')
      .filter({ hasText: 'View Cart' });
  }

  async clickViewCartLink() {
    await this.viewCartLink.click();
  }
}
