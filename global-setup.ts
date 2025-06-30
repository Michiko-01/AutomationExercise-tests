import { chromium, type FullConfig } from '@playwright/test';
import dotenv from 'dotenv';
import { LandingPageModel } from './helpers/models/landing-page-model';
import { LoginPageModel } from './helpers/models/login-page-model';

dotenv.config();
//Login and save session for authentication
async function globalSetup(config: FullConfig) {
  const { baseURL, storageState } = config.projects[0].use;
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(baseURL! + '/login', { waitUntil: 'networkidle' });

  const landingPage = new LandingPageModel(page);
  await await landingPage.acceptConsent();

  const loginPage = new LoginPageModel(page);
  await loginPage.enterCredentials(
    process.env.USER_EMAIL!,
    process.env.USER_PASSWORD!,
  );
  await loginPage.clickLoginButton();

  // Ensure sesssions is started before saving it
  await landingPage.verifyLogin();

  await page.context().storageState({ path: storageState as string });

  await browser.close();
}

export default globalSetup;
