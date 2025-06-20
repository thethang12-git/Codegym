function giaiptbac2(){
// ax2 + bx +c = 0
let a =  +document.getElementById('a').value
let b =  +document.getElementById('b').value
let c =  +document.getElementById('c').value
// pt bậc 1
    if (a === 0) {
        if (b === 0) {
            if (c === 0) {
                document.getElementById('result').innerHTML = "Phương trình vô số nghiệm";
            } else {
                document.getElementById('result').innerHTML = "Phương trình vô nghiệm";
            }
        } else {
            let x = -c / b;
            document.getElementById('result').innerHTML = `Phương trình bậc 1, nghiệm là x = ${x}`;
        }
        return;
    }

// giải pt bậc 2
let result = (b ** 2) - (4*(a *c))
if (result > 0){document.getElementById('result').innerHTML = `pt có 2 nghiệm phân biệt x1 = ${((0-b + (result ** 0.5))/ (2 * a)) } và x2 = ${((0-b - (result ** 0.5))/ (2 * a)) } `}
else if (result == 0) {document.getElementById('result').innerHTML = `pt có nghiệm kép x = ${(0-b)/ (2* a)}`}
else {document.getElementById('result').innerHTML = `pt vô nghiệm`}}
