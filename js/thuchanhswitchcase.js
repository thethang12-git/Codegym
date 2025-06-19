function bai1() {
let browser = prompt("Enter browser name!")
switch (browser) {
    case 'Edge':
        alert("You've got the Edge!");
        break
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        alert('Okay we support these browsers too');
        break
    default:
        alert('We hope that this page looks ok!');
}
}
function bai2(){
    let answer = prompt('nhập số')
    switch(answer) {
        case 1 : alert('1')
            break
        case -1: alert('-1')
            break 
        default: alert('0')
    }
}