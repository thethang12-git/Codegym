let popup = document.getElementById('popUp')
let button = document.getElementById('button')
let input = document.querySelectorAll('input')
document.addEventListener('click', clickOutSide)
function clickOutSide(event){
    if(button.contains(event.target) == false){
        popup.style.opacity = '0'
        popup.style.visibility ='invisible'
        setTimeout(() => {
    popup.style.display = 'none';
}, 1000);
    }
}

function clickFunc(){

    popup.style.transition = 'opacity 0.5s ease, visibility 0.5s ease'
    
    popup.style.opacity = '1'
    popup.style.visibility ='visible'
    popup.style.display = 'flex'
}