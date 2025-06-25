// logic sẽ là if else
// good = true -  cheap = true - fast = false
// good = true - cheap = false - fast = true
// good = false - cheap = true - fast = true
// nếu muốn tất cả nhóm vào 1 hàm thì phải xác định được trường hợp mình ấn vào cái nào (event.target)
let good = document.getElementById('GOOD')
let cheap = document.getElementById('CHEAP')
let fast = document.getElementById('FAST')
function goodd(){
    if(good.checked && fast.checked){
        cheap.checked = false
    }
}

function cheapp(){
    if(cheap.checked && good.checked){
        fast.checked = false
    }
}

function fastt() {
    if(fast.checked && cheap.checked){
        good.checked = false
    }
}