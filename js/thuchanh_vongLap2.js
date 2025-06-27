// Bài 1
function bai1(){
    let a = 0;
    let b = 1 ;
    let num = 0;
    for (let i =0; i < 20; i++) {
        document.write(a + '<br>')
        num = a + b
        a = b
        b = num
    }
}
// bai 2
// tính giai thừa của số nguyên dương 5!= 5 * 4 * 3 * 2 * 1
function bai2(){
    let result = 1;
    let num = +prompt('nhập vào số nguyên dương')
    while (num <= 0 || isNaN(num)){
            num = +prompt('nhập lại số') 
        }
    for (let i = num; i > 0; i--){ 
        result = result * i 
        }
    document.write(`giai thừa của ${num} là ${result}`);    
}
// bài 3
function bai3() {
    for (let i = 1; i <= 5; i++) {
         let sao = '';
        for (let j = 1; j <= i; j++) {
            sao += '*';   
        }
        document.write(sao + '<br>');
    }
    document.write('<br>')
    for (let i = 5; i >= 1; i--) {
         let sao2 = '';
        for (let j = 1; j <= i; j++) {
            sao2 += '*';   
        }
        document.write(sao2 + '<br>');
    }
    document.write('<br>')
    for (let i = 1; i <= 5; i++) {
         let sao3 = '';
         let space = '';
         for (let s = 1; s <= 5 - i; s++) {
            space += '&nbsp;';  
        }
        for (let j = 1; j <= i; j++) {
            sao3 += '*';  } 
        document.write(space + sao3 + '<br>');
    }
}

