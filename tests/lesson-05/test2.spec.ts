import { test, expect } from "@playwright/test";

test("Product Page", async ({ page }) => {
  const productPageLink = page.getByRole("link", {
    name: "Bài học 2: Product page",
  });
  const product1 = page.locator("//button[@data-product-id='1']");
  const product2 = page.locator("//button[@data-product-id='2']");
  const product3 = page.locator("//button[@data-product-id='3']");
  const product1Quantity = page.locator(
    "//tbody[@id='cart-items']//td[text()='Product 1']/following-sibling::*[2]",
  );
  const product2Quantity = page.locator(
    "//tbody[@id='cart-items']//td[text()='Product 2']/following-sibling::*[2]",
  );
  const product3Quantity = page.locator(
    "//tbody[@id='cart-items']//td[text()='Product 3']/following-sibling::*[2]",
  );

  await test.step("Navigate To Page", async () => {
    await page.goto("https://material.playwrightvn.com/", {
      waitUntil: "load",
    });
    await expect(productPageLink).toBeVisible();
  });

  await test.step("Click Link", async () => {
    await productPageLink.click();
    await expect(page).toHaveTitle(/Simple E-commerce/);
  });

  await test.step("Product1 Have 2 Times", async () => {
    await product1.click();
    await product1.click();
    expect(await product1Quantity.innerText()).toBe("2");
  });

  await test.step("Product2 Have 3 Times", async () => {
    await product2.click();
    await product2.click();
    await product2.click();
    expect(await product2Quantity.innerText()).toBe("3");
  });

  await test.step("Product3 Have 1 Times", async () => {
    await product3.click();
    expect(await product3Quantity.innerText()).toBe("1");
  });
});
