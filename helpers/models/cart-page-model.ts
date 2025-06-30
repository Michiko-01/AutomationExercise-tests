import { Page, Locator, expect } from '@playwright/test';

export class CartPageModel {
  readonly page: Page;
  readonly cartPageButton: Locator;

  constructor(page: Page) {
    this.page = page;
  }

  async verifyQuantityAmount(itemName: string, amount: number) {
    await expect(
      this.page
        .getByRole('row', { name: `Product Image ${itemName} Women` })
        .getByRole('button', { name: amount.toString() }),
    ).toBeVisible();
  }

  async deleteTheItem(itemName: string) {
    await this.page
      .getByRole('row', { name: `Product Image ${itemName} Women` })
      .getByRole('cell', { name: '' })
      .locator('a')
      .click();
    await expect(this.page.locator('#empty_cart')).toContainText(
      'Cart is empty! Click here to buy products.',
    );
  }
}
