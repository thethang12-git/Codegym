let a = +prompt('nhập vào cân nặng') // weight
let b = +prompt('Nhập vào chiều cao') // height
let result = a / (b ** 2)
if (result < 18.5) {
    alert('Underweight')
}
else if (result < 25) 
    {
        alert('Normal')
    }
else if (result < 30){
    alert('Overweight')
}
else {
    alert('Obese')
}