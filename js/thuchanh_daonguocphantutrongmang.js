let x = [-3, 5, 1, 3, 2, 10,11];
let temp;
document.write(`<br> mảng ban đầu : ${x}`)
function reversee(){
    let t = 0
    while(t < x.length/2) {
    temp = x[t]
    x[t] = x[x.length - 1 - t] 
    x[x.length - 1 - t] = temp
    t++
    }
document.write(x)    
}
