import { Page, Locator } from '@playwright/test';

export class ProductsPageModel {
  readonly page: Page;
  readonly clickViewProductButton: Locator;
  readonly updateQuantity: Locator;
  readonly addToCartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.updateQuantity = page.locator('#quantity');
    this.addToCartButton = page.getByRole('button', { name: ' Add to cart' });
  }

  async enterTheQuantity(quantity: number) {
    await this.updateQuantity.fill(quantity.toString());
  }

  async clickAddToCartButton() {
    await this.addToCartButton.click();
  }
}
