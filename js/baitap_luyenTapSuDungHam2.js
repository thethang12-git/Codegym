// bài 1
function bai1(){
    let inputt1 = +prompt('nhập số a')
    
    return document.write('bình phương của số ' + inputt1 + ' là ' + (inputt1 * inputt1))
}

//bài 2
function bai2(){
    let a = +prompt('nhập chiều dài')
    let b  = +prompt('nhập chiều rộng')
    document.write(`chu vi của hình là: ${(a+b)*2} <br> diện tích của hình là  ${a*b}` )
}

// bài 3
function bai3(){
    let a = +prompt('nhập số cần tính giai thừa')
    if (isNaN(a) || a < 0 || !Number.isInteger(a)) {
        alert("Nhập một số nguyên không âm!");
        return;
    }
    let result = 1;
    for(let x = 1; x <= a; x++  ){
        result *= x
    }
    return document.write(`gia thừa của ${a} là ${result}`)
}

//bài 4
function bai4(){
    let a = prompt('nhập vào ký tự số')
    if(!isNaN(a)){
        alert('là số')
    }
    else {
        alert('không phải là số')
    }
}

// bài 5
function bai5(){
    let a = +prompt('số 1?')
    let b = +prompt('số 2?')
    let c = +prompt('số 3?')
    if(a > b) {
        if(b > c){
            document.write(`${c} là giá trị nhỏ nhất`)
        }
        else{ document.write(`${b} là giá trị nhỏ nhất`)}
    }
    else {
        if(a> c) {
            document.write(`${c} là giá trị nhỏ nhất`)
        }
        else {
            document.write(`${a} là giá trị nhỏ nhất`)
        }
    }
}

// bài 6
function bai6(){
    let a = +prompt('nhập vào số')
    if(a > 0 && a % 1 == 0){
        return true
        // document.write('đây là số nguyên dương')
    }
        // else{document.write('đây không phải số nguyên dương')}
        return false
}

// bài 7
function bai7(){
    let tem;
    let a = +prompt('nhập vào số đầu tiên');
    let b = +prompt('nhập vào số thứ 2');
    tem = a
    a = b
    b = tem
    document.write(a + 'và ' + b)
}

//bài 8
let arr = []
function bai8(){
    for (let x = 0;x < 5;x++)
    {   let a = prompt('nhập vào giá trị ' + (x + 1))
        arr.push(a)
    }
    arr.reverse()
    document.write(arr)
}

//bài 9
let arr2 = []
function bai9(){
    let count = 0
    for (let x = 0;x < 5;x++)
    {   let a = prompt('nhập vào giá trị ' + (x + 1))
        arr2.push(a)
    }
    let a = prompt('nhập vào giá trị cần kiểm tra')
    arr2.forEach(item => {
        if(a.toLowerCase() == item.toLowerCase()){count++}
    })
    document.write('số lầnn xuất hiện của giá trị vừa nhập vào là ' + count)
}
