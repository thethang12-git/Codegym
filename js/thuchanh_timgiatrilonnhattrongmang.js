let numbers = [-3, 5, 1, 3, 2, 10];
document.getElementById('array').innerHTML = `mảng ban đầu gồm  : ${numbers}`
let max = numbers[0];
for (num of numbers) {
    if (num > max) {
        max = num
    }
}
document.write(`giá trị lớn nhất trong mảng là ${max}`)