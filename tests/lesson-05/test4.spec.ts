import { test, expect } from "@playwright/test";

test("Personal notes", async ({ page }) => {
  const personalNotesLink = page.getByRole("link", {
    name: "Bài học 4: Personal notes",
  });

  const titleInput = page.getByRole("textbox", { name: "Title:" });
  const contentInput = page.getByRole("textbox", { name: "Content:" });
  const searchInput = page.getByRole("textbox", { name: "Search Notes:" });
  const addNoteButton = page.getByRole("button", { name: "Add Note" });
  const note = page.locator("//ul[@id='notes-list']/li");

  await test.step("Navigate To Page", async () => {
    page.goto("https://material.playwrightvn.com/", { waitUntil: "load" });
    await expect(page).toHaveTitle(/Tài liệu học automation test/);
  });

  await test.step("Get Locator", async () => {
    expect(personalNotesLink).toBeVisible();
  });

  await test.step("Click Link", async () => {
    await personalNotesLink.click();
    await expect(page).toHaveTitle(/Personal Notes/);
  });

  await test.step("Input All Info Of Table", async () => {
    await titleInput.fill("click");
    await contentInput.fill(
      "Hàm click dùng để thực hiện click vào các phần tử trên trang web",
    );
    await addNoteButton.click();

    await titleInput.fill("fill");
    await contentInput.fill(
      "Hàm fill dùng để điền văn bản vào các trường input hoặc textarea trên trang web",
    );
    await addNoteButton.click();

    await titleInput.fill("type");
    await contentInput.fill(
      "Hàm type dùng để nhập từng ký tự một vào phần tử, mô phỏng hành vi gõ phím thực tế của người dùng",
    );
    await addNoteButton.click();

    await titleInput.fill("hover");
    await contentInput.fill(
      "Hàm hover dùng để di chuyển con trỏ chuột đến vị trí của phần tử, kích hoạt các hiệu ứng hover",
    );
    await addNoteButton.click();

    await titleInput.fill("check");
    await contentInput.fill(
      "Hàm check dùng để đánh dấu checkbox hoặc radio button, đảm bảo phần tử ở trạng thái checked",
    );
    await addNoteButton.click();

    await titleInput.fill("uncheck");
    await contentInput.fill(
      "Hàm uncheck dùng để bỏ đánh dấu checkbox, đảm bảo phần tử ở trạng thái unchecked",
    );
    await addNoteButton.click();

    await titleInput.fill("selectOption");
    await contentInput.fill(
      "Hàm selectOption dùng để chọn một hoặc nhiều option trong thẻ select dropdown",
    );
    await addNoteButton.click();

    await titleInput.fill("press");
    await contentInput.fill(
      "Hàm press dùng để mô phỏng việc nhấn phím bàn phím như Enter, Tab, Escape hoặc các phím khác",
    );
    await addNoteButton.click();

    await titleInput.fill("dblclick");
    await contentInput.fill(
      "Hàm dblclick dùng để thực hiện double click (nhấp đúp chuột) vào phần tử trên trang web",
    );
    await addNoteButton.click();
    await titleInput.fill("dragAndDrop");
    await contentInput.fill(
      "Hàm dragAndDrop dùng để kéo một phần tử từ vị trí nguồn và thả vào vị trí đích trên trang web",
    );
    await addNoteButton.click();
    expect(await note.count()).toBe(10);
  });

  await test.step("Search", async () => {
    await searchInput.fill("một hoặc nhiều");
    expect(await note.count()).toBe(1);
  });
});
