function onFocus(event){
    if(!event.target.closest('.navbar-options-num').hasAttribute('isChecked')){
    for(let i = 0;i< 8;i++){
        document.getElementsByClassName("navbar-options-num")[i].setAttribute('isChecked','false')
    }
    }
    if(event.target.closest('.navbar-options-num').getAttribute('isChecked') == 'false'){
    for(let i = 0;i< 8;i++){
        document.getElementsByClassName("navbar-options-num")[i].setAttribute('isChecked','false')
        document.getElementsByClassName("navbar-options-num")[i].style.background = 'white'
        document.getElementsByClassName("navbar-options-num")[i].style.color = 'black'
    }
    event.target.closest('.navbar-options-num').style.background = '#FDEAD7'
    event.target.closest('.navbar-options-num').style.color = '#EF6820'
    event.target.closest('.navbar-options-num').setAttribute('isChecked','true')
}
}

