let result = document.getElementById('result')
function bai1() {
    let num
    let total = 0;
    while( num != -1  ) {
    num = +prompt("Enter a number: ");  
    if(num === -1) break;
    total += num ;  
    alert('tổng là' + ' ' +total)
} 
}

//bài 2
function bai2() {
    let i = 1;

while (i < 100) {
    result.innerHTML += "<hr width = " + i + "%>" 
    i++;
}
}
