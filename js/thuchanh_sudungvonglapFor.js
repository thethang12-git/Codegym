let result = document.getElementById('result')
// Viết chương trình hiển thị chuỗi “The number is N” 5 lần sử dụng vòng lặp for. Với N sẽ hiển thị từ 0 đến 5.
function bai1(){
    for(let i = 0; i<= 5;i++){
        result.innerHTML += '</br>' + i 
    }
}
// Bài 2: Viết chương trình nhập vào một số bất kỳ lớn hơn 0. Tính tổng các phần tử từ 1 đến số vừa nhập vào.
function bai2() {
    let sum = 0;
    let i = 1;
    let x = +prompt('nhập vào 1 số');
    while (x > 0 && i <= x){
        sum += i
        i++
    }
    result.innerHTML = sum 
}

