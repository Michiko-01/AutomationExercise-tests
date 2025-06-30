import { test as base } from '@playwright/test';
import { LandingPageModel } from '../models/landing-page-model';
import { ProductsPageModel } from '../models/products-page-model';
import { PopupPageModel } from '../models/popup-page-model';
import { CartPageModel } from '../models/cart-page-model';

type BaseItemFixtures = {
  landingPageModel: LandingPageModel;
  productPageModel: ProductsPageModel;
  popupPageModel: PopupPageModel;
  cartPageModel: CartPageModel;
};

export const test = base.extend<BaseItemFixtures>({
  landingPageModel: async ({ page }, use) => {
    await use(new LandingPageModel(page));
  },
  productPageModel: async ({ page }, use) => {
    await use(new ProductsPageModel(page));
  },
  popupPageModel: async ({ page }, use) => {
    await use(new PopupPageModel(page));
  },
  cartPageModel: async ({ page }, use) => {
    await use(new CartPageModel(page));
  },
});

export { expect } from '@playwright/test';
