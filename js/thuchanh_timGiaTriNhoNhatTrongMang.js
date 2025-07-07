var arr1 = [3, 5, 1, 8, -3, 7, 8];
var arr2 = [7, 12, 6, 9, 20, 56, 89];
var arr3 = [];
var arr4 = [0, 0, 0, 0, 0, 0];
function findMinIndex(arr) {
    let isDifferent = false
    if(arr.length === 0) {return 'không có giá trị, vì hàm rỗng'}    
    let min = arr[0]
    for (let a = 0; a < arr.length; a++){
        if(min > arr[a]){
            min = arr[a]
        }
        if (min != arr[a]){
            isDifferent = true
        }
        }
         if(!isDifferent) {return 'không có giá trị, vì các giá trị trong mảng giống nhau'}
        return min 
}

document.write(findMinIndex(arr4))