import { test } from '../helpers/fixtures/base-fixture';

test.describe('Verify Cart page tests', () => {
  const productName = 'Blue Top';
  const quantity = 4;

  test.beforeEach('Open the page that already login', async ({ page }) => {
    await page.goto('/');
  });

  test('Verify product quantity in cart', async ({
    page,
    landingPageModel,
    productPageModel,
    popupPageModel,
    cartPageModel,
  }) => {
    await landingPageModel.clickProductsPageButton();

    await page.goto('product_details/1');

    await productPageModel.enterTheQuantity(quantity);
    await productPageModel.clickAddToCartButton();

    await popupPageModel.clickViewCartLink();

    await cartPageModel.verifyQuantityAmount(productName, quantity);
    await cartPageModel.deleteTheItem(productName);
  });
});
