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


function colorChange(event,color){
    let item = event.target;
    item.style.color = color;
    if(event.target.classList.contains('fa-regular')){
        item.classList.remove('fa-regular')
        item.classList.add('fa-solid');
        item.style.color = '#EF6820'
    }
    else if (event.target.classList.contains('fa-solid')) {
        item.classList.remove('fa-solid')
        item.classList.add('fa-regular');
        item.style.color = 'black'
    }
    if(event.target.getAttribute('src') === '../asset/Radio.png'){
        event.target.setAttribute('src','../asset/Radio2.png')
        event.target.style.width = '20px'
        event.target.style.height = '20px'
        event.target.style.marginLeft = '8px'
    }
    else if ((event.target.getAttribute('src') === '../asset/Radio2.png')) {
        event.target.setAttribute('src','../asset/Radio.png')
        event.target.style.width = '28px'
        event.target.style.height = '28px'
        event.target.style.marginLeft = '0'
    }
}
let contain = document.querySelector('.navbar');
let collapsed = false;
function handleClick(e) {
    if (!contain.contains(e.target)) {
        contain.style.left = '-300px'
        document.removeEventListener('click', handleClick);
    }
}
window.addEventListener('resize',function(){
    collapsed = false;
    if (window.innerWidth > 1400){
        contain.style.left = ''
        contain.style.top = ''
        contain.style.zIndex = ''
        contain.style.background = ' '
        contain.style.borderRadius = ''
        contain.style.height = ''
        contain.style.width = '237px'
    }
    else if (window.innerWidth <= 1200){
        document.querySelector('.toggleDisplay').style.display = 'none'

    }
    else if (window.innerWidth > 1200){
        document.querySelector('.toggleDisplay').style.display = 'flex'
        // contain.style.width = '237px'
    }
} )
function toggleSidebar() {
    let item = document.querySelector('.navbar');
    if (window.innerWidth <  1400 ){
            item.style.left = '0px'
            item.style.top = '10px'
            item.style.zIndex = '999'
            item.style.background = ' white'
            item.style.borderRadius = '8px'
            item.style.height = '100vh'
            item.style.width = '237px'
            document.removeEventListener('click', handleClick)
            setTimeout(()=>{
                document.addEventListener('click', handleClick);
            },10)
        console.log('man hinh tablet')
        return
    }
    item.style.width = '237px'
    item.style.left = '0'
    console.log(collapsed);
    if (!collapsed) {
        item.style.width = '0px';
        item.style.overflow = 'hidden';
        item.style.padding = '8px 0';
    } else {

        item.style.width = '237px';
        item.style.padding = '8px 16px';
    }
    console.log('man hinh desktop');
    collapsed = !collapsed;
}

function hehehe(idd,event){
    let item = document.getElementById(idd);
    let currentColor = getComputedStyle(item).color;
    if(currentColor === 'rgb(157, 164, 174)'){
        item.style.color = '#F04438'
    }
    else if (currentColor === 'rgb(240, 68, 56)') {
        item.style.color = '#9DA4AE'
    }
    console.log(event.target.style.color)
    let currentColor2 = getComputedStyle(event.target).color;
    if (currentColor2 === 'rgb(157, 164, 174)'){
        event.target.style.color = '#F04438'
    }
    else if (currentColor2 === 'rgb(240, 68, 56)') {
        event.target.style.color = '#9DA4AE'
    }
}

// function dislayModify(){
//     let item = document.querySelector('.content-body');
//     let item1 = document.querySelector('.content-body--1');
//     let item2 = document.querySelector('.content-body--2');
//     let item3 = document.querySelector('.content-body--3');
//     item1.style.width = '29.2rem'
//     item2.style.width = '28.3rem'
//     item3.style.flex = '1'
//     setTimeout(() => {
//         item.style.flexDirection = 'row'
//             }
//         , 500)
// }
// function display(){
//     let item = document.querySelector('.content-body');
//     let item1 = document.querySelector('.content-body--1');
//     let item2 = document.querySelector('.content-body--2');
//     let item3 = document.querySelector('.content-body--3');
//     item3.style.width = '15rem'
//     setTimeout(() => {
//             item1.style.width = '100%'
//         }
//         , 100)
//     setTimeout(() => {
//             item2.style.width = '100%'
//         }
//         , 400)
//     setTimeout(() => {
//             item3.style.width = '100%'
//         }
//         , 600)
//     setTimeout(() => {
//             item.style.flexDirection = 'column'
//         }
//         , 300)
// }


function displayMenu() {
    let item = document.querySelector('.content-body');
    let item1 = document.querySelector('.content-body--1');
    let item2 = document.querySelector('.content-body--2');
    let item3 = document.querySelector('.content-body--3');
    let button = document.querySelector('.toggleDisplay');
    let button_left = document.querySelector('.toggle1');
    let button_right = document.querySelector('.toggle2');
    if(button.getAttribute('data-status')=== 'left') {
        button.setAttribute('data-status', 'right');
        button_right.style.borderRadius = '55px';
        button_right.style.background = 'white';
        button_left.style.background = '#E5E7EB';
        //
        item1.style.width = '20rem' //29.2rem
        item2.style.width = '20rem' //28.3rem
        item3.style.flex = '1'
        setTimeout(() => {
                item.style.flexDirection = 'row'
            }
            , 500)
    }
    else {
        button.setAttribute('data-status', 'left');
        button_left.style.borderRadius = '55px';
        button_left.style.background = 'white';
        button_right.style.background = '#E5E7EB';
        //
        item3.style.width = '15rem'
        setTimeout(() => {
                item1.style.width = '100%'
            }
            , 100)
        setTimeout(() => {
                item2.style.width = '100%'
            }
            , 400)
        setTimeout(() => {
                item3.style.width = '100%'
            }
            , 600)
        setTimeout(() => {
                item.style.flexDirection = 'column'
            }
            , 300)
    }
}
