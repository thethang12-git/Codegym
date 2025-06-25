let count = 0
function run() {
    let a
    do {
        if (count == 0) {
        a = prompt('nhập số');
        count++ }
        else {
        a = prompt('nhập lại số');
        }
        }
        while (a <= 0 || a > 10) ;
        alert ('số vừa nhập là' +  ' ' + a)
        count = 0
}