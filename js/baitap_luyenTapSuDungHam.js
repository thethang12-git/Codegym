function bai1(){
    alert('xin chào')
}


//bài 2
let count = 0
function bai2(){
    count++
    document.getElementById('bai2').innerHTML = `kết quả hiển thị là ${count}` 
}

//bài 3
function bai3(){
    let num1 = +prompt('nhập vào đối số 1')
    let num2 = +prompt('nhập vào đối số 2')
    if(num1 > num2){document.write(`${num1} lớn hơn ${num2}`) }
    else {document.write('tổng 2 số là ' + (num1 + num2))}
}

// bài 4
function bai4(){
    function addNumbers() {
    firstNum = 4;
    secondNum = 8;
    result = firstNum + secondNum;
    return result;
}
result = 0;
alert(result)
result = addNumbers();
alert(result)
}

// bài 5
let input1 = ['Polaris', 'Aldebaran', 'Deneb', 'Vega', 'Altair', 'Dubhe', 'Regulus']
let input2 = ['Ursa Minor', 'Taurus', 'Cygnus', 'Lyra', 'Aquila', 'Ursa Major', 'Leo']
function bai5(){
    let inputt = prompt('nhập vào ngôi sao')
    let index = input1.findIndex(ind => {return ind.toLowerCase() == inputt.toLowerCase()})
    if(index != -1){document.write(input2[index])}
    else {document.write('không tìm thấy')}
}