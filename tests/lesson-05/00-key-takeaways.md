# 1. Function

Có thêm 3 cách định nghĩa function nữa

- Express Function

```
const add = function(a, b) {
return a + b;
};

console.log(add(2, 3)); // 5
```

- Arrow function

```
const add = (a, b) => {
return a + b;
};

console.log(add(2, 3)); // 5
```

- Anonymous function

```
function() { // SyntaxError! Không thể đứng một mình
console.log("I'm anonymous!");
}
// Anonymous function phải được sử dụng ngay

// 1. Gán cho biến
const anonymousFunc = function() {
console.log("I'm anonymous but stored in a
variable!");
};
```

# 2. DOM

Document Object Model

Là tập hợp các thẻ dưới dạng cây có cấu trúc

Các thể tiêu chuẩn

- `<html>` Thẻ gốc của trang
- `<head>` Chứa các metadata của trang như: tiêu đề Website, thông tin của google,...
- `<body>` Nội dung hiển thị của trang web
- `<div>` Thẻ bố cục của trang
- `<span>` Chứa các phần tử Inline
- `<header>, <footer>, <nav>, <section>` Thẻ ngữ nghĩa
- `<h1> đến  <h6>` Thẻ tiêu đề
- `<p>` thẻ paragraph định nghĩa văn bản
- `<ul> <ol> <li> ` Dùng để tạo danh sách có thứ tự và không có thứ tự
- `<a>` Thẻ link
- `<img>` dùng để gán hình ảnh
- `<form>` Biểu mẫu
- Các thẻ input như `<input>`, `<select> <option>`, `<textarea>`
- `<button>` Thẻ nút

# 3. Selector

Để tương tác với các phần tử của trang web thì ta cần `Selector` để xác định vị trí của phần tử

Có 3 loại Selector

- **Xpath**

```
VD: //button[normalize-space() = ‘Add to cart’]
```

Đặc điểm là dài, Dùng được hầu hết trong các trường hợp

- **CSS Selector**

```
VD: .add-to-cart
```

Đặc điểm là ngắn, Dùng cho các trường hợp dễ tìm, Trường hợp các phần tử khó có thể không tìm được

- **Playwright Selector**

```
VD: page.getByText(“Add to cart”);
```

Đặc điểm là chỉ dùng riêng cho PlayWright, cú pháp ngắn gọn, dễ hiểu

## Xpath Selector

= `XML Path`

Có 2 loại XML Path

- **Tuyệt đối**

```
/html/body/div/input
```

Đặc điểm là Phải viết đầy đủ đường dẫn từ Root Và không linh hoạt khi cấu trúc html thay đổi

- **Tương đối**

```
//input[@id=’user’]
```

Đặc điểm thì là lịnh hoạt nên dùng trong thực tế

# Playwright basic systax

| Action         | Systax                                                                                                                                                                                                                                                                                       |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Navigate       | await page.goto('https://pw-practice.playwrightvn.com/');                                                                                                                                                                                                                                    |
| Locate         | page.locator(“//input[@id=’email’]”)                                                                                                                                                                                                                                                         |
| Click          | Single click <br> await page.locator("//button").click(); <br> Double click <br> await page.locator("//button").dblclick(); <br>Click chuột phải<br> page.locator("//button").click({button: 'right'}) <br>Click chuột kèm bấm phím khác<br> page.locator("").click({modifiers: ['Shift'],}) |
| Input          | Fill <br>Giống việc bạn paste content vào một ô input <br> page.locator("//input").fill('Playwright Viet Nam');<br>pressSequentially<br>Giống việc bạn gõ từng chữ cái vào ô input<br>page.locator("//input").pressSequentially('Playwright Viet Nam', {delay: 100,});                       |
| Radio/checkbox | Lấy giá trị hiện tại đang là check hay không:<br>const isChecked = page.locator("//input").isChecked();<br>Check/ uncheck<br>page.locator("//input").check();<br>page.locator("//input").setChecked(false);                                                                                  |
| Select         | await page.locator('//select[@id=”country”]').selectOption({ label: 'USA' })                                                                                                                                                                                                                 |
| Upload file    | await page.locator("//input[@id='profile']").setInputFiles("<file-path>");                                                                                                                                                                                                                   |
