let numbers = [-3, 5, 1, 3, 2, 10];

let a

let flag = true
do{
    a = +prompt('đoán số có trong mảng')
    let found
    for (let num of numbers) {
        if (num === a) {
            found = true
            break
        }
    }
    if(found) {
        document.getElementById('result').innerHTML = 'Đoán đúng rồi!';
        flag = false;
    }
    else {
        alert('đoán sai rồi, đoán lại nhé')
    }
}
while(flag)