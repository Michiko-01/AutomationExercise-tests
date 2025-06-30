import { expect, test } from '@playwright/test';

test('search product using API', async ({ request }) => {
  const response = await request.post('api/searchProduct', {
    form: {
      search_product: 'blue top',
    },
  });

  expect(response.ok()).toBeTruthy();
  const responseJson = await response.json();
  expect(responseJson.responseCode).toBe(200);
  expect(responseJson.products[0].name).toBe('Blue Top');
  expect(responseJson.products[0].category.usertype.usertype).toBe('Women');
});
