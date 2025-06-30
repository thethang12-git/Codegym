let x = 0
var arr = []
let valuee = document.getElementById('value')
function addE(){
    arr[x] = valuee.value
    alert('đã thêm!')
    x++
    value.value = ''
}
//
function displayE(){
    let e = '<hr/>' 
    arr.forEach((item,index) => {
        e += `element ${index} = ${item} <br>`
    });
    document.getElementById('result').innerHTML = e
}