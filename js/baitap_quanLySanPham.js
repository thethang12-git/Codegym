let product = []
let display = document.getElementById('display')
let inputt = document.getElementById('input')
function add(){
    product.push(inputt.value)
    display.innerHTML = ''
    for(let x = 0;x < product.length;x++){
    display.innerHTML += `<p> ${product[x]}  <button onclick='edit(${x})'> edit </button> <button onclick='deletee(${x})'> delete </button> </p> <br>`
}
    inputt.value = ''
}

function edit(event){
    product[event] = prompt('sửa giá trị mới')
    display.innerHTML = ''
    for(let x = 0;x < product.length;x++){
    display.innerHTML += `<p> ${product[x]}  <button onclick='edit(${x})'> edit </button> <button onclick='deletee(${x})'> delete </button> </p> <br>`
}
}
function deletee(event){
    product.splice(event, 1)
    display.innerHTML = ''
    for(let x = 0;x < product.length;x++){
    display.innerHTML += `<p> ${product[x]}  <button onclick='edit(${x})'> edit </button> <button onclick='deletee(${x})'> delete </button> </p> <br>`
}
}
