import { test, expect } from "@playwright/test";

test("Register Page", async ({ page }) => {
  const registerPageLink = page.getByRole("link", {
    name: "Bài học 1: Register Page (có đủ các element)",
  });
  const userName = page.locator("#username");
  const email = page.locator("#email");
  const gender = page.locator("#male");
  const hobbies1 = page.getByRole("checkbox", { name: "Reading" });
  const hobbies2 = page.getByRole("checkbox", { name: "Traveling" });
  const hobbies3 = page.getByRole("checkbox", { name: "Cooking" });
  const interests = page.getByLabel("Interests:");
  const country = page.getByLabel("Country:");
  const dateOfBirth = page.locator("//input[@name='dob']");
  const profilePicture = page.locator("//input[contains(@id,'profile')]");
  const biography = page.locator("//textarea[contains(@id,'bi')]");
  const registerButton = page.getByRole("button", { name: "Register" });
  const firstRowOfTable = page.locator("//table[@id='userTable']/tbody/tr");

  await test.step("Navigate To Page", async () => {
    page.goto("https://material.playwrightvn.com/", { waitUntil: "load" });
    await expect(page).toHaveTitle(/Tài liệu học automation test/);
  });

  await test.step("Get Locator", async () => {
    expect(registerPageLink).toBeVisible();
  });

  await test.step("Click Link", async () => {
    await registerPageLink.click();
    await expect(page).toHaveTitle(/User Registration/);
  });

  await test.step("Input Username", async () => {
    await userName.fill("Cuong");
    await expect(userName).toHaveValue("Cuong");
  });

  await test.step("Input Email", async () => {
    await email.fill("tancuong.it@gmail.com");
    await expect(email).toHaveValue("tancuong.it@gmail.com");
  });
  await test.step("Input Gender", async () => {
    await gender.check();
    await expect(gender).toBeChecked({ checked: true });
  });
  await test.step("Input Hobbies", async () => {
    await hobbies1.check();
    await hobbies2.setChecked(true);
    expect(hobbies1.isChecked);
    expect(hobbies2.isChecked);
    await expect(hobbies3).toBeChecked({ checked: false });
  });

  await test.step("Input Interests", async () => {
    await interests.selectOption("technology");
    await expect(interests).toHaveValue("technology");
  });

  await test.step("Input Country", async () => {
    await country.selectOption({ label: "Australia" });
    await expect(country).toHaveValue("australia");
  });

  await test.step("Input Date Of Birth", async () => {
    await dateOfBirth.fill("2026-02-24");
    await expect(dateOfBirth).toHaveValue("2026-02-24");
  });

  await test.step("Input Profile Picture", async () => {
    await profilePicture.setInputFiles("tests/lesson-05/00-key-takeaways.md");
    await expect(profilePicture).toHaveValue(/00-key-takeaways.md/);
  });

  await test.step("Input Biography", async () => {
    await biography.fill("Description");
    await expect(biography).toHaveValue(/Descri/);
  });

  await test.step("Click Button Register", async () => {
    await registerButton.click();
    expect(firstRowOfTable).toBeVisible();
  });
});
