let a = +prompt('nhập vào số feet')
let b = +prompt('nhập vào số meter')
function footToMeter(feet){
    return 0.305 * feet
}

function meterToFoot(meter){
    return 3.279 * meter 
}
document.write(a + ' feet ' + '=' + footToMeter(a) + ' meter ' + '<br>' + b + ' meter ' +  '=' + meterToFoot(b) + ' feet ')