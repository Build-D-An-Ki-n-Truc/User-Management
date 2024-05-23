const express = require('express');
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const path = require('path');
// khai báo thư viện
const route = require('./routes');
const app = express(); // tạo instance của thư viện express
const port = 3000; // run website ở port nào
// đinh nghĩa route, /tin-tuc thì phải gõ tin-tức
// http://localhost:3000/trang-chu/ khi là: /trang-chu
//app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));
// urlencoded() là middleware để xử, từ browser(client) --> server
app.use(
    express.urlencoded({
        extended: true,
    }),
);

// gửi dữ liệu từ server --> browser(client), thư viện trong js với code js để submit
//XMLHttpRequest, fetch, axios,
//HTTP logger
app.use(express.json());

// Template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource\\views'));

//Home, search, contact

// Routes init
route(app);
// do path no chi toi src nên nó không tim được file home trong views, cái cần render là layouts của file home
console.log('PATH:' + __dirname);

// post khi dien form
// get khi muon hien thi du lieu
/*function(req, res) {}  */
// 127.0.0.1
app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`),
);
// để server không chạy nữa thì ấn control c

// debug chi chuot vao bien de thay gia tri bien
// luu y la tren windows thi no khong phai la breakpoint ma la quet khoi xanh dau dong do
// neu gap loi la [nodemon] app crashed - waiting for file changes before starting... thi la chua luu file cau hinh
// hoac chua luu file theo thu tu
// giữa browser và controller, có tích hợp lưu vào query nhưng ko body, version từ 4.16 trở xuống phải cài: body-parser và qs lib, ngược lại được tích hợp
//xem body-parser và qs lib trong package.json

// luu y la da cho phep thu vien co the tu overwrite files code
// lint-stage check xem cac file add vao git & co dung format ?
