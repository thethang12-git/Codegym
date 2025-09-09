enum newnew {
    a = 11,
    b,
    c,
    d,
    e,
}
let value = newnew
function myFunction (total :number, {a,b,c} :{a:number,b:number, c:number}) :object {

    return {
        a : (total + a) ,
        b : (total + b) ,
        c :  total + c ,
    }
}
let result :object = myFunction(24,newnew)
result = {
    a : 1,
    b : 0,
    c : 2,
}
console.log(result);

function hehe(value :number) : Function {
    return function hehee (newVal :number = value + 1) :number {
        if (newVal == 10) {return newVal + 10}
        console.log(newVal);
        return hehee(newVal+1);
    }
}
console.log(hehe(2)())
// function hehe(value :number) : number {
//     if (value == 10) {return value + 10}
//     return hehe(value + 1);
// }

