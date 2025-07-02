var arr = [ 1000,1,5 ,6 ,8,20,10001,-5,50,0,8,9]
let temp = arr[0]
arr.forEach((item) => {
    if(item > temp) { temp = item}  
});
document.write(temp)