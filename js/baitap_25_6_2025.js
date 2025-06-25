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
function bai2(){
    let x
    do {
        x = +prompt('nhap vao 1 so')
            if (x == -1) {
                alert('thoát'); 
                break}
        else  if( x >= 2 && x % 1 === 0 ){
            alert('đây là số nguyên tố')
        }
        else { alert('không phải số nguyên tố')}
    }
        while (x != -1)
}