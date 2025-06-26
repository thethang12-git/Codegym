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
        num = a + b
        a = num - b 
        b = num; // 1 2
        document.write(num + '<br>')
        console.log(a +',' + b)
    }
}