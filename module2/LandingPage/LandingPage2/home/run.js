let calenNavbarMain = document.querySelector('.popUp-add-options-calendar__navbar')
let calendarMain = document.querySelector('.calendar-display')
let timeMain = document.querySelector('.time-display')
let repeatMain = document.querySelector('.repeat-display')
let tagMain = document.querySelector('.tag-display-options')

function reset(event){
    event.target.value = ''
}

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
        contain.style.zIndex = ''
        contain.style.background = ' '
        contain.style.borderRadius = ''
        contain.style.height = ''
        contain.style.width = '237px'
    }
    else if (window.innerWidth <= 1200){
        document.querySelector('.toggleDisplay').style.display = 'none'
        display()
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
            item.style.zIndex = '999'
            item.style.background = ' white'
            item.style.borderRadius = '8px'
            item.style.height = '100vh'
            item.style.width = '237px'
            document.removeEventListener('click', handleClick)
            setTimeout(()=>{
                document.addEventListener('click', handleClick);
            },10)
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
function display(){
    let item = document.querySelector('.content-body');
    let item1 = document.querySelector('.content-body--1');
    let item2 = document.querySelector('.content-body--2');
    let item3 = document.querySelector('.content-body--3');
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


function addBtn(){
    let popup = document.querySelector('.popUp-add')
    let container = document.querySelector('.container')
    let button = document.querySelector('.add-Btn')
    popup.setAttribute('data-status', 'actived');
    if (popup.getAttribute('data-status') === 'actived'){
        setTimeout( () => {
            document.addEventListener('click', (e)=>{
            if(popup.contains(e.target) === false && popup.getAttribute('data-status') === 'actived' && e.target.closest('.add-Btn') !== button){
                popup.removeAttribute('data-status');
                document.addEventListener('click', handlePopup)
                setTimeout(()=>{document.removeEventListener('click', handlePopup)},10)
                popup.style.opacity = '0'
                popup.style.visibility = 'hidden'
                container.style.filter = 'blur(0)'
            }
            })
            },1000
        )
    }
    popup.style.transform = 'scale(1)';
    popup.style.visibility = 'visible';
    popup.style.opacity = '1';
    container.style.filter = 'blur(3px)';
    setTimeout(() => {
        popup.style.display = 'block';
        document.addEventListener('click', handlePopup);
    }, 10)
}
function addCalendarBtn(event){
    let container = document.querySelector('.options_num-1')
    let item = document.querySelector('.popUp-add-options-calendar__navbar')
    let icon = container.querySelector('i');
    let p = container.querySelector('div p');
    let valid = event.target === event.currentTarget || event.target === icon || event.target === p
    if(valid && item.style.display === 'none'){
        item.style.display = 'block';
        calendarMain.style.display = 'none';
        timeMain.style.display = 'none';
        repeatMain.style.display = 'none';
        tagMain.style.display = 'none';
    }
    else if (event.target.closest('.undo'))
    {
        let undo =document.querySelector('.undo');
        undo.style.display = 'none';
        icon.style.display = 'block';
        p.innerText = ''
    }
    else {
        item.style.display = 'none';
    }
}

function setValue(contain,icon,content,event){
    let iconn = document.querySelector(icon);
    let contentt = document.querySelector(content);
    let undo =document.querySelector('.undo');
    let containn = document.querySelector(contain);
    iconn.style.display = 'none';
    contentt.style.display = 'block';
    contentt.innerText = event.target.textContent;
    undo.style.display = 'block';
    containn.style.background = '#FEFAF5';
    containn.style.borderRadius = '8px';
}

// Calendar
// Chọn ngày để hiển thị ở đây
let choosedDate = ''
let userChoosedMonth = ''
let userChoosedYear = ''
function displayCalen(event) {
    let navbar = document.querySelector('.popUp-add-options-calendar__navbar');
    let popup = document.querySelector('.popUp-add')
    let calendar = document.querySelector('.calendar-display')
    let contentt = document.querySelector('.options_num-1 div:first-of-type>p');
    let value = event.target.closest('td')
    if (calendar.getAttribute('data-status') === 'active' && value !== null ) {
        calendar.style.display = 'none';
        choosedDate = value.innerText
        userChoosedMonth = choosedMonth
        userChoosedYear = choosedYear
        calendar.setAttribute('data-status', 'deactive');
        contentt.innerHTML = `${value.innerText}/${choosedMonth}/${choosedYear}`;
    }
    else if (event.target.contains(calendar) === false) {
        calendar.setAttribute('data-status', 'deactive');
    }
    if (event.target.closest('.undo'))
    {
        let iconn = document.querySelector('.options_num-1 i:first-of-type');
        let undo =document.querySelector('.undo');
        undo.style.display = 'none';
        iconn.style.display = 'block';
        contentt.innerText = ''
        calendar.style.display = 'none';
        calendar.setAttribute('data-status', 'deactive');
    }
}

let thisYear = new Date().getFullYear()
let thisMonth = new Date().getMonth()

function calendarDisplay(event) {
    let contentt = document.querySelector('.options_num-1 div:first-of-type>p');
    let date = document.querySelector('.calendar-date')
    let calendar = document.querySelector('.calendar-display')
    let popup = document.querySelector('.popUp-add')
    if(calendar.getAttribute('data-status') === 'deactive'){
        date.innerText = `Tháng ${choosedMonth} ${choosedYear}`;
        popup.removeEventListener('click', displayCalen);
        calendar.style.display = 'flex'
        calendar.setAttribute('data-status','active')
        setTimeout( () => {
            popup.addEventListener('click',  displayCalen )
        },10)
        createCalendar(thisYear,thisMonth);
        calenNavbarMain.style.display = 'none';
        timeMain.style.display = 'none';
        repeatMain.style.display = 'none';
        tagMain.style.display = 'none';
    }
}
let choosedMonth = thisMonth
let choosedYear = thisYear
function previousMonth (){
    let date = document.querySelector('.calendar-date')
    if (choosedMonth === thisMonth && choosedYear == thisYear){return}
    else if (choosedMonth == 1){choosedYear--; choosedMonth = 13}
    createCalendar(thisYear,choosedMonth-=1);
    date.innerText = `Tháng ${choosedMonth} ${choosedYear}`;
}

function nextMonth(){
    let date = document.querySelector('.calendar-date')
    if (choosedMonth > 11){choosedMonth = 0; choosedYear++;}
    createCalendar(thisYear,choosedMonth+=1);
    date.innerText = `Tháng ${choosedMonth} ${choosedYear}`;
}

// Lấy ngày và add vào mảng
function getDaysInMonth(year, month) {
    let date = new Date(year, month, 0);
    let daysInMonth = date.getDate();
    let daysArray = [];
    for (let day = 1; day <= daysInMonth; day++) {
        daysArray.push(day);
    }
    return daysArray;
}

// Từ mảng -> tạo bảng và add giá trị vào HTML
function createCalendar(year, month) {
    let calendar = document.querySelector('.calendar_table')
    calendar.innerHTML = '<tr><th>T2</th><th>T3</th><th>T4</th><th>T5</th><th>T6</th><th>T7</th><th>CN</th></tr>'
    let table = ''
    let currentMonth = getDaysInMonth(year,month)
    for (let i = 0; i < 35; i++) {
        if (currentMonth[i] === undefined) {continue}
        if (currentMonth[i] == choosedDate && userChoosedMonth == choosedMonth && userChoosedYear == choosedYear) {table += '<td style="background: #EF6820;color: white">' + currentMonth[i] + '</td>'; continue}
        if(i === 0) {
            table += '<tr>'
            table += '<td>' + currentMonth[i] + '</td>';
            continue
        }
        if(i % 7 === 0 && i % 2 ===0){
            table += '</tr>'

            table += '<tr>';
        }
        else if ( i % 7 === 0 && i % 2 !== 0){
            table += '</tr>';
            table += '<tr>';
        }
        table += '<td>' + currentMonth[i] + '</td>';
    }
    calendar.innerHTML += table;
}

let toggleTime = false
function timeDisplay(event){
    let calendar = document.querySelector('.calendar-display')
    let popup = document.querySelector('.popUp-add')
    let contain = document.querySelector('.options_num-2');
    let undo = document.querySelector('.options_num-2 .undo2');
    let icon = document.querySelector('.options_num-2 i:first-of-type')
    let content = document.querySelector('.time-display');
    let hour = document.querySelector('.time-display_hour').value;
    let minute = document.querySelector('.time-display_minute').value;
    let display = document.querySelector('.options_num-2 div:first-of-type>p')
    let p = contain.querySelector('div');
    let valid = event.target === contain || event.target === icon || event.target === p
    if(content.style.display === 'none' ){
        content.style.display = 'flex'
        calendarMain.style.display = 'none'
        calenNavbarMain.style.display = 'none';
        repeatMain.style.display = 'none';
        tagMain.style.display = 'none';
    }
    else if (valid && content.style.display === 'flex') {content.style.display = 'none'}
    else if (hour != '--' && minute != '--') {
        if (content.contains(event.target) && toggleTime) {
            content.style.display = 'flex';
            toggleTime = false;
            return
        }
        toggleTime = true
        display.style.display = 'block'
        icon.style.display = 'none'
        display.innerHTML = `${hour}:${minute}`;
        content.style.display = 'none'
        undo.style.display = 'block'
        contain.style.background = '#FEFAF5'
    }
    if (undo.contains(event.target)){
        content.style.display = 'none'
        contain.style.background = 'white'
        document.querySelector('.time-display_hour').value = '--'
        document.querySelector('.time-display_minute').value = '--'
        display.innerHTML = ``;
        icon.style.display = 'block'
        undo.style.display = 'none'
    }
}
// repeat Displaying
function repeatCounter() {
    let contain = document.querySelector('.options_num-3')
    let container = document.querySelector('.repeatCounter-container')
    let img = container.querySelector('img')
    if(contain.querySelector('.repeatCounter').value <= 0 || contain.querySelector('.repeatCounter').value >= 100 || contain.querySelector('.repeatCounter').value == '') {
        contain.querySelector('.repeatCounter').value = ''
        img.setAttribute('src','../asset/Radio.png')
        img.style.width = '28px'
        img.style.height = '28px'
        img.style.marginLeft = '0'
        return }

        img.setAttribute('src','../asset/Radio2.png')
        img.style.width = '20px'
        img.style.height = '20px'
        img.style.marginLeft = '8px'
}
function repeatDisplay(event) {
    let content = document.querySelector('.repeat-display')
    let contain = document.querySelector('.options_num-3')
    let icon = contain.querySelector('.fa-repeat')
    if(content.style.display === 'none') {
        content.style.display = 'flex'
        timeMain.style.display = 'none'
        calendarMain.style.display = 'none'
        calenNavbarMain.style.display = 'none';
        tagMain.style.display = 'none';
    }
    else if (event.target === event.currentTarget || event.target.closest('.fa-repeat') === icon ){
        content.style.display = 'none'
    }
    else if (content.style.display === 'flex' && event.target === contain.querySelector('.repeatCounter') ) {
        contain.querySelector('.repeatCounter').addEventListener('input', repeatCounter);
    }
}

function repeatNav1(event){
    let container = document.querySelector('.options_num-3')
    let icon = container.querySelector('i')
    let content = document.querySelector('.repeat-display_navbar-1')
    let contain = document.querySelector('.repeat-display_navbar')
    let isValid = event.target === event.currentTarget || event.target === contain.querySelector('p') ||event.target == contain.querySelector('i')
    if (isValid && content.style.display == 'none') {
        content.style.display = 'flex'
    }
    else if (isValid && content.style.display == 'flex') {
        content.style.display = 'none'
    }

    else if (content.style.display == 'flex') {
        let target = event.target.closest('p');
        contain.querySelector('p').innerText = target.innerText
        content.style.display = 'none'
        if (target.innerText != 'Không lặp lại ') {
            container.style.background = '#FEFAF5'
            icon.style.color = '#EF6820'
            return
        }
        container.style.background = 'white'
        icon.style.color = 'black'
    }
}

function focusChange (item) {
    let contain = document.querySelector('.options_num-3')
    contain.querySelector(item).value = ''
    contain.querySelector(item).focus()
    contain.querySelector('.repeatCounter').addEventListener('input', repeatCounter);
    contain.querySelector('.repeatCounter').addEventListener('focusout', repeatCounter);
}

function calendarModify (event,valid) {
    let contain = document.querySelector('.repeat-calendarModify')
    let img = contain.querySelector('img')
    if (valid) {
        for (let i = 1; i < 4; i++) {
            let item = contain.querySelector(`.repeat-calendar-num-${i}`);
            if (!item.value) {
                item.value = ''
                img.setAttribute('src','../asset/Radio.png')
                img.style.width = '28px'
                img.style.height = '28px'
                img.style.marginLeft = '0'
                return}
        }
        img.setAttribute('src','../asset/Radio2.png')
        img.style.width = '20px'
        img.style.height = '20px'
        img.style.marginLeft = '8px'
    }
    else {
        if(event.target.getAttribute('max') === '9999') {
            if(event.target.value > 0) {
                event.target.addEventListener('focusout', () => {
                    if (event.target.value < 2000) {
                        event.target.value = '';
                        img.setAttribute('src','../asset/Radio.png')
                        img.style.width = '28px'
                        img.style.height = '28px'
                        img.style.marginLeft = '0'}
                    else if(event.target.value > 9999) {
                        event.target.value = '';
                        img.setAttribute('src','../asset/Radio.png')
                        img.style.width = '28px'
                        img.style.height = '28px'
                        img.style.marginLeft = '0'}
                })
            }
            return
        }
        event.target.value = ''
        img.setAttribute('src','../asset/Radio.png')
        img.style.width = '28px'
        img.style.height = '28px'
        img.style.marginLeft = '0'
    }
}
function counter (event){
    let number = +event.target.className.match(/\d+/g)[0]
    let contain = document.querySelector('.repeat-calendarModify')
        if (event.target.closest('input').value.length === 2) {
            contain.querySelector(`.repeat-calendar-num-${number+1}`).value = ''
            contain.querySelector(`.repeat-calendar-num-${number+1}`).focus()
    }
}
function counter2 (event,valid){
    let number = +event.target.className.match(/\d+/g)[0]
    let contain = document.querySelector('.repeat-calendarModify')
    if (event.target.closest('input').value.length === 4 ) {
        if (valid) {contain.querySelector(`.repeat-calendar-num-${number}`).blur()}
        else {
            contain.querySelector(`.repeat-calendar-num-${number}`).value = ''
            contain.querySelector(`.repeat-calendar-num-${number}`).focus()
        }
    }
}
let tempData = []
function tagDisplay(event) {
    let container = document.querySelector('.options_num-4')
    let contain = container.querySelector('.tag-display-options')
    let icon = container.querySelector('i')
    let content = container.querySelector('p')
    let valid = event.target === event.currentTarget || event.target === icon || event.target === content
    if(valid && contain.style.display == 'none') {
        contain.style.display = 'flex'
        timeMain.style.display = 'none'
        calendarMain.style.display = 'none'
        calenNavbarMain.style.display = 'none';
        repeatMain.style.display = 'none'
    }
    else if (valid && contain.style.display == 'flex') {
        contain.style.display = 'none'
    }
    else if (event.target.closest('p')) {
        content.style.display = 'block'
        icon.style.display = 'none'
        if (event.target.closest('p').getAttribute('data-isChoosed') === 'false') {
            tempData.push(event.target.closest('p').innerText)
            content.innerHTML = tempData.join(',')
            event.target.closest('p').setAttribute('data-isChoosed', 'true')
            content.style.color = '#EF6820'
            event.target.closest('p').style.background = '#FEFAF5'
            event.target.closest('p').style.color = '#EF6820'
            container.style.background = '#FEFAF5'
        }
        else if (event.target.closest('p').getAttribute('data-isChoosed') === 'true') {
            tempData = tempData.filter(item => item != event.target.closest('p').innerText) 
            content.innerHTML = tempData.join(',')
            event.target.closest('p').setAttribute('data-isChoosed', 'false')
            event.target.closest('p').style.background = 'white'
            if(tempData.length == 0){
                icon.style.display = 'block';
                content.style.display = 'none'
                container.style.background = 'white'
            }
            event.target.closest('p').style.color = 'black'
        }
    }
}

function tagAdd (status){
    let plus = document.querySelector('.tag-display-add span')
    setTimeout(() => {
        if(status === 'true') {
        plus.style.display = 'block'
    }
    else {
        plus.style.display = 'none'
    }
    }, 100);
}

function tagAddHandle(){
    let container = document.querySelector('.tag-display-options')
    let contain = document.querySelector('.tag-display-add')
    let input = contain.querySelector('input')
// Xử lý thêm 1 thẻ mới vào giữa những thẻ có sẵn    
    let newTag =  document.createElement('p');
    newTag.setAttribute('data-isChoosed', 'false')
    newTag.textContent = input.value
    newTag.setAttribute('style',"border-radius: 8px;padding: 8px;display: flex;flex-direction: row;justify-content: space-between;" )
    container.insertBefore(newTag, contain);
    input.value = ''
}

function handlePopup(e) {
    let invalid = !e.target.closest('.options_num-1') && !e.target.closest('.options_num-2') && !e.target.closest('.options_num-3') && !e.target.closest('.options_num-4')
    if(invalid) {
        calenNavbarMain.style.display = 'none'
        calendarMain.style.display = 'none'
        timeMain.style.display = 'none'
        repeatMain.style.display = 'none'
        tagMain.style.display = 'none'
    }
}





