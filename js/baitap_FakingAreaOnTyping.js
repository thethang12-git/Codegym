let originStr = 'BAN LA MOT THANG NGOC!!!'
let count = 0;
let temp = ''
let arr = [...originStr]
let text = document.getElementById('text')
function handleOnKeyDown(){
    event.preventDefault()
    text.value += arr[count]
    count++
    
    if (count == arr.length + 1){
        count = 0;
        text.value = ''
    }
}
