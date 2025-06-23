// logic sẽ là if else
// good = true -  cheap = true - fast = false
// good = true - cheap = false - fast = true
// good = false - cheap = true - fast = true
var GOOD = document.getElementById('GOOD')
var CHEAP = document.getElementById('CHEAP')
var FAST = document.getElementById('FAST')
function check(){
if (GOOD.checked && CHEAP.checked){
    FAST.checked = false
    console.log('case 1')
}
else if (GOOD.checked && FAST.checked  ){
    CHEAP.checked = false
    console.log('case 2')
}
else if (CHEAP.checked && FAST.checked) {
    GOOD.checked = false
    console.log('case 3')
}
else {
    console.log('case 4')
}
}