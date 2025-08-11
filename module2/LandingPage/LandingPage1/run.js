let hihi = document.querySelector('.navbar');
let hehe = document.querySelector('.navbar-item');

function run(){
    hehe.style.pointerEvents = 'none';
    setTimeout(() => {
        hehe.style.pointerEvents = 'auto';
    }, 100);
}
