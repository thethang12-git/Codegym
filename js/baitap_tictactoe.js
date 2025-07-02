    let arr = []
let turnX = true
let html = document.getElementById('bang')
for (let x = 0; x < 5; x++){{
    let a = []
    arr.push(a)
    for (let y = 0; y < 5 ; y++){
        a.push('.')
    }
}}

// hiển thị bảng
function hienthibang() {
    let content = ''
    for (let i = 0; i < arr.length; i++) {
        content += '<tr>'
        for (let k = 0;k < arr[i].length;k++ ){
            content += `<td>${arr[i][k]}</td> `
        }
        content += '</tr>'
    }
    html.innerHTML = content
}
// sửa bảng 
function sua(){
    let requestX;
    let requestY;
    do { 
    requestX = +prompt('nhap gia tri cua x') ;
    requestY = +prompt('nhap gia tri cua y') ;
    if (requestX == ''|| requestY == '' || requestX <= 0 || requestX > 5 || requestY <= 0 || requestY > 5) {alert('nhập lại')} }
    while(requestX == ''|| requestY == '' || requestX <= 0 || requestX > 5 || requestY <= 0 || requestY > 5)
    requestX -= 1
    requestY -= 1
    if(arr[requestX][requestY] == '.') {
        if (turnX) {arr[requestX][requestY] = 'x' ;turnX = false}
        else {arr[requestX][requestY] = 'o' ;turnX = true} 
    }
    hienthibang()
}
