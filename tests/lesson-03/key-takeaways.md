# Git
## Undo Actions
Dùng `git restore --staged <file_name>` để undo file từ vùng Staging lùi về vùng Working Directory

Dùng `git restore --staged .` để undo toàn bộ

Dùng `git reset HEAD~1` -> Quay về commit trước đó và các file được commit sẽ undo về vùng Working Directory

## Pull Code
`git pull origin main` dùng để lấy code từ nhánh Main ở remote về

## Branch Model
Nhánh `branch` là các phiên bản riêng của code. Để tránh ảnh hưởng đến nhánh chính khi thực hiện công việc push và pull code

- Xem danh sách nhánh : `git branch`
- Tạo nhánh mới từ nhánh đang hiện hành : `git branch <branch_name>`
- Chuyển sang nhánh mới : `git checkout <branch_name>` 
- Tạo 1 nhánh mới và đồng thời chuyển sang nhánh đó : `git checkout -b <branch_name>`
- Xoá 1 nhánh : `git branch -D <branch_name>`

**Lưu ý : Luôn pull code về trước khi tạo 1 nhánh mới để tránh trường hợp commit ở nhánh con vừa được tạo không đồng bộ với nhánh chính trên remote**

## Ignore File

File Ignore là file chỉ định những file sẽ không được `Tracking` Có nghĩa là sẽ không xuất hiện trên vùng Working Directory

Có những file mặc định sẽ không đưa lên Git thì sẽ được config ở File `.ignore`

# JavaScript
## Covention
Đặt theo quy quy tắc bên dưới <br>
- Tên file : kebab-case
- Tên biến :  camelCase
- Tên Function : camelCase
- Tên Class : PascalCase

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