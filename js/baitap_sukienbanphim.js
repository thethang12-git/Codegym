var element = document.getElementById('nobita')
function Moveleft(){
    element.style.left = parseInt(element.style.left) - 10 +  'px';
}
function Moveright(){
    element.style.left = parseInt(element.style.left) + 10 +  'px';
}
function Moveup(){
    element.style.top = parseInt(element.style.top) - 10 +  'px';
}
function Movedown(){
    element.style.top = parseInt(element.style.top) + 10 +  'px';
}
function moveSelection(evt) {
    switch (evt.key) {
        case "ArrowUp":
        Moveup();
        break;
        case "ArrowDown":
        Movedown();
        break;
        case "ArrowLeft":
        Moveleft();
        break;
        case "ArrowRight":
        Moveright();
        break;
    }
}
// lắng nghe sự kiện từ window luôn cho nhanh, trừ khi muốn có điều kiện để nó chạy thì đặt ở trong 1 hàm 
function onLoad(){
    window.addEventListener("keydown", moveSelection)
}
