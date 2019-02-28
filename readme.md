# MBS
Ứng dụng dành cho trái phiếu. Sử dụng React-redux-saga.
Để chạy ứng dụng, ta cần copy file **.env.example** và đổi tên thành **.env**

## Cài đặt package
`npm install`

## Dev
`npm run dev`

## Server *Để chạy server*
`npm start`

## Cấu trúc thư mục
*/src* chứa toàn bộ source code cần tìm.
*/src/components* chứa những components cho các page. Có 2 dạng components là common **(common folder)** và components theo page **(other folder)**.
*/src/serveices* nhận các services từ server side.
*/store/* được dùng bởi redux-saga. Cấu trúc ở đây ứng với mỗi module sẽ có 1 store. Ví dụ ta có danh sách sản phẩm => sẽ có store sản phẩm bao gồm các actions, reducers, và các lệnh saga.
*/container/* chứ các page được dùng.

Code sử dụng chuẩn ESlint của công ty Miracles do CEO chấp nhận. Không fix .eslint.

##Để test ESlint trước khi push code.
`npm run test`
