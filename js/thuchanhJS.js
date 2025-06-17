let inputWidth;
let inputHeight;
inputWidth = prompt('enter the width')
inputHeight = prompt('enter the height');
// chuyển kiểu dữ liệu sang số nguyên
inputWidth = parseInt(inputWidth);
inputHeight = parseInt(inputHeight);
if (!inputHeight || !inputWidth) {
    document.write("Vui lòng nhập chiều rộng và chiều cao hợp lệ.");}
    else{
var dienTich = inputWidth * inputHeight;
    document.write("Diện tích hình chữ nhật là: " + dienTich + " cm2");}