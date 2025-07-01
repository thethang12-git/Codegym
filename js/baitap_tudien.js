var anh = ['hello', 'goodbye', 'yes' , 'no', 'agree', 'disagree', 'goodnight' , 'hello Saddy']
var viet = ['xin chào', 'tạm biệt', 'có', 'không', 'đồng ý', 'không đồng ý', 'chúc ngủ ngon', 'xin chào saddy']
let inputt = document.getElementById('input')
let displayy = document.getElementById('result')
let temp = ''
function search(){
    temp = inputt.value;
    if (temp === '') {
        displayy.innerHTML = '';
        return;
    }
    let a = anh.filter(item =>{
        return item.includes(temp)
    });
    if (a.length == 0) {displayy.innerHTML = 'không tìm thấy'; temp = ''}
    else {displayy.innerHTML = a.join('<br>');temp = '' }
}

function trans(){
    let trans = anh.indexOf(inputt.value)
    if(trans != -1) {
        document.getElementById('trans').innerHTML = viet[trans]
    }
    else {document.getElementById('trans').innerHTML = 'không tìm thấy'}
}

function handleKeydown(evt){
    if (evt.key === 'Enter') {
        trans();
};
}
function init() {inputt.addEventListener('keydown', handleKeydown);}
