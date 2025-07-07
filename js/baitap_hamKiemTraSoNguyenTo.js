let a = +prompt('nhập vào 1 số')
let empty = ''
function checkk(){
    if(a == 2){return 'đây là số nguyên tố'}
    else if (a > 2){
        for (let i = 2 ; i < a ; i++){
            if(a % i == 0){
                return 'đây không phải số nguyên tố'
            } 
        }
        return ` <br> số ${a} là số nguyên tố`
    }
    else {
        return 'đây chắc chắn k phải số nguyên tố'
    }
}
document.write(checkk())
function checkk2(){
    if (a > 2) { 
    for (let z = 2; z < a; z++){
        let isPrime = true;
        for (let x = 2;x < z ; x++){
                if(z % x == 0) {isPrime = false; break}
        }
    if(isPrime) {empty += z + '<br>'}
    } 
    document.write(empty)
}
    else if (a  == 2) { document.write(2)}
    else {console.log('yêu cầu nhập số > 2')}
}
