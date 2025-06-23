// logic sẽ là if else
// good = true -  cheap = true - fast = false
// good = true - cheap = false - fast = true
// good = false - cheap = true - fast = true
// 
function check(){
   
    var GOOD = document.getElementById('GOOD');
    var CHEAP = document.getElementById('CHEAP');
    var FAST = document.getElementById('FAST');

    var isGood = GOOD.checked;
    var isCheap = CHEAP.checked;
    var isFast = FAST.checked;

    if (isGood && isCheap){
        if (isFast){
            GOOD.checked = false; 
            console.log('case 0');
        }
        else if (!isFast && !isGood){ {
            FAST.checked = false; 
            console.log('case 1');
        }
        if (isFast && !isGood){
            CHEAP.checked = false; 
            console.log('case 4');
        }
    }
    else if (isGood && isFast){
        CHEAP.checked = false;
        console.log('case 2');
    }
    else if (isCheap && isFast){
        GOOD.checked = false;
        console.log('case 3');
    }
}}
