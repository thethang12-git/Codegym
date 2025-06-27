// Bài 1
function bai1(){
    let x = 1
    while (x < 100) {
        document.write(x + '<br>')
        x++
        if(x == 99){ document.write('đã hoàn thành'); break}
    }
}

//bài 2
function bai2(){
    let cel;
    do {
        cel = +prompt('nhập vào nhiệt độ')
        if(cel > 100 ){alert(' giảm nhiệt độ nhé')}
        else if (cel < 20 ) {alert('tăng nhiệt độ nhé')}
    } while (cel > 100 || cel < 20)
    alert('nhiệt độ hợp lý')
}

// bài 3
function bai3(){
    let a = 0;
    let b = 1 ;
    let num = 0;
    for (let i =0; i < 20; i++) {
        document.write(a)
        num = a + b
        a = b
        b = num
    }
}

//bài 4
function bai4(){
    let a = 0;
    let b = 1 ;
    let num = 0;
    for (let i =0; i < 20; i++) {
        num = a + b
        a = b
        b = num
        if(a % 5 == 0){document.write('số đầu tiên chia hết cho 5 là' + ' ' +a) ; break}
    }
}

//bài 5
let total = 0
function bai5(){
    let a = 0;
    let b = 1 ;
    let num = 0;
    for (let i =0; i < 20; i++) {
        total += a
        num = a + b
        a = b
        b = num
    }
    document.write( `tổng của 20 số đầu trong dãy fibonacy là ${total}`)
}

// bài 6
function bai6(){
    let x = 0;
    let temp = 0;
    while (x < 30) {
        for(let i = temp;i < 999; i++ ){
            if (i % 7 == 0){ temp = i + 1 ; document.write(i + ' ');  break }
        } 
        x++
    }
}

// bài 7
function bai7(){
    let x = 0
    do{
        if(x % 3 ==0 && x % 5 == 0){
            document.write('FizzBuzz' + '<br>')
        }
        else if (x % 3 == 0) { document.write('Fizz' + '<br>')}
        else if ( x % 5 == 0) {document.write('Buzz' + '<br>')}
        else (document.write(x + '<br>'))
        x++
    }
    while (x <= 100)
}