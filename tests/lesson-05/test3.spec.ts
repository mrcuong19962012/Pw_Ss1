import { test, expect } from "@playwright/test";

test("Todo Page", async ({ page }) => {
  const todoPageLink = page.getByRole("link", {
    name: "Bài học 3: Todo page",
  });
  const newTaskInput = page.locator("//input[@id='new-task']");
  const addTaskButton = page.locator("//button[@id='add-task']");
  const taskList = page.locator("//ul[@id='task-list']/li");
  await test.step("Navigate To Page", async () => {
    await page.goto("https://material.playwrightvn.com/", {
      waitUntil: "load",
    });
    await expect(todoPageLink).toBeVisible();
  });

  await test.step("Click Link", async () => {
    await todoPageLink.click();
    await expect(page).toHaveTitle(/To-Do List/);
  });

  await test.step("Add task 100 Times", async () => {
    for (let i = 0; i < 100; i++) {
      await newTaskInput.fill(`Task ${i + 1}`);
      await addTaskButton.click();
    }
    expect(await taskList.count()).toBe(100);
  });

  await test.step("Delete task with odd numbers.", async () => {
    page.on("dialog", (dialog) => dialog.accept());
    for (let i = 1; i <= 100; i++) {
      if (i % 2 !== 0) {
        await page.locator(`//button[@id='task-${i}-delete']`).click();
      }
    }
    expect(await taskList.count()).toBe(50);
  });
});
