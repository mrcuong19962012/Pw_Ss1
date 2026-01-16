# Git
## Undo Actions
Dùng `git restore --staged <file_name>` để undo file từ vùng Staging lùi về vùng Working Directory
## Branch Model
# JavaScript
## Covention
Đặt theo quy quy tắc bên dưới <br>
- Tên file : kebab-case
- Tên biến :  camelCase
- Tên Function : PascalCase

## Object
Là 1 kiểu dữ liệu dưới dạng Key Value <br>
VD: 
```
const product = {
“name”: “Laptop”,
“price”: 500,
“isWindow”: true,
“manufacturer”: {
“name”: “Acer”,
“year”: 2024
}
```
Muốn lấy giá trị của thuộc tính trong Object thì dùng cách `<Object>.<Thuộc tính>`

## Array
Khai báo : `const arr = [1,3,4,5,2,7,8,9]`

Mảng bắt đầu từ 0 <br>
VD `Muốn lấy phần từ vị trí số 3 thì sẽ arr[2] //  là 4 như Vd ở khai báo`

## Function
Là 1 đoạn Code được đặt tên và có thể tái sử dụng <br>
VD
```
function <nameFunction>() {
// code
}
```
Param của Function là phần được ánh xạ từ bên ngoài vào Function

Return là câu lệnh để thực hiện trả về giá trị về nơi mà function được gọi