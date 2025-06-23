let imgObj = null;
imgObj = document.getElementById('myImage');
function init() {
    imgObj.style.position = 'relative';
    imgObj.style.left = '0px';
}
window.onload = init
function moveRight(){
    imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
}
