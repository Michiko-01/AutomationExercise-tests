import { Page, Locator } from '@playwright/test';

export class LoginPageModel {
  readonly page: Page;
  readonly emailAddress: Locator;
  readonly password: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailAddress = page
      .locator('form')
      .filter({ hasText: 'Login' })
      .getByPlaceholder('Email Address');
    this.password = page.getByRole('textbox', { name: 'Password' });
  }

  async enterCredentials(emailAddress: string, password: string) {
    await this.emailAddress.fill(emailAddress);
    await this.password.fill(password);
  }

  async clickLoginButton() {
    await this.page.getByRole('button', { name: 'Login' }).click();
  }
}
