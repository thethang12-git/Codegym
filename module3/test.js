var newnew;
(function (newnew) {
    newnew[newnew["a"] = 11] = "a";
    newnew[newnew["b"] = 12] = "b";
    newnew[newnew["c"] = 13] = "c";
    newnew[newnew["d"] = 14] = "d";
    newnew[newnew["e"] = 15] = "e";
})(newnew || (newnew = {}));
var value = newnew;
function myFunction(total, _a) {
    var a = _a.a, b = _a.b, c = _a.c;
    return {
        a: (total + a),
        b: (total + b),
        c: total + c,
    };
}
var result = myFunction(24, newnew);
result = {
    a: 1,
    b: 0,
    c: 2,
};
console.log(result);
function hehe(value) {
    return function hehee(newVal) {
        if (newVal === void 0) { newVal = value + 1; }
        if (newVal == 10) {
            return newVal + 10;
        }
        console.log(newVal);
        return hehee(newVal + 1);
    };
}
console.log(hehe(2)());
// function hehe(value :number) : number {
//     if (value == 10) {return value + 10}
//     return hehe(value + 1);
// }
