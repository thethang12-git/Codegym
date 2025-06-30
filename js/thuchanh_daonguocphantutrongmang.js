let x = [-3, 5, 1, 3, 2, 10];
let t = 0;
let temp;
document.write(`<br> mảng ban đầu : ${x}`)
function reversee(){
    while(t < x.length/2) {
    temp = x[t]
    x[t] = x[x.length - 1 - t] 
    x[x.length - 1 - t] = temp
    t++
    }
document.write(x)    
}
