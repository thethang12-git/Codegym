// Đây là bài toán giải theo phương thức đệ quy
let iniStr = prompt('nhập vào số để kiểm tra chuỗi đối xứng')
let arr = [...iniStr]
function isPalindrome(arr,left = 0, right = arr.length - 1){
    if (left > right){return true}
    if (arr[left] == arr[right]){
        return isPalindrome(arr,left + 1, right - 1)
    }
    else {
        return false
    }
}
document.write(isPalindrome(arr) ? 'đây là chuỗi palindrome' : 'đây không phải chuỗi palindrome')