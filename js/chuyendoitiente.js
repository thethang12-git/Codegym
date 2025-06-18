var from = document.getElementById("currencyFrom");
var to = document.getElementById("currencyTo");
// function doiTienTe(){
// let amount = +document.getElementById("amount").value;
// if (from.value === to.value) {
//     document.getElementById('result').innerHTML = `Số tiền sau khi chuyển đổi là ${amount}`;
// }
// else{
//     if (from.value === 'USD') {
//         giaTien = amount * 23000;
//         document.getElementById('result').innerHTML = `Số tiền sau khi chuyển đổi là ${(giaTien % 1 !== 0) ? giaTien.toFixed(2) : giaTien} VND`;
//     }
//     else {
//         if (amount < 23000  ) {document.getElementById('result').innerHTML = "Số tiền phải lớn hơn 23000 VND" ; return;}
//         else{
//             giaTien = amount / 23000;
//             document.getElementById('result').innerHTML = `Số tiền sau khi chuyển đổi là ${(giaTien % 1 !== 0) ? giaTien.toFixed(2) : giaTien} $;`;
//         }
//     }
// }
//     document.getElementById("amount").value = '';
// }

//Cách làm 2
function doiTienTe(){
    let ammout = +document.getElementById("amount").value;
    document.getElementById('result').innerHTML = ammout * to.value / from.value;
}