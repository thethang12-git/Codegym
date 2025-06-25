// logic sẽ là if else
// good = true -  cheap = true - fast = false
// good = true - cheap = false - fast = true
// good = false - cheap = true - fast = true
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