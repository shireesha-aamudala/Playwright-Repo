const { test, expect } = require('@playwright/test');

test('Bootstrap Dropdown - Job Titles', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Login
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  // Navigate to Employee List
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Employee List' }).click();

  // --- Click Job Title dropdown ---
  const jobTitleDropdown = page.locator('div.oxd-input-group')
                            .filter({has: page.locator('label:has-text("Job Title")')
                                    })
                            .locator('.oxd-select-text');

  // Click specific dropdown
  await jobTitleDropdown.click();

  // Wait for options to appear
  const optionsLocator = page.locator('div[role="option"] span');
  await optionsLocator.first().waitFor({ state: 'visible' });

  // Extract and print options
  const jobOptions = await optionsLocator.allTextContents();
  console.log('Total Job Titles:', jobOptions.length);
  jobOptions.forEach(option => console.log('Job Title:', option.trim()));

  // Assert at least one option
  expect(jobOptions.length).toBeGreaterThan(0);
});
