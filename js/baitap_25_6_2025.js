function bai1() {
let x = 1
while (x <= 100){
if (x % 3 ==0 && x % 5 == 0 ){
    document.write('BuzzFizz <br>')
}
else if( x % 3 == 0 ){
    document.write('Buzz <br>')
}
else if ( x % 5 == 0){
    document.write('Fizz <br>')
}
else {
    document.write(x + '<br>')
}
x++
}
}
// bài tập 2
/* bài toán nhập vào 1 số, sau đó xác định số đó là số nguyên tố hay khônng
logic: đặt điều kiện if else if trước, với if là th số đó < 2, else if xử lý riêng trường hợp số đó = 2
ở phần else thì đặt điều kiện sao cho vòng lặp kiểm tra số nhập vào có chia hết cho các số từ 2 đến số liền trước số nhập vào hay không,
ví dụ nhập vào số 8, thì kiểm tra từ 2 - 7 xem có chia hết cho 8 hay không */
function bai2(){
let num =  +prompt('nhap vao so')
if (num < 2) { alert('không phải số nguyên tố')}
else if (num == 2) { alert('đây là số nguyên tố')}
else {
    let x = 2;
    let flag = true
    while (x < num){
        if( num % x == 0){ alert('đây không phải là số nguyên tố'); flag = false ; break}
        x++
    }
    if(flag){alert('đây là số nguyên tố')}

}
}
