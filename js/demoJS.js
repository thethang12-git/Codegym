
function tinhToan() {
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    document.getElementById('result').innerHTML = `trung bình cộng là ${(a + b) / 2}`;
}
function dauCong(){
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    document.getElementById('result').innerHTML = `tổng là ${a + b}`;
}
function dauTru(){
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    document.getElementById('result').innerHTML = `hiệu là ${a - b}`;
}
function dauNhan(){
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    document.getElementById('result').innerHTML = `tích là ${a * b}`;
}
function dauChia(){
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    if (b === 0) {
        document.getElementById('result').innerHTML = "Không thể chia cho 0";
        return;
    }
    document.getElementById('result').innerHTML = `thương là ${a / b}`;
}
function hienthi() {
    alert('Xin chào!');
    document.getElementById('message').innerHTML = 'Xin chào!';
    console.log('Xin chào!');
}