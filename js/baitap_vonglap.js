// //Bai tap 1
// var x = 1
// while (x<=100){
//     document.write(x + '</br>')
//     x++
// }
// // Bai tap 2
// in ra số chia hết cho 5 từ 1 - 100
// var x = 1
// while (x <= 100) {
// if (x % 5 == 0) {
//     document.write(x + '</br>') 
// }
// x++
// }

// // Bai tap 3
// let tong = 0
// for(x = 0;x <= 10; x++){
// tong += x
// }
// document.write(tong)

// Bai tap 4
let tong = 0
for (x= 1;x <= 10 ;x++){
    let a = +prompt(`nhập số thứ ${x}`)
    tong += a
}
document.write(tong)

