function bai1(){
var a = prompt('nhap so a')
var b = prompt('nhap so b')
let result = parseInt(a) + parseInt(b)
alert(result < 4 ? 'nhỏ hơn 4' : 'lớn hơn 4')
}
function bai2(){
    let answer = prompt('Enter')
    let message = 
        answer == '' ? 'chưa nhập gì' 
        : answer == 'employee' ? 'hello'
        : answer == 'director' ? 'greeting'
        : 'no login'
alert(message)
}