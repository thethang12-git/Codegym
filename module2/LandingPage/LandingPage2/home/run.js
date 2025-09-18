let calenNavbarMain = document.querySelector('.popUp-add-options-calendar__navbar')
let calendarMain = document.querySelector('.calendar-display')
let timeMain = document.querySelector('.time-display')
let repeatMain = document.querySelector('.repeat-display')
let tagMain = document.querySelector('.tag-display-options')
let groupsChoosing = document.querySelector('.groups-choose-navbar')
function reset(event) {
    event.target.value = ''
}

function onFocus(event) {
    if (!event.target.closest('.navbar-options-num').hasAttribute('isChecked')) {
        for (let i = 0; i < 8; i++) {
            document.getElementsByClassName("navbar-options-num")[i].setAttribute('isChecked', 'false')
        }
    }
    if (event.target.closest('.navbar-options-num').getAttribute('isChecked') === 'false') {
        for (let i = 0; i < 8; i++) {
            document.getElementsByClassName("navbar-options-num")[i].setAttribute('isChecked', 'false')
            document.getElementsByClassName("navbar-options-num")[i].style.background = 'white'
            document.getElementsByClassName("navbar-options-num")[i].style.color = 'black'
        }
        event.target.closest('.navbar-options-num').style.background = '#FDEAD7'
        event.target.closest('.navbar-options-num').style.color = '#EF6820'
        event.target.closest('.navbar-options-num').setAttribute('isChecked', 'true')
    }
}

function colorChange(event,array) {
    let item = event.target;
    let container = item.closest('.parent')
    let getClassName = container.querySelector('.parent-options').className
    let getID = parseInt(getClassName.match(/\d+/g).toString())
    array.forEach(item => item.content.forEach((itm) => {
        if(itm.id == getID){
            itm.star = !itm.star
        }
    } ))
    if (event.target.classList.contains('fa-regular')) {
        item.classList.remove('fa-regular')
        item.classList.add('fa-solid');
        item.style.color = '#EF6820'
    } else if (event.target.classList.contains('fa-solid')) {
        item.classList.remove('fa-solid')
        item.classList.add('fa-regular');
        item.style.color = 'black'
    }
}
function colorToFinish(event,array){
    let container = event.target.closest('.parent')
    let getClass = container.querySelector('.parent-options').className
    let getID = parseInt(getClass.match(/\d+/g).toString())
    array.forEach(item => item.content.forEach((itm) => {
        if(itm.id == getID){
            itm.choosing = !itm.choosing
        }
    } ))
    if (event.target.getAttribute('src') === '../asset/Radio.png') {
        event.target.setAttribute('src', '../asset/Radio2.png')
        event.target.style.width = '20px'
        event.target.style.height = '20px'
        event.target.style.marginLeft = '8px'
    } else if ((event.target.getAttribute('src') === '../asset/Radio2.png')) {
        event.target.setAttribute('src', '../asset/Radio.png')
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

window.addEventListener('resize', function () {
    collapsed = false;
    let button = document.querySelector('.toggleDisplay');
    let button_left = document.querySelector('.toggle1');
    let button_right = document.querySelector('.toggle2');
    if (window.innerWidth > 1400) {
        contain.style.left = ''
        contain.style.zIndex = ''
        contain.style.background = ' '
        contain.style.borderRadius = ''
        contain.style.height = ''
        contain.style.width = '237px'
    } else if (window.innerWidth <= 1200) {
        document.querySelector('.toggleDisplay').style.display = 'none'
        button.setAttribute('data-status', 'left');
        button_left.style.borderRadius = '55px';
        button_left.style.background = 'white';
        button_right.style.background = '#E5E7EB';
        display()
    } else if (window.innerWidth > 1200) {
        document.querySelector('.toggleDisplay').style.display = 'flex'
        // contain.style.width = '237px'
        // display()
    }
})

function toggleSidebar() {
    let item = document.querySelector('.navbar');
    if (window.innerWidth < 1400) {
        item.style.left = '0px'
        item.style.zIndex = '999'
        item.style.background = ' white'
        item.style.borderRadius = '8px'
        item.style.height = '100vh'
        item.style.width = '237px'
        document.removeEventListener('click', handleClick)
        setTimeout(() => {
            document.addEventListener('click', handleClick);
        }, 10)
        return
    }
    item.style.width = '237px'
    item.style.left = '0'
    // console.log(collapsed);
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

function repeatToggle(event,array) {
    let container = event.target.closest('.parent')
    let getClass = container.querySelector('.parent-options').className
    let getID = parseInt(getClass.match(/\d+/g).toString())
    let item = array.flatMap(item => item.content).find(itm => itm.id == getID)
    let div = event.target.closest('div');
    let calendar = div.querySelector('.fa-calendar');
    if(!item.repeat) {
        calendar.style.color = '#F04438'
        event.target.style.color = '#F04438'
    }
    else {
        calendar.style.color = '#9DA4AE'
        event.target.style.color = '#9DA4AE'
    }
    array.forEach(item => item.content.forEach((itm) => {
        if(itm.id == getID){
            itm.repeat = !itm.repeat
        }
    } ))
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
function display() {
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
        document.querySelectorAll('#content > div').forEach(div => div.style.width = '100%')
        }
        , 800)
    setTimeout(() => {
            item.style.flexDirection = 'collumn'
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
    if (button.getAttribute('data-status') === 'left') {
        item.style.flexWrap = 'wrap'
        button.setAttribute('data-status', 'right');
        button_right.style.borderRadius = '55px';
        button_right.style.background = 'white';
        button_left.style.background = '#E5E7EB';
        //
        document.querySelectorAll('#content > div').forEach(div => div.style.width = '30%')
        // item1.style.width = '30%' //29.2rem
        // item2.style.width = '30%' //28.3rem
        // item3.style.width = '30%'
        setTimeout(() => {
                item.style.flexDirection = 'row'
            }
            , 800)
    } else {
        button.setAttribute('data-status', 'left');
        button_left.style.borderRadius = '55px';
        button_left.style.background = 'white';
        button_right.style.background = '#E5E7EB';
        //
        item.style.flexWrap = 'nowrap'
        if(item3){
            item3.style.width = '15rem'
        }
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
                document.querySelectorAll('#content > div').forEach(div => div.style.width = '100%')
                item.style.flexDirection = 'column'
            }
            , 300)
    }
}


function addBtn() {
    let popup = document.querySelector('.popUp-add')
    let container = document.querySelector('.container')
    let button = document.querySelector('.add-Btn')
    popup.setAttribute('data-status', 'actived');
    if (popup.getAttribute('data-status') === 'actived') {
        setTimeout(() => {
                document.addEventListener('click', (e) => {
                    if (popup.contains(e.target) === false && popup.getAttribute('data-status') === 'actived' && e.target.closest('.add-Btn') !== button) {
                        popup.removeAttribute('data-status');
                        document.addEventListener('click', handlePopup)
                        setTimeout(() => {
                            document.removeEventListener('click', handlePopup)
                        }, 10)
                        popup.style.opacity = '0'
                        popup.style.visibility = 'hidden'
                        container.style.filter = 'blur(0)'
                    }
                })
            }, 1000
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

function addCalendarBtn(event) {
    let container = document.querySelector('.options_num-1')
    let item = document.querySelector('.popUp-add-options-calendar__navbar')
    let icon = container.querySelector('i');
    let p = container.querySelector('div p');
    let valid = event.target === event.currentTarget || event.target === icon || event.target === p
    if (valid && item.style.display === 'none') {
        item.style.display = 'block';
        calendarMain.style.display = 'none';
        timeMain.style.display = 'none';
        repeatMain.style.display = 'none';
        tagMain.style.display = 'none';
    } else if (event.target.closest('.undo')) {
        let undo = document.querySelector('.undo');
        undo.style.display = 'none';
        icon.style.display = 'block';
        p.innerText = ''
    } else {
        item.style.display = 'none';
    }
}

function setValue(contain, icon, content, event) {
    let iconn = document.querySelector(icon);
    let contentt = document.querySelector(content);
    let undo = document.querySelector('.undo');
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
    let calendar = document.querySelector('.calendar-display')
    let contentt = document.querySelector('.options_num-1 div:first-of-type>p');
    let value = event.target.closest('td')
    if (calendar.getAttribute('data-status') === 'active' && value !== null) {
        calendar.style.display = 'none';
        choosedDate = value.innerText
        userChoosedMonth = choosedMonth
        userChoosedYear = choosedYear
        calendar.setAttribute('data-status', 'deactive');
        contentt.innerHTML = `${value.innerText}/${choosedMonth}/${choosedYear}`;
    } 
    if (event.target.closest('.undo')) {
        let iconn = document.querySelector('.options_num-1 i:first-of-type');
        let undo = document.querySelector('.undo');
        undo.style.display = 'none';
        iconn.style.display = 'block';
        contentt.innerText = ''
        calendar.style.display = 'none';
        calendar.setAttribute('data-status', 'deactive');
    }
    if (calendar.style.display == 'none') {
        calendar.setAttribute('data-status', 'deactive');
    }
}

let thisYear = new Date().getFullYear()
let thisMonth = new Date().getMonth()

function calendarDisplay() {
    // let contentt = document.querySelector('.options_num-1 div:first-of-type>p');
    let date = document.querySelector('.calendar-date')
    let calendar = document.querySelector('.calendar-display')
    let popup = document.querySelector('.popUp-add')
    if (calendar.getAttribute('data-status') === 'deactive') {
        date.innerText = `Tháng ${choosedMonth} ${choosedYear}`;
        popup.removeEventListener('click', displayCalen);
        calendar.style.display = 'flex'
        calendar.setAttribute('data-status', 'active')
        setTimeout(() => {
            popup.addEventListener('click', displayCalen)
        }, 10)
        createCalendar(thisYear, thisMonth);
        calenNavbarMain.style.display = 'none';
        timeMain.style.display = 'none';
        repeatMain.style.display = 'none';
        tagMain.style.display = 'none';
    }
}

let choosedMonth = thisMonth
let choosedYear = thisYear

function previousMonth() {
    let date = document.querySelector('.calendar-date')
    if (choosedMonth === thisMonth && choosedYear === thisYear) {
        return
    } else if (choosedMonth === 1) {
        choosedYear--;
        choosedMonth = 13
    }
    createCalendar(thisYear, choosedMonth -= 1);
    date.innerText = `Tháng ${choosedMonth} ${choosedYear}`;
}

function nextMonth() {
    let date = document.querySelector('.calendar-date')
    if (choosedMonth > 11) {
        choosedMonth = 0;
        choosedYear++;
    }
    createCalendar(thisYear, choosedMonth += 1);
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
    let currentMonth = getDaysInMonth(year, month)
    for (let i = 0; i < 35; i++) {
        if (currentMonth[i] == undefined) {
            continue
        }
        if (currentMonth[i] == choosedDate && userChoosedMonth == choosedMonth && userChoosedYear == choosedYear) {
            table += '<td style="background: #EF6820;color: white">' + currentMonth[i] + '</td>';
            continue
        }
        if (i === 0) {
            table += '<tr>'
            table += '<td>' + currentMonth[i] + '</td>';
            continue
        }
        if (i % 7 == 0 && i % 2 == 0) {
            table += '</tr>'

            table += '<tr>';
        } else if (i % 7 == 0 && i % 2 != 0) {
            table += '</tr>';
            table += '<tr>';
        }
        table += '<td>' + currentMonth[i] + '</td>';
    }
    calendar.innerHTML += table;
}

let toggleTime = false

function timeDisplay(event) {
    let contain = document.querySelector('.options_num-2');
    let undo = document.querySelector('.options_num-2 .undo2');
    let icon = document.querySelector('.options_num-2 i:first-of-type')
    let content = document.querySelector('.time-display');
    let hour = document.querySelector('.time-display_hour').value;
    let minute = document.querySelector('.time-display_minute').value;
    let display = document.querySelector('.options_num-2 div:first-of-type>p')
    let p = contain.querySelector('p');
    let valid = event.target === contain || event.target === icon || event.target === p
    if (content.style.display === 'none' && valid) {
        content.style.display = 'flex'
        calenNavbarMain.style.display = 'none';
        repeatMain.style.display = 'none';
        tagMain.style.display = 'none';
        calendarMain.style.display = 'none'
    } 
    else if (valid && content.style.display === 'flex') {
        content.style.display = 'none'
    } 
    else if (hour !== '--' && minute !== '--') {
        if (content.contains(event.target) && toggleTime ) {
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
    if (undo.contains(event.target)) {
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
    if (contain.querySelector('.repeatCounter').value <= 0 || contain.querySelector('.repeatCounter').value >= 100 || contain.querySelector('.repeatCounter').value === '') {
        contain.querySelector('.repeatCounter').value = ''
        img.setAttribute('src', '../asset/Radio.png')
        img.style.width = '28px'
        img.style.height = '28px'
        img.style.marginLeft = '0'
        return
    }
    img.setAttribute('src', '../asset/Radio2.png')
    img.style.width = '20px'
    img.style.height = '20px'
    img.style.marginLeft = '8px'
}

function repeatDisplay(event) {
    let content = document.querySelector('.repeat-display')
    let contain = document.querySelector('.options_num-3')
    let icon = contain.querySelector('.fa-repeat')
    if (content.style.display === 'none') {
        content.style.display = 'flex'
        timeMain.style.display = 'none'
        calendarMain.style.display = 'none'
        calenNavbarMain.style.display = 'none';
        tagMain.style.display = 'none';
    } else if (event.target === event.currentTarget || event.target.closest('.fa-repeat') === icon) {
        content.style.display = 'none'
    } else if (content.style.display === 'flex' && event.target === contain.querySelector('.repeatCounter')) {
        contain.querySelector('.repeatCounter').addEventListener('input', repeatCounter);
    }
}

function repeatNav1(event) {
    let container = document.querySelector('.options_num-3')
    let icon = container.querySelector('i')
    let content = document.querySelector('.repeat-display_navbar-1')
    let contain = document.querySelector('.repeat-display_navbar')
    let isValid = event.target === event.currentTarget || event.target === contain.querySelector('p') || event.target === contain.querySelector('i')
    if (isValid && content.style.display === 'none') {
        content.style.display = 'flex'
    } else if (isValid && content.style.display === 'flex') {
        content.style.display = 'none'
    } else if (content.style.display === 'flex') {
        let target = event.target.closest('p');
        contain.querySelector('p').innerText = target.innerText
        content.style.display = 'none'
        if (target.innerText !== 'Không lặp lại ') {
            container.style.background = '#FEFAF5'
            icon.style.color = '#EF6820'
            return
        }
        container.style.background = 'white'
        icon.style.color = 'black'
    }
}

function focusChange(item) {
    let contain = document.querySelector('.options_num-3')
    contain.querySelector(item).value = ''
    contain.querySelector(item).focus()
    contain.querySelector('.repeatCounter').addEventListener('input', repeatCounter);
    contain.querySelector('.repeatCounter').addEventListener('focusout', repeatCounter);
}

function calendarModify(event, valid) {
    let contain = document.querySelector('.repeat-calendarModify')
    let img = contain.querySelector('img')
    if (valid) {
        for (let i = 1; i < 4; i++) {
            let item = contain.querySelector(`.repeat-calendar-num-${i}`);
            if (!item.value) {
                item.value = ''
                img.setAttribute('src', '../asset/Radio.png')
                img.style.width = '28px'
                img.style.height = '28px'
                img.style.marginLeft = '0'
                return
            }
        }
        img.setAttribute('src', '../asset/Radio2.png')
        img.style.width = '20px'
        img.style.height = '20px'
        img.style.marginLeft = '8px'
    } else {
        if (event.target.getAttribute('max') === '9999') {
            if (event.target.value > 0) {
                event.target.addEventListener('focusout', () => {
                    if (event.target.value < 2000) {
                        event.target.value = '';
                        img.setAttribute('src', '../asset/Radio.png')
                        img.style.width = '28px'
                        img.style.height = '28px'
                        img.style.marginLeft = '0'
                    } else if (event.target.value > 9999) {
                        event.target.value = '';
                        img.setAttribute('src', '../asset/Radio.png')
                        img.style.width = '28px'
                        img.style.height = '28px'
                        img.style.marginLeft = '0'
                    }
                })
            }
            return
        }
        event.target.value = ''
        img.setAttribute('src', '../asset/Radio.png')
        img.style.width = '28px'
        img.style.height = '28px'
        img.style.marginLeft = '0'
    }
}

function counter(event) {
    let number = +event.target.className.match(/\d+/g)[0]
    let contain = document.querySelector('.repeat-calendarModify')
    if (event.target.closest('input').value.length === 2) {
        contain.querySelector(`.repeat-calendar-num-${number + 1}`).value = ''
        contain.querySelector(`.repeat-calendar-num-${number + 1}`).focus()
    }
}

function counter2(event, valid) {
    let number = +event.target.className.match(/\d+/g)[0]
    let contain = document.querySelector('.repeat-calendarModify')
    if (event.target.closest('input').value.length === 4) {
        if (valid) {
            contain.querySelector(`.repeat-calendar-num-${number}`).blur()
        } else {
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
    if (valid && contain.style.display === 'none') {
        contain.style.display = 'flex'
        timeMain.style.display = 'none'
        calendarMain.style.display = 'none'
        calenNavbarMain.style.display = 'none';
        repeatMain.style.display = 'none'
    } else if (valid && contain.style.display === 'flex') {
        contain.style.display = 'none'
    } else if (event.target.closest('p')) {
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
        } else if (event.target.closest('p').getAttribute('data-isChoosed') === 'true') {
            tempData = tempData.filter(item => item !== event.target.closest('p').innerText)
            content.innerHTML = tempData.join(',')
            event.target.closest('p').setAttribute('data-isChoosed', 'false')
            event.target.closest('p').style.background = 'white'
            if (tempData.length === 0) {
                icon.style.display = 'block';
                content.style.display = 'none'
                container.style.background = 'white'
            }
            event.target.closest('p').style.color = 'black'
        }
    }
}

function tagAdd(status) {
    let plus = document.querySelector('.tag-display-add span')
    setTimeout(() => {
        if (status === 'true') {
            plus.style.display = 'block'
        } else {
            plus.style.display = 'none'
        }
    }, 100);
}

function tagAddHandle() {
    let container = document.querySelector('.tag-display-options')
    let contain = document.querySelector('.tag-display-add')
    let input = contain.querySelector('input')
// Xử lý thêm 1 thẻ mới vào giữa những thẻ có sẵn    
    let newTag = document.createElement('p');
    newTag.setAttribute('data-isChoosed', 'false')
    newTag.textContent = input.value
    newTag.setAttribute('style', "border-radius: 8px;padding: 8px;display: flex;flex-direction: row;justify-content: space-between;")
    container.insertBefore(newTag, contain);
    input.value = ''
}

function handlePopup(e) {
    let invalid = !e.target.closest('.options_num-1') && !e.target.closest('.options_num-2') && !e.target.closest('.options_num-3') && !e.target.closest('.options_num-4') && !e.target.closest('.groups-choose>div')
    if (invalid) {
        calenNavbarMain.style.display = 'none'
        calendarMain.style.display = 'none'
        timeMain.style.display = 'none'
        repeatMain.style.display = 'none'
        tagMain.style.display = 'none'
        groupsChoosing.style.display = 'none'
    }
}

// xử lý load nội dung khi ấn vào các mục ở side-bar

function loadContent(url,contentt) {
    let content = document.getElementById('content')
    content.classList.add('fade-out');
    setTimeout(() => {
        fetch(url)
            .then(res => res.text())
            .then(html => {
                content.innerHTML = html;
                if(window[contentt]){
                    content.innerHTML = window[contentt]()
                }
            })
            .catch(err => {
                console.error("Lỗi:", err);
            })
        content.classList.remove('fade-out');
    }, 500)
}

// Click vào để chỉnh sửa thẻ
function clickToModify(element, event, isallow ,dupDel,array) {
    if (isallow) {
        let icon = element.querySelector('i')
        let tab = document.createElement('i')
        let container = icon.closest('.parent')
        let getClassName = container.querySelector('.parent-options').className
        let getID = parseInt(getClassName.match(/\d+/g).toString())
        let chooseItem =  array.flatMap((item) => item.content).find((itm) => itm.id == getID)
        if(element.style.background === 'rgb(254, 246, 238)') {
            tab.className = (chooseItem.star ? 'fa-solid' : 'fa-regular') + ' fa-star tab-transition';
            tab.style.color = chooseItem.star ? '#EF6820' : 'black'
            tab.style.opacity = '0'
            tab.onclick = function (event) {
            colorChange(event, array)
            stopPropa(event)
}
            setTimeout(() => {tab.classList.remove('tab-transition');tab.style.opacity = '1';tab.style.transform = 'translateY(0)';},100)
            icon.replaceWith(tab)
            element.style.background = 'white'
        }
        else  {
            tab.classList.add('fa-solid','fa-ellipsis','tab-transition')
            setTimeout(() => {tab.classList.remove('tab-transition');tab.style.opacity = '1';tab.style.transform = 'translateY(0)';},100)
            tab.setAttribute('onclick', `dupDelFunc('${dupDel}');stopPropa(event)`)
            icon.replaceWith(tab)
            // element.style.background = 'rgb(254, 250, 245)'
            element.style.background = 'rgb(254, 246, 238)'
        }
    }
}

// function littleDisable(parent,dupDel) {
//     parent.setAttribute('onclick',`clickToModify(this,event,true,'${dupDel}')`)
// }

// function disable(element,dupDel) {
//     let parent = element.closest('.parent')
//     parent.setAttribute('onclick','clickToModify(this,event,false)')
//     document.addEventListener('click',() => littleDisable(parent,dupDel), { once: true });
// }

function dupDelFunc (item) {
    let element = document.querySelector(item)
    if(element.style.display === 'none') {
        element.classList.add('scaleUp');
        element.style.display = 'flex';
        setTimeout(() => {element.classList.remove('scaleUp');element.style.scale = '1';element.style.opacity = '1';}, 200)
    }
    else if (element.style.display === 'flex' ) {
        element.style.scale = '0';
        element.style.opacity = '0';
        setTimeout(() => {element.style.display = 'none'}, 200)
        return
    }
    setTimeout(() => {document.addEventListener('click', (e) =>
            {
                if(!element.contains(e.target)) {
                    element.style.scale = '0';
                    element.style.opacity = '0';
                    setTimeout(() => {element.style.display = 'none'}, 200)
                }
                else {

                }
            },
        {once: true}
        );
        // xử lý truowngf hợp người dùng vẫn click ở trong element
            element.addEventListener('click', (e) => {
            e.stopPropagation();
            });
        },
        500
    )
}

function stopPropa(event){
    event.stopPropagation()
}
// phần chọn group ở 'thêm mới'
function groupChoose(event) {
    let container = document.querySelector('.groups-choose')
    let content = container.querySelector('.groups-choose-navbar')
    let valid = event.target.closest('.groups-choose>div') === container.querySelector('div')
    if(content.style.display === 'none' && valid ) {
        content.style.display = 'flex'
        calenNavbarMain.style.display = 'none'
        calendarMain.style.display = 'none'
        timeMain.style.display = 'none'
        repeatMain.style.display = 'none'
        tagMain.style.display = 'none'
    }
    else if( valid && content.style.display === 'flex') {
        content.style.display = 'none'
    }
}
function focusOnGroups(status){
    let container = document.querySelector(`.groups-choose-navbar-addGroup`)
    let icon = container.querySelector('span')
    setTimeout(() => {
    if(status === 'true') {
        icon.style.display = 'none'
    }
    else {
        icon.style.display = 'block'
    }
},100)
}

function addGroups(){
    let container = document.querySelector(`.groups-choose-navbar`)
    let contain = container.querySelector('.groups-choose-navbar-addGroup')
    let input = container.querySelector('input')
    let newTag = document.createElement('p');
    newTag.setAttribute('data-isChoosed', 'false')
    newTag.innerHTML = input.value + '<span ><i class="fa-solid fa-check"></i></span>'
    newTag.setAttribute('style', "border-radius: 8px;padding: 8px;display: flex;flex-direction: row;justify-content: space-between;")
    container.insertBefore(newTag, contain);
    newTag.setAttribute('onclick',`choosedGroup(this)`)
    input.value = ''
}

function choosedGroup(itemed){
    let div = document.querySelector('.groups-choose div')
    let content = document.querySelector('.groups-choose div p')
    let container = document.querySelector('.groups-choose-navbar')
    let array =  [...container.querySelectorAll('.groups-choose-navbar p')];
    let itemStatus = itemed.getAttribute('data-isChoosed')
    if(itemStatus === 'false') {
        for(let i = 0; i< array.length;i++){
            array[i].style.background = 'white'
            array[i].style.color = '#4D5761'
            array[i].setAttribute('data-isChoosed','false')
            array[i].querySelector('span').style.display = 'none'
            addHover(array[i])
        }
        itemed.style.color = '#EF6820'
        itemed.style.background = '#FEFAF5'
        itemed.setAttribute('data-isChoosed','true')
        itemed.querySelector('span').style.display = 'block'
        content.innerText = itemed.innerText
    }
    else if (itemStatus === 'true') {
        itemed.style.color = '#4D5761'
        itemed.style.background = 'white'
        itemed.setAttribute('data-isChoosed','false')
        itemed.querySelector('span').style.display = 'block'
        content.innerText = 'Không chọn'
    }
    if(div.innerText === 'Không chọn') {
        div.style.background = 'white'
        div.style.color = '#4D5761'
    }
    else {
        div.style.background = '#FEFAF5'
        div.style.color = '#EF6820'
    }
}

function addHover(element){
    let span = element.querySelector('span')
    element.addEventListener('mouseover', function() {
    if(element.getAttribute('data-isChoosed') === 'false') 
        {
            element.style.background = '#FEFAF5'
            element.style.color = '#EF6820'
            span.style.display = 'block'
        }
    
});

element.addEventListener('mouseout', function() {
    if(element.getAttribute('data-isChoosed') === 'false') 
        {
            element.style.background = 'white'
            element.style.color = '#4D5761'
            span.style.display = 'none'
        }
});
}
// Phần note: ghi chú

function hideOption(item) {
    item._hideTimer = setTimeout(() => {item.style.display = 'none'},500)
}

function showOption(container) {
    let element = container.querySelector('div')
    if (container._hideFunc) {
        container.removeEventListener('mouseleave', container._hideFunc);
    }
    if (element._hideTimer){
        clearTimeout(element._hideTimer)
    }
    // hideFunc = () => hideOption(element)
    container.addEventListener('mouseleave',container._hideFunc = () => hideOption(element));
    container.contains(event.relatedTarget)
    element.style.display = 'block'
}

function hideModi(item) {
    let child = item.querySelector('div')
    item._hideModiTimer = setTimeout(() => {
        child.style.transform = 'scale(0)'
        child.style.opacity = '0'
        setTimeout(() => {child.style.display = 'none' ;item.style.display = 'none' }, 200 )
    },500)
}

function showModi(item,container) {
    let containerr = document.querySelector(container)
    let child = item.querySelector('div')
    clearTimeout(item._hideTimer)
    item._hideTimer = null
    containerr.removeEventListener('mouseleave',containerr._hideFunc);
    containerr._hideFunc = null
    item.style.display = 'block'
    child.classList.add('addShoweffect')
    setTimeout(() => {child.style.transform = 'scale(1)';child.style.opacity = '1';child.classList.remove('addShoweffect')} ,10)
    child.style.display = 'flex'
    if(item._hideModiFunc) {
        item.removeEventListener('mouseleave',item._hideModiFunc);
    }
    item.addEventListener('mouseleave',item._hideModiFunc = () => hideModi(item));
}

function showChild(item,container) {
    let parent = item.parentElement?.closest('div');
    let containerr = document.querySelector(container)
    clearTimeout(parent._hideModiTimer)
    parent._hideModiTimer = null
    containerr.removeEventListener('mouseleave', parent._hideModiFunc);
    parent._hideModiFunc = null
    item.style.display = 'flex'
    item.addEventListener('mouseleave', () => hideModi(parent));
}

// Phần note xử lý scroll
function scrollHandle(element) {
    let item = document.querySelector('.note-input')
    if(item) {
        let scrollTop = element.scrollTop
        item.style.bottom = (-scrollTop + 8)  + 'px'
    }
}

// phần note:xử lý auto resize của textarea

function autoResize(){
    let text = document.getElementById('textarea')
    if(text.scrollHeight > 30){
        text.style.height = 'auto'
        text.style.height = text.scrollHeight + 'px'
    } 
    if (text.value.length === 0) {
        text.style.height = '20px'
    }
}
function editFunc(item) {
    let clickedElement = item.closest('.note-content-body').querySelector('.note-body--text');
    let container = item.closest('.note-content-body')
    let getClass = container.className
    let getID = parseInt(getClass.match(/\d+/g)[0],10)
    let textContainer = document.querySelector('.note-input');
    let textArea = textContainer.querySelector('textarea');
    let icon = document.querySelector('.note-input>div>div');
    textArea.value = clickedElement.innerText
    textArea.focus()
    icon.style.height = '23px'
    if(!clickedElement.getAttribute('data-id')) {
        clickedElement.setAttribute('data-id', getID)
        // console.log('đã thêm id', getID)
    }
    textArea.setAttribute('editingID',clickedElement.getAttribute('data-id'))
    autoResize(textArea);
}
function editCancel() {
    let text = document.getElementById('textarea')
    let icon = document.querySelector('.note-input>div>div');
    icon.style.height = '0'
    text.removeAttribute('editingID')
}

// Phanaf note:chức năng của nút post
let noteData = [
    {
        date: '28/9/2025',
        content : [
            {
                isEditing: false ,
                content : ' đây laf item 1,m id 1',
                time : ' this is time',
            }
            ,
            {
                isEditing: false,
                content:'day là date1 item 2 id 2',
                time : 'this is time',
            }
        ]
    }
    ,
    {
        date: '20/03/2000',
        content : [
            {
                isEditing: false,
                content:'day là date 2 item 1 id 3',
                time: 'this is time',
            },
            {
                isEditing: false,
                time: 'this is time',
                content: 'đay là date 2 item id 4',
            }
        ]
    }
]

function renderNote(noteData) {
    window.addEventListener('keydown', e => {
        if(e.key === 'Enter'){
            let text = document.getElementById('textarea')
            e.preventDefault()
            text.focus()
        }
    })
    if(noteData.length === 0) {
    return `
        <div class="content-note" style="flex: 1;position: relative;display: flex;flex-direction:column;gap: 16px;color:#0D121C">
                <div class="note-header" style="display: flex;flex-direction: row;justify-content:space-between;align-items: center;">
                    <div style="display: flex;flex-direction: row;gap: 16px">
                        <h3> Ghi chú </h3>
                    </div>
                </div>
                <hr>
                <div class="note-body" style="flex: 1;display: flex;flex-direction: column;max-height: 80vh;">
                    <div style="flex: 1;width: 397px;height: 248px;margin: auto;display: flex;flex-direction: column;gap: 24px;align-items: center;justify-content: center">
                        <img src="/module2/LandingPage/LandingPage2/asset/noteEmpty.png" alt="">
                    </div>
                </div>
                <div class="note-input" style="background: white;max-width:100vw;padding:12px;position: absolute;bottom:2%;box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);width: 100%;border-radius: 16px;display: flex;flex-direction: row;justify-content: space-between ">
                    <div style="flex: 1;color: #4D5761">
                        <div style="display: block;height: 0"><i style="margin-right: 6px;" class="fa-solid fa-pen"></i> Chỉnh sửa <i onclick="editCancel()" style="color:red;margin-left:8px;font-size:14px;cursor: pointer" class="fa-solid fa-circle-xmark"></i></div>
                        <textarea id="textarea" oninput="autoResize()" 
                        onkeydown="
                        if(event.key === 'Enter' && event.shiftKey){
                            let text = document.getElementById('textarea')
                            text.value += '\\n';
                            autoResize()
                        }
                        else if(event.key === 'Enter'){notePush(event)}
                        "  style="height: 20px;width: 100%;padding-top: 5px;font-size: 14px;flex: 1;border: none;outline: none;min-height: 20px;max-height: 200px;resize: none;overflow: hidden;overflow-y: auto;" ></textarea>
                    </div>
                    <i onclick="notePush(event)" style="align-self: end;font-size: 28px;cursor: pointer" class="fa-solid fa-circle-chevron-up"></i>
                </div>
        </div>
        `
    }
    let empty = noteData.find(item =>item.content.length === 0)
    if(empty){
        let index = noteData.indexOf(empty)
        noteData.splice(index, 1)
    }
    let noteNumb = 1
    noteData.forEach(element => {
        element.content.forEach( itm => {
            itm.id = noteNumb++
        } )
    });
    noteNumb = 0
    return `
        <div class="content-note" style="flex: 1;position: relative;display: flex;flex-direction:column;gap: 16px;color:#0D121C">
                <div class="note-header" style="display: flex;flex-direction: row;justify-content:space-between;align-items: center;">
                    <div style="display: flex;flex-direction: row;gap: 16px">
                        <h3> Ghi chú </h3>
                    </div>
                </div>
                <hr>
                <div class="note-body" style="display: flex;flex-direction: column;max-height: 80vh;">
                ${noteData.map((item,numb) => {
                    return `
                        <div style="display: flex;flex-direction: column;gap: 12px;${numb === noteData.length-1 ? 'padding-bottom:66px' : '' } ">
                            <p style="padding: 24px;text-align: center;font-size: 14px;font-weight: 450;color : #0D121C">${item.date}</p>
                            ${item.content.map((itemm) => {
                                noteNumb++
                                return `
                            <div onmouseenter="showOption(this)" class="note-content-body note-body-content-${noteNumb}" style="position: relative;">
                            <div onmouseenter="showModi(this,'.note-body-content-${noteNumb}')"  style="display: none;position: absolute;left: -38px;padding: 6px 8px;border-radius: 99px;background: #E5E7EB">
                                <i class="fa-solid fa-ellipsis"></i>
                                <div class="note-body--modify" onmouseenter="showChild(this,'.note-body-content-${noteNumb} div')" style="box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);padding:4px;display: none;flex-direction: column;justify-content: space-evenly;position: absolute;background: white;height: 84px;width: 120px;border-radius: 8px;top: 120%;left: 22px">
                                    <p onclick="editFunc(this)" style="padding: 8px;display: flex;flex-direction: row;align-items: center;gap: 10px;cursor: pointer;border-radius: 8px">
                                        <i class="fa-solid fa-pencil"></i>
                                        chỉnh sửa
                                    </p>
                                    <p onclick='noteDelete(this)' style="padding: 8px;display: flex;flex-direction: row;align-items: center;gap: 10px;cursor: pointer;border-radius: 8px">
                                        <i class="fa-solid fa-trash"></i>
                                        Xoá
                                    </p>
                                </div>
                            </div>
                            <div onmouseenter="this.style.background = '#E5E7EB'" onmouseleave="this.style.background = '#F5F5F5'" class="note-body--text-container"  style="padding: 12px;background: #F5F5F5;border-radius:8px;display: flex;flex-direction: column;gap: 4px;font-size: 17px ">
                                <p class="note-body--text" style="line-height: 28px;display: flex;flex-wrap: wrap;overflow-wrap: break-word;word-wrap:break-word;word-break: break-all;">
                                    ${itemm.content}
                                </p>
                                <p class="note-body-content-time" style="text-align: right;font-size: 12px"> ${itemm.time}</p>
                            </div>
                        </div>                                    
                                `
                    }).join('')}
                        </div>    
                    `
                }).join('')}
                </div>
                <div class="note-input" style="background: white;max-width:100vw;padding:12px;position: absolute;bottom:2%;box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);width: 100%;border-radius: 16px;display: flex;flex-direction: row;justify-content: space-between ">
                    <div style="flex: 1;color: #4D5761">
                        <div style="display: block;height: 0"><i style="margin-right: 6px;" class="fa-solid fa-pen"></i> Chỉnh sửa <i onclick="editCancel()" style="color:red;margin-left:8px;font-size:14px;cursor: pointer" class="fa-solid fa-circle-xmark"></i></div>
                        <textarea id="textarea" 
                        oninput="autoResize()" 
                        onkeydown="
                        if(event.key === 'Enter' && event.shiftKey){
                            let text = document.getElementById('textarea')
                            text.value += '\\n';
                            autoResize()
                        }
                        else if(event.key === 'Enter'){notePush(event)}
                        " 
                        style="height: 20px;width: 100%;padding-top: 5px;font-size: 14px;flex: 1;border: none;outline: none;min-height: 20px;max-height: 200px;resize: none;overflow: hidden;overflow-y: auto;" >
                        </textarea>
                    </div>
                    <i onclick="notePush(event)" style="align-self: end;font-size: 28px;cursor: pointer" class="fa-solid fa-circle-chevron-up"></i>
                </div>
        </div>                       
    `
}

function getDate() {
    let raw = new Date()
    return raw.toLocaleDateString("vi-VN")
}
function getTime() {
    let raw = new Date()
    return `${raw.getHours()}:${raw.getMinutes()}`
}
let flag = false
function notePush(event) {
    event.target.onclick = null;
    if (flag){return}
    let text = document.getElementById('textarea')
    let currentContentID = document.getElementById('textarea').getAttribute('editingID')
    if(currentContentID && text.value.trim() !== '' ) {
        let element = document.querySelector(`[data-id = '${currentContentID}']`)
        let container= element.closest('.note-content-body') 
        let getFullClass = container.className
        let getDataID = parseInt(getFullClass.match(/\d+/g)[0],10)
        element.innerText = text.value
        noteData.forEach(item => {
            item.content.forEach(itemm => {
                if(itemm.id === getDataID ){
                    itemm.content = text.value
                }
            })
        })
        editCancel()
        text.value = ''
        autoResize()
    }
    else if (text.value.trim() !== '') {
        let getCurrentDate = noteData.find(item => item.date.trim() === getDate())
        if(getCurrentDate && text.value !== '') {
            let newwItem = {
                isEditing: false,
                content: text.value.replace(/\n/g, '<br>'),
                time : getTime(),
            }
            getCurrentDate.content.unshift(newwItem)
            dataCheck(renderNote(noteData))
        }
        else if(!getCurrentDate && text.value.trim() !== '') {
            let newwItem = {
                date: getDate(),
                content : [
                    {
                        isEditing: false,
                        content:text.value.replace(/\n/g, '<br>'),
                        time: getTime(),
                    },
                ]
            }
            noteData.unshift(newwItem)
            dataCheck(renderNote(noteData))
        }
    }
    flag = true
    setTimeout(() =>{event.target.onclick = notePush;flag = false} , 2000)
    console.log(noteData)
}

function noteDelete(item) {
    let noteBody = document.querySelector('.note-body')
    let noteDiv = noteBody.querySelector('div')
    let container= item.closest('.note-content-body') 
    let getFullClass = container.className
    let getDataID = parseInt(getFullClass.match(/\d+/g)[0],10)
    container.style.transition = 'all ease 0.8s'
    container.style.opacity = '0'
    container.style.height = container.scrollHeight+ 'px'
    container.style.transform = 'translateX(100vw)'
    noteDiv.style.gap = '0'
    setTimeout(() => {
        container.style.height = '0'
    }
    ,300)
    setTimeout(() =>{
        noteDiv.style.gap = '12px'
        container.style.display = 'none' 
    },1100)
    noteData.forEach(item => {
        item.content = item.content.filter(itemm =>
            itemm.id !== getDataID
        )
    })
    renderNote(noteData)
    setTimeout(() =>{
        dataCheck(renderNote(noteData));
    },800)
    editCancel()
}


// phần thùng rác
let recycleBin = []

function pushRecycleBin(from,name,index,content) {
    recycleBin.push(
        {
            from: from,
            name :name,
            index:index,
            content:content,
        }
    )
}
function displayBinModifier(item) {
    let icon = item.querySelector('.bin-content--modifier');
    let star = item.querySelector('.fa-star');
    if(icon.style.display === 'none'){
        icon.classList.add('displayBinModifier')
        setTimeout(() =>{ star.classList.remove('star-cc') ; star.classList.add('star-move')},100)
        setTimeout(() => {icon.style.display = 'block'},200)
        setTimeout(() => {icon.classList.remove('hideBinModifier'); },100)
    }
    else if (icon.style.display === 'block') {
        star.classList.remove('star-move')
        star.classList.add('star-cc')
        icon.classList.remove('displayBinModifier')
        icon.classList.add('hideBinModifier')
        setTimeout(() => {icon.style.display = 'none'},150)
    }
}

function binNavbar (item){
    let content = item.parentElement?.querySelector('div')
    if(content.style.display === 'none'){
        content.style.opacity = '0'
        content.style.transform = 'scale(0)'
        content.style.display = 'flex'
        setTimeout(() => {content.style.opacity= '1';content.style.transform = 'scale(1)'}, 200)
    }
    else  {
        content.style.opacity = '0'
        content.style.transform = 'scale(0)'
        setTimeout(() => {content.style.display = 'none'}, 200)
    }
    document.addEventListener('click', (e) => {
        if(e.target !== content && e.target !== e.currentTarget){
            content.style.opacity = '0'
            content.style.transform = 'scale(0)'
            setTimeout(() => {content.style.display = 'none'}, 200)
        }
    }, {once: true})
}


// Xử lý dữ liệu và hiển thị, lưu trữ mảng các object thông tin để render HTML
let test = [1,2]
// Phần : Tất cả
let data = [
    {
        group:'nhóm 1',
        content :
        [
            {
                choosing: true,
                star: true,
                title:'nội dung 1',
                content : 'Curabitur venenatis semper consequat. Mauris semper, enim ut molestie aliquet, nulla orci ornare felis',
                tag : ['công việc','khác'],
                repeat: true,
                date : '02/09/2025',
                time: '09:26',
            },
            {
                choosing: true,
                star:true,
                title: 'nội dung 2',
                content : 'Curabitur venenatis semper consequat. Mauris semper, enim ut molestie aliquet, nulla orci ornare felis',
                tag : ['công việc','khác'],
                repeat: true,
                date : '02/09/2025',
                time: '09:26',
            },
            {
                choosing: true,
                star:false,
                title:'nội dung 3',
                content : 'Curabitur venenatis semper consequat. Mauris semper, enim ut molestie aliquet, nulla orci ornare felis',
                tag : ['công việc','khác'],
                repeat: true,
                date : '02/09/2025',
                time: '09:26',
            },
            {
                choosing: true,
                star:false,
                title:'nội dung 4',
                content : 'Curabitur venenatis semper consequat. Mauris semper, enim ut molestie aliquet, nulla orci ornare felis',
                tag : ['công việc','khác'],
                repeat: true,
                date : '02/09/2025',
                time: '09:26',
            },
            {
                star:false,
                title:'nội dung 5',
                content : 'Curabitur venenatis semper consequat. Mauris semper, enim ut molestie aliquet, nulla orci ornare felis',
                tag : ['công việc','khác'],
                repeat: true,
                date : '02/09/2025',
                time: '09:26',
            },
            {
                star:false,
                title:'nội dung 6',
                content : 'Curabitur venenatis semper consequat. Mauris semper, enim ut molestie aliquet, nulla orci ornare felis',
                tag : ['công việc','khác'],
                repeat: true,
                date : '02/09/2025',
                time: '09:26',
            },
            {
                star:false,
                title:'nội dung 7',
                content : 'Curabitur venenatis semper consequat. Mauris semper, enim ut molestie aliquet, nulla orci ornare felis',
                tag : ['công việc','khác'],
                repeat: true,
                date : '02/09/2025',
                time: '09:26',
            },
            {
                star:false,
                title:'nội dung 8',
                content : 'Curabitur venenatis semper consequat. Mauris semper, enim ut molestie aliquet, nulla orci ornare felis',
                tag : ['công việc','khác'],
                repeat: true,
                date : '02/09/2025',
                time: '09:26',
            },
        ]
    },
    {
        group: 'Nhóm 2' ,
        content : 
        [
            {
                star:false,
                title: 'nội dung 1',
                content : 'Curabitur venenatis semper consequat. Mauris semper, enim ut molestie aliquet, nulla orci ornare felis',
                tag : ['công việc','khác'],
                repeat: true,
                date : '02/09/2025',
                time: '09:26',
            },
            {
                star:false,
                title: ' nội dung 2',
                content : 'Curabitur venenatis semper consequat. Mauris semper, enim ut molestie aliquet, nulla orci ornare felis',
                tag : ['công việc','khác'],
                repeat: true,
                date : '02/09/2025',
                time: '09:26',
            }
        ]
    },
    {
        group: 'Nhóm 3' ,
        content :
            [
                {
                    choosing:false,
                    star:true,
                    title: 'nội dung 1',
                    content : 'Curabitur venenatis semper consequat. Mauris semper, enim ut molestie aliquet, nulla orci ornare felis',
                    tag : ['công việc','khác'],
                    repeat: true,
                    date : '02/09/2025',
                    time: '09:26',
                },
                {
                    star:false,
                    title: ' nội dung 2',
                    content : 'Curabitur venenatis semper consequat. Mauris semper, enim ut molestie aliquet, nulla orci ornare felis',
                    tag : ['công việc','khác'],
                    repeat: true,
                    date : '02/09/2025',
                    time: '09:26',
                }
            ]
    },
    {
        group: 'Nhóm 4' ,
        content :
            [
                {
                    star:false,
                    title: 'nội dung 1',
                    content : 'Curabitur venenatis semper consequat. Mauris semper, enim ut molestie aliquet, nulla orci ornare felis',
                    tag : ['công việc','khác'],
                    repeat: true,
                    date : '02/09/2025',
                    time: '09:26',
                },
                {
                    star:false,
                    title: ' nội dung 2',
                    content : 'Curabitur venenatis semper consequat. Mauris semper, enim ut molestie aliquet, nulla orci ornare felis',
                    tag : ['công việc','khác'],
                    repeat: true,
                    date : '02/09/2025',
                    time: '09:26',
                },
            ]
    },
    {
        group: 'Nhóm 5' ,
        content :
            [
                {
                    star:false,
                    title: 'nội dung 1',
                    content : 'Curabitur venenatis semper consequat. Mauris semper, enim ut molestie aliquet, nulla orci ornare felis',
                    tag : ['công việc','khác'],
                    repeat: true,
                    date : '02/09/2025',
                    time: '09:26',
                },
                {
                    star:false,
                    title: ' nội dung 2',
                    content : 'Curabitur venenatis semper consequat. Mauris semper, enim ut molestie aliquet, nulla orci ornare felis',
                    tag : ['công việc','khác'],
                    repeat: true,
                    date : '02/09/2025',
                    time: '09:26',
                }
            ]
    },
]
function renderGroup(todoInf) {
    return `
        <div style="display: flex;flex-direction: row;justify-content:space-between;align-items: center;">
            <div style="display: flex;flex-direction: row;gap: 16px">
                <h3> ${todoInf.group} </h3>
                <button style="border: none;outline: none;background:none;"><i style="color: #EF6820;font-size: 14px" class="fa-solid fa-plus"></i></button>
            </div>
            <p style="padding: 8px 16px;background:#FEF6EE;color:#EF6820;font-weight:600">${todoInf.content.length}</p>
        </div>
    `
}

function renderTodoList(todoInf,num){
    return `
            <div onclick="clickToModify(this,event,true,'.dupDel-${num}',data)" class="parent" style="display: flex;flex-direction: column;gap: 8px">
                        <div style="display: flex;flex-direction: row;gap: 8px;padding: 8px;">
                            <img alt="..." onclick="colorToFinish(event,data);stopPropa(event)" style="cursor: pointer;" src="${todoInf.choosing? '../asset/Radio2.png' : '../asset/Radio.png' }" height="${todoInf.choosing?'20' : '28'}" width="${todoInf.choosing? '20' : '28'}"/>
                            <div style="flex: 1;display: flex;flex-direction: column;gap: 8px">
                                <div style="display: flex;justify-content:space-between ;">
                                    <div>
                                        <p style="font-weight: bold;margin-bottom: 4px">${todoInf.title}</p>
                                        <p style="font-size: 12px;color:#9DA4AE">${todoInf.content}</p>
                                    </div>
                                    <div style="position: relative;">
                                        <i style="${todoInf.star? `color:#EF6820` : 'color:black'}" onclick="colorChange(event,data);stopPropa(event)"  class="${todoInf.star? 'fa-solid' : 'fa-regular'} fa-star"></i>
                                        <div class="dupDel-${num} parent-options" style="position: absolute;right: 0;width: 153px;height: 96px;padding: 8px;display: none;flex-direction: column;background: white;justify-content: space-between;border: 2px solid #F3F4F6;border-radius: 6px;color: #4D5761">
                                            <p onclick='duplicateHandle(this)' onmouseleave="this.style.background='white'" onmouseenter="this.style.background='#EF6820'" style="cursor: pointer;border-radius: 8px;padding: 8px"><i style="margin-right: 6px" class="fa-solid fa-clone"></i> Nhân đôi</p>
                                            <p onclick='toDoDelete(this)' onmouseleave="this.style.background='white'" onmouseenter="this.style.background='#EF6820'" style="cursor: pointer;border-radius: 8px;;padding: 8px"><i class="fa-solid fa-trash-can"></i> Xoá</p>
                                        </div>
                                    </div>
                                </div>
                                <div style="display: flex;flex-direction: row;align-items: center;">
                                    ${todoInf.tag.map(item => {return `<p style="padding: 4px 12px;font-size: 12px;color: #4D5761">${item}</p>`}).join('')}
                                </div>
                                ${todoInf.repeat
                                ? 
                                `
                                    <div style="display: flex;flex-direction: row;align-items: center;gap: 8px;font-size: 14px;cursor: pointer;">
                                        <i style="color: #9DA4AE" class="fa-solid fa-repeat"></i>
                                        <i style="color: ${todoInf.repeat? '#F04438' : '#9DA4AE'}" id="abcd" class="fa-solid fa-calendar"></i>
                                        <p onclick="stopPropa(event);repeatToggle(event,data)" style="color: ${todoInf.repeat? '#F04438' : '#9DA4AE'}" class="date">20/03/2025 - 07:00</p>
                                    </div>
                                ` 
                                :   ''
                                }
                            </div>
                        </div>
                    </div>
    `
}

function renderContent(data){
    let num = 0
    let button = document.querySelector('.toggleDisplay');
    data.forEach((item) => {
        if(item.content.length === 0){
                data = data.filter(item => item.content.length > 0)
            }
        } )
    if(data.length === 0){
        return `
            <div style="width: 397px;height: 248px;margin: auto;display: flex;flex-direction: column;gap: 24px;align-items: center;">
        <img src="/module2/LandingPage/LandingPage2/asset/Group 26810.png" alt="">
        <div style="display: flex;flex-direction: column;align-items: center;flex: 1;justify-content: space-between;">
            <p style="font-size: 24px;color: #4D5761;font-weight: 500;margin: 0;"> Tạo danh sách việc cần làm !</p>
            <button style="padding: 8px 14px;background: #EF6820;color: white; border: none;outline: none;border-radius: 8px;"> <i style="margin-right: 10px;" class="fa-solid fa-circle-plus"></i>Tạo mới</button>
        </div>
    </div>
        `
    }
    return `
    ${data.map((item,number) => {return `
        <div style='width:${button.getAttribute('data-status') === 'left'? '100%' : '30%'};height:auto;transition:  width 1s ease, height 1s ease;' class="content-body--${number+1} content-body--container">
            ${renderGroup(item)}
            <hr>
            <div style="display: flex;flex-direction: column;gap: 8px;">
            ${item.content.map((itemm) => {return `
                ${( () => {
                    num++
                    itemm.id = num
                    return renderTodoList(itemm,num)
                })()
    }
            `}).join('<hr>')}
            </div>
        </div>
    `}).join('')}
`
}
let content = document.getElementById('content')
// Phần dataCheck
let currentTab
function dataCheck(contentt,tab) {
    let star = document.getElementById('star')
    if(tab){
        currentTab = tab
        star.classList.remove('fa-solid')
        star.classList.add('fa-regular');
        star.style.color = 'black'
    }
     setTimeout(()=>
        content.innerHTML = contentt
    , 700)
}

function toDoDelete(itemm){
    let bigContainer = itemm.closest('.content-body--container')
    let body = document.querySelector('.content-body');
    // document.getElementById('content').style.flex = 'none'
    bigContainer.style.height = 'auto'
    let container = itemm.closest('.parent')
    container.style.height = (container.scrollHeight ) + 'px'
    container.style.transition = 'all ease 0.5s'
    container.style.opacity = '0'
    setTimeout(()=>{container.style.height = '0' ; },300)
    let getClass = container.querySelector('.parent-options').className
    let getID = parseInt(getClass.match(/\d+/g).toString())
    // setTimeout(()=>{body.style.flexFlow = 'column wrap'},500)
    setTimeout(() => {
        data.forEach((item) => {
            let deleteItem = item.content.find((itemm) => itemm.id === getID)
            let index = data.findIndex(itm => itm.content.find(itmm => itmm.id === getID))
            let name = item.group
            if(deleteItem){
                item.content = item.content.filter((itemm) => itemm.id !== getID)
                pushRecycleBin('data',name,index,deleteItem)
            }
            if(item.content.length === 0){
                bigContainer.style.opacity = '0'
                data = data.filter(item => item.content.length > 0)
            }
        } )
        dataCheck(renderContent(data))
    },200)
    console.log(data)
}
function duplicateHandle(item){
    let container = item.closest('.parent')
    let getClass = container.querySelector('.parent-options').className
    let getID = parseInt(getClass.match(/\d+/g).toString())
    let choosedGroup = data.find(item => item.content.find(itemm => itemm.id === getID))
    data.forEach(itm => {
        let choosedItem = itm.content.find(itmm => itmm.id === getID)
        let index = itm.content.findIndex(itemm => itemm.id === getID)
        if(choosedItem) {
            let duplicatedItem = JSON.parse(JSON.stringify(choosedItem));
            choosedGroup.content.splice(index +1,0,duplicatedItem)
        }
    })
    dataCheck(renderContent(data))
}

// Phần : Hôm nay

let todayData = [
    {
        group: 'Nhóm 1 phần today' ,
        content :
            [
                {
                    star:true,
                    title: 'nội dung 1',
                    content : 'Curabitur venenatis semper consequat. Mauris semper, enim ut molestie aliquet, nulla orci ornare felis',
                    tag : ['công việc','khác'],
                    repeat: true,
                    date : '02/09/2025',
                    time: '09:26',
                },
                {
                    star:false,
                    title: ' nội dung 2',
                    content : 'Curabitur venenatis semper consequat. Mauris semper, enim ut molestie aliquet, nulla orci ornare felis',
                    tag : ['công việc','khác'],
                    repeat: true,
                    date : '02/09/2025',
                    time: '09:26',
                }
            ]
    },
]

function renderTodayGroup(todoInf) {
    return `
        <div style="display: flex;flex-direction: row;justify-content:space-between;align-items: center;">
            <div style="display: flex;flex-direction: row;gap: 16px">
                <h3> ${todoInf.group} </h3>
                <button style="border: none;outline: none;background:none;"><i style="color: #EF6820;font-size: 14px" class="fa-solid fa-plus"></i></button>
            </div>
            <p style="padding: 8px 16px;background:#FEF6EE;color:#EF6820;font-weight:600">${todoInf.content.length}</p>
        </div>
    `
}

function renderTodayList(todoInf,num){
    return `
            <div onclick="clickToModify(this,event,true,'.dupDel-${num}',todayData)" class="parent" style="display: flex;flex-direction: column;gap: 8px">
                        <div style="display: flex;flex-direction: row;gap: 8px;padding: 8px;">
                            <img alt="..." onclick="colorToFinish(event,todayData);stopPropa(event)" style="cursor: pointer;" src="${todoInf.choosing? '../asset/Radio2.png' : '../asset/Radio.png' }" height="${todoInf.choosing?'20' : '28'}" width="${todoInf.choosing? '20' : '28'}"/>
                            <div style="flex: 1;display: flex;flex-direction: column;gap: 8px">
                                <div style="display: flex;justify-content:space-between ;">
                                    <div>
                                        <p style="font-weight: bold;margin-bottom: 4px">${todoInf.title}</p>
                                        <p style="font-size: 12px;color:#9DA4AE">${todoInf.content}</p>
                                    </div>
                                    <div style="position: relative;">
                                        <i style="${todoInf.star? `color:#EF6820` : 'color:black'}" onclick="colorChange(event,todayData);stopPropa(event)"  class="${todoInf.star? 'fa-solid' : 'fa-regular'} fa-star"></i>
                                        <div class="dupDel-${num} parent-options" style="position: absolute;right: 0;width: 153px;height: 96px;padding: 8px;display: none;flex-direction: column;background: white;justify-content: space-between;border: 2px solid #F3F4F6;border-radius: 6px;color: #4D5761">
                                            <p onclick='duplicateTodayList(this)' onmouseleave="this.style.background='white'" onmouseenter="this.style.background='#EF6820'" style="cursor: pointer;border-radius: 8px;padding: 8px"><i style="margin-right: 6px" class="fa-solid fa-clone"></i> Nhân đôi</p>
                                            <p onclick='todayListDelete(this)' onmouseleave="this.style.background='white'" onmouseenter="this.style.background='#EF6820'" style="cursor: pointer;border-radius: 8px;;padding: 8px"><i class="fa-solid fa-trash-can"></i> Xoá</p>
                                        </div>
                                    </div>
                                </div>
                                <div style="display: flex;flex-direction: row;align-items: center;">
                                    ${todoInf.tag.map(item => {return `<p style="padding: 4px 12px;font-size: 12px;color: #4D5761">${item}</p>`}).join('')}
                                </div>
                                ${todoInf.repeat
                                ? 
                                `
                                    <div style="display: flex;flex-direction: row;align-items: center;gap: 8px;font-size: 14px;cursor: pointer;">
                                        <i style="color: #9DA4AE" class="fa-solid fa-repeat"></i>
                                        <i style="color: ${todoInf.repeat? '#F04438' : '#9DA4AE'}" id="abcd" class="fa-solid fa-calendar"></i>
                                        <p onclick="stopPropa(event);repeatToggle(event,todayData)" style="color: ${todoInf.repeat? '#F04438' : '#9DA4AE'}" class="date">20/03/2025 - 07:00</p>
                                    </div>
                                ` 
                                :   ''
                                }
                            </div>
                        </div>
                    </div>
    `
}

function renderTodayContent(todayData){
    let num = 0
    let button = document.querySelector('.toggleDisplay');
    todayData.forEach((item) => {
        if(item.content.length === 0){
                todayData = todayData.filter(item => item.content.length > 0)
            }
        } )
    if(todayData.length === 0){
        return `
            <div style="width: 397px;height: 248px;margin: auto;display: flex;flex-direction: column;gap: 24px;align-items: center;">
        <img src="/module2/LandingPage/LandingPage2/asset/Group 26810.png" alt="">
        <div style="display: flex;flex-direction: column;align-items: center;flex: 1;justify-content: space-between;">
            <p style="font-size: 24px;color: #4D5761;font-weight: 500;margin: 0;"> Tạo danh sách việc cần làm !</p>
            <button style="padding: 8px 14px;background: #EF6820;color: white; border: none;outline: none;border-radius: 8px;"> <i style="margin-right: 10px;" class="fa-solid fa-circle-plus"></i>Tạo mới</button>
        </div>
    </div>
        `
    }
    return `
    ${todayData.map((item,number) => {return `
        <div style='width:${button.getAttribute('data-status') === 'left'? '100%' : '30%'};height:auto;transition:  width 1s ease, height 1s ease;' class="content-body--${number+1} content-body--container">
            ${renderTodayGroup(item)}
            <hr>
            <div style="display: flex;flex-direction: column;gap: 8px;">
            ${item.content.map((itemm) => {return `
                ${( () => {
                    num++
                    itemm.id = num
                    return renderTodayList(itemm,num)
                })()
    }
            `}).join('<hr>')}
            </div>
        </div>
    `}).join('')}
`
}

function todayListDelete(itemm){
    let bigContainer = itemm.closest('.content-body--container')
    // document.getElementById('content').style.flex = 'none'
    bigContainer.style.height = 'auto'
    let container = itemm.closest('.parent')
    container.style.height = (container.scrollHeight ) + 'px'
    container.style.transition = 'all ease 0.5s'
    container.style.opacity = '0'
    setTimeout(()=>{container.style.height = '0' ; },300)
    let getClass = container.querySelector('.parent-options').className
    let getID = parseInt(getClass.match(/\d+/g).toString())
    // setTimeout(()=>{body.style.flexFlow = 'column wrap'},500)
    setTimeout(() => {
        todayData.forEach((item) => {
            let deleteItem = item.content.find((itemm) => itemm.id === getID)
            let index = todayData.findIndex(itm => itm.content.find(itmm => itmm.id === getID))
            let name = item.group
            if(deleteItem){
                item.content = item.content.filter((itemm) => itemm.id !== getID)
                pushRecycleBin('todayData',name,index,deleteItem)
            }
            if(item.content.length === 0){
                bigContainer.style.opacity = '0'
                todayData = todayData.filter(item => item.content.length > 0)
            }
        } )
        dataCheck(renderTodayContent(todayData))
    },200)
    console.log(todayData)
}
function duplicateTodayList(item){
    let container = item.closest('.parent')
    let getClass = container.querySelector('.parent-options').className
    let getID = parseInt(getClass.match(/\d+/g).toString())
    let choosedGroup = todayData.find(item => item.content.find(itemm => itemm.id === getID))
    todayData.forEach(itm => {
        let choosedItem = itm.content.find(itmm => itmm.id === getID)
        let index = itm.content.findIndex(itmm => itmm.id === getID)
        if(choosedItem) {
            let duplicatedItem = JSON.parse(JSON.stringify(choosedItem));
            choosedGroup.content.splice(index + 1,0,duplicatedItem)
        }
    })
    dataCheck(renderTodayContent(todayData))
}

// Phần 3 ngày tới

let next3DaysData = [{
        group:'đây là nội dung của phần 3 ngày tới',
        content :
        [
            {
                title:'nội dung 1',
                content : 'Curabitur venenatis semper consequat. Mauris semper, enim ut molestie aliquet, nulla orci ornare felis',
                tag : ['công việc','khác'],
                repeat: true,
                date : '02/09/2025',
                time: '09:26',
            },
        ]
    },
    {
        group:'noiij dung của next 3 days nhóm 2',
        content :
        [
            {
                title:'nội dung 1 Phần 3 ngày tới ',
                content : 'Curabitur venenatis semper consequat. Mauris semper, enim ut molestie aliquet, nulla orci ornare felis',
                tag : ['công việc','khác'],
                repeat: true,
                date : '02/09/2025',
                time: '09:26',
            },
        ]
    },
]

function Next3daysGroup(todoInf) {
    return `
        <div style="display: flex;flex-direction: row;justify-content:space-between;align-items: center;">
            <div style="display: flex;flex-direction: row;gap: 16px">
                <h3> ${todoInf.group} </h3>
                <button style="border: none;outline: none;background:none;"><i style="color: #EF6820;font-size: 14px" class="fa-solid fa-plus"></i></button>
            </div>
            <p style="padding: 8px 16px;background:#FEF6EE;color:#EF6820;font-weight:600">${todoInf.content.length}</p>
        </div>
    `
}

function Next3DaysContent(todoInf,num){
    return `
            <div onclick="clickToModify(this,event,true,'.dupDel-${num}',next3DaysData)" class="parent" style="display: flex;flex-direction: column;gap: 8px">
                        <div style="display: flex;flex-direction: row;gap: 8px;padding: 8px;">
                            <img alt="..." onclick="colorToFinish(event,next3DaysData);stopPropa(event)" style="cursor: pointer;" src="${todoInf.choosing? '../asset/Radio2.png' : '../asset/Radio.png' }" height="${todoInf.choosing?'20' : '28'}" width="${todoInf.choosing? '20' : '28'}"/>
                            <div style="flex: 1;display: flex;flex-direction: column;gap: 8px">
                                <div style="display: flex;justify-content:space-between ;">
                                    <div>
                                        <p style="font-weight: bold;margin-bottom: 4px">${todoInf.title}</p>
                                        <p style="font-size: 12px;color:#9DA4AE">${todoInf.content}</p>
                                    </div>
                                    <div style="position: relative;">
                                        <i style="${todoInf.star? `color:#EF6820` : 'color:black'}" onclick="colorChange(event,next3DaysData);stopPropa(event)"  class="${todoInf.star? 'fa-solid' : 'fa-regular'} fa-star"></i>
                                        <div class="dupDel-${num} parent-options" style="position: absolute;right: 0;width: 153px;height: 96px;padding: 8px;display: none;flex-direction: column;background: white;justify-content: space-between;border: 2px solid #F3F4F6;border-radius: 6px;color: #4D5761">
                                            <p onclick='Next3DaysDuplicate(this)' onmouseleave="this.style.background='white'" onmouseenter="this.style.background='#EF6820'" style="cursor: pointer;border-radius: 8px;padding: 8px"><i style="margin-right: 6px" class="fa-solid fa-clone"></i> Nhân đôi</p>
                                            <p onclick='Next3DaysDelete(this)' onmouseleave="this.style.background='white'" onmouseenter="this.style.background='#EF6820'" style="cursor: pointer;border-radius: 8px;;padding: 8px"><i class="fa-solid fa-trash-can"></i> Xoá</p>
                                        </div>
                                    </div>
                                </div>
                                <div style="display: flex;flex-direction: row;align-items: center;">
                                    ${todoInf.tag.map(item => {return `<p style="padding: 4px 12px;font-size: 12px;color: #4D5761">${item}</p>`}).join('')}
                                </div>
                                ${todoInf.repeat
                                ? 
                                `
                                    <div style="display: flex;flex-direction: row;align-items: center;gap: 8px;font-size: 14px;cursor: pointer;">
                                        <i style="color: #9DA4AE" class="fa-solid fa-repeat"></i>
                                        <i style="color: ${todoInf.repeat? '#F04438' : '#9DA4AE'}" class="fa-solid fa-calendar"></i>
                                        <p onclick="stopPropa(event);repeatToggle(event,next3DaysData)" style="color: ${todoInf.repeat? '#F04438' : '#9DA4AE'}" class="date">20/03/2025 - 07:00</p>
                                    </div>
                                ` 
                                :   ''
                                }
                            </div>
                        </div>
                    </div>
    `
}

function renderNext3DaysContent(Next3DaysData){
    let num = 0
    let button = document.querySelector('.toggleDisplay');
    next3DaysData.forEach((item) => {
        if(item.content.length === 0){
                next3DaysData = next3DaysData.filter(item => item.content.length > 0)
            }
        } )
    if(next3DaysData.length === 0){
        return `
            <div style="width: 397px;height: 248px;margin: auto;display: flex;flex-direction: column;gap: 24px;align-items: center;">
        <img src="/module2/LandingPage/LandingPage2/asset/Group 26810.png" alt="">
        <div style="display: flex;flex-direction: column;align-items: center;flex: 1;justify-content: space-between;">
            <p style="font-size: 24px;color: #4D5761;font-weight: 500;margin: 0;"> Tạo danh sách việc cần làm !</p>
            <button style="padding: 8px 14px;background: #EF6820;color: white; border: none;outline: none;border-radius: 8px;"> <i style="margin-right: 10px;" class="fa-solid fa-circle-plus"></i>Tạo mới</button>
        </div>
    </div>
        `
    }
    return `
    ${Next3DaysData.map((item,number) => {return `
        <div style='width:${button.getAttribute('data-status') === 'left'? '100%' : '30%'};height:auto;transition:  width 1s ease, height 1s ease;' class="content-body--${number+1} content-body--container">
            ${Next3daysGroup(item)}
            <hr>
            <div style="display: flex;flex-direction: column;gap: 8px;">
            ${item.content.map((itemm) => {return `
                ${( () => {
                    num++
                    itemm.id = num
                    return Next3DaysContent(itemm,num)
                })()
    }
            `}).join('<hr>')}
            </div>
        </div>
    `}).join('')}
`
}

function Next3DaysDelete(itemm){
    let bigContainer = itemm.closest('.content-body--container')
    // document.getElementById('content').style.flex = 'none'
    bigContainer.style.height = 'auto'
    let container = itemm.closest('.parent')
    container.style.height = (container.scrollHeight ) + 'px'
    container.style.transition = 'all ease 0.5s'
    container.style.opacity = '0'
    setTimeout(()=>{container.style.height = '0' ; },300)
    let getClass = container.querySelector('.parent-options').className
    let getID = parseInt(getClass.match(/\d+/g).toString())
    // setTimeout(()=>{body.style.flexFlow = 'column wrap'},500)
    setTimeout(() => {
        next3DaysData.forEach((item) => {
            let deleteItem = item.content.find((itemm) => itemm.id === getID)
            let index = next3DaysData.findIndex(itm => itm.content.find(itmm => itmm.id === getID))
            let name = item.group
            if(deleteItem){
                item.content = item.content.filter((itemm) => itemm.id !== getID)
                pushRecycleBin('next3DaysData',name,index,deleteItem)
            }
            if(item.content.length === 0){
                bigContainer.style.opacity = '0'
                next3DaysData = next3DaysData.filter(item => item.content.length > 0)
            }
        } )
        dataCheck(renderNext3DaysContent(next3DaysData))
    },200)
    console.log(next3DaysData)
}
function Next3DaysDuplicate(item){
    let container = item.closest('.parent')
    let getClass = container.querySelector('.parent-options').className
    let getID = parseInt(getClass.match(/\d+/g).toString())
    let choosedGroup = next3DaysData.find(item => item.content.find(itemm => itemm.id === getID))
    next3DaysData.forEach(itm => {
        let choosedItem = itm.content.find(itmm => itmm.id === getID)
        let index = itm.content.findIndex(itmm => itmm.id === getID)
        if(choosedItem) {
            let duplicatedItem = JSON.parse(JSON.stringify(choosedItem));
            choosedGroup.content.splice(index + 1,0,duplicatedItem)
        }
    })
    dataCheck(renderNext3DaysContent(next3DaysData))
}

// Phần : 7 ngày tới

let Next7DaysData = [{
        group:'đây là nội dung của phần 7 ngày tới',
        content :
        [
            {
                // star:true,
                title:'nội dung 1',
                content : 'Curabitur venenatis semper consequat. Mauris semper, enim ut molestie aliquet, nulla orci ornare felis',
                tag : ['công việc','khác'],
                repeat: true,
                date : '02/09/2025',
                time: '09:26',
            },
        ]
    },
    {
        group:'noiij dung của next 7 days nhóm 2',
        content :
        [
            {
                // star:false,
                title:'nội dung 1 Phần 7 ngày tới ',
                content : 'Curabitur venenatis semper consequat. Mauris semper, enim ut molestie aliquet, nulla orci ornare felis',
                tag : ['công việc','khác'],
                repeat: true,
                date : '02/09/2025',
                time: '09:26',
            },
        ]
    },
]

function Next7DaysGroup(todoInf) {
    return `
        <div style="display: flex;flex-direction: row;justify-content:space-between;align-items: center;">
            <div style="display: flex;flex-direction: row;gap: 16px">
                <h3> ${todoInf.group} </h3>
                <button style="border: none;outline: none;background:none;"><i style="color: #EF6820;font-size: 14px" class="fa-solid fa-plus"></i></button>
            </div>
            <p style="padding: 8px 16px;background:#FEF6EE;color:#EF6820;font-weight:600">${todoInf.content.length}</p>
        </div>
    `
}

function Next7DaysContent(todoInf,num){
    return `
            <div onclick="clickToModify(this,event,true,'.dupDel-${num}',Next7DaysData)" class="parent" style="display: flex;flex-direction: column;gap: 8px">
                        <div style="display: flex;flex-direction: row;gap: 8px;padding: 8px;">
                            <img alt="..." onclick="colorToFinish(event,Next7DaysData);stopPropa(event)" style="cursor: pointer;" src="${todoInf.choosing? '../asset/Radio2.png' : '../asset/Radio.png' }" height="${todoInf.choosing?'20' : '28'}" width="${todoInf.choosing? '20' : '28'}"/>
                            <div style="flex: 1;display: flex;flex-direction: column;gap: 8px">
                                <div style="display: flex;justify-content:space-between ;">
                                    <div>
                                        <p style="font-weight: bold;margin-bottom: 4px">${todoInf.title}</p>
                                        <p style="font-size: 12px;color:#9DA4AE">${todoInf.content}</p>
                                    </div>
                                    <div style="position: relative;">
                                        <i style="${todoInf.star? `color:#EF6820` : 'color:black'}" onclick="colorChange(event,Next7DaysData);stopPropa(event)"  class="${todoInf.star? 'fa-solid' : 'fa-regular'} fa-star"></i>
                                        <div class="dupDel-${num} parent-options" style="position: absolute;right: 0;width: 153px;height: 96px;padding: 8px;display: none;flex-direction: column;background: white;justify-content: space-between;border: 2px solid #F3F4F6;border-radius: 6px;color: #4D5761">
                                            <p onclick='Next7DaysDuplicate(this)' onmouseleave="this.style.background='white'" onmouseenter="this.style.background='#EF6820'" style="cursor: pointer;border-radius: 8px;padding: 8px"><i style="margin-right: 6px" class="fa-solid fa-clone"></i> Nhân đôi</p>
                                            <p onclick='Next7DaysDelete(this)' onmouseleave="this.style.background='white'" onmouseenter="this.style.background='#EF6820'" style="cursor: pointer;border-radius: 8px;;padding: 8px"><i class="fa-solid fa-trash-can"></i> Xoá</p>
                                        </div>
                                    </div>
                                </div>
                                <div style="display: flex;flex-direction: row;align-items: center;">
                                    ${todoInf.tag.map(item => {return `<p style="padding: 4px 12px;font-size: 12px;color: #4D5761">${item}</p>`}).join('')}
                                </div>
                                ${todoInf.repeat
                                ? 
                                `
                                    <div style="display: flex;flex-direction: row;align-items: center;gap: 8px;font-size: 14px;cursor: pointer;">
                                        <i style="color: #9DA4AE" class="fa-solid fa-repeat"></i>
                                        <i style="color: ${todoInf.repeat? '#F04438' : '#9DA4AE'}" id="abcd" class="fa-solid fa-calendar"></i>
                                        <p onclick="stopPropa(event);repeatToggle(event,Next7DaysData)" style="color: ${todoInf.repeat? '#F04438' : '#9DA4AE'}" class="date">20/03/2025 - 07:00</p>
                                    </div>
                                ` 
                                :   ''
                                }
                            </div>
                        </div>
                    </div>
    `
}

function renderNext7DaysContent(Next7DaysData){
    let num = 0
    let button = document.querySelector('.toggleDisplay');
    Next7DaysData.forEach((item) => {
        if(item.content.length === 0){
                Next7DaysData = Next7DaysData.filter(item => item.content.length > 0)
            }
        } )
    if(Next7DaysData.length === 0){
        return `
            <div style="width: 397px;height: 248px;margin: auto;display: flex;flex-direction: column;gap: 24px;align-items: center;">
        <img src="/module2/LandingPage/LandingPage2/asset/Group 26810.png" alt="">
        <div style="display: flex;flex-direction: column;align-items: center;flex: 1;justify-content: space-between;">
            <p style="font-size: 24px;color: #4D5761;font-weight: 500;margin: 0;"> Tạo danh sách việc cần làm !</p>
            <button style="padding: 8px 14px;background: #EF6820;color: white; border: none;outline: none;border-radius: 8px;"> <i style="margin-right: 10px;" class="fa-solid fa-circle-plus"></i>Tạo mới</button>
        </div>
    </div>
        `
    }
    return `
    ${Next7DaysData.map((item,number) => {return `
        <div style='width:${button.getAttribute('data-status') === 'left'? '100%' : '30%'};height:auto;transition:  width 1s ease, height 1s ease;' class="content-body--${number+1} content-body--container">
            ${Next7DaysGroup(item)}
            <hr>
            <div style="display: flex;flex-direction: column;gap: 8px;">
            ${item.content.map((itemm) => {return `
                ${( () => {
                    num++
                    itemm.id = num
                    return Next7DaysContent(itemm,num)
                })()
    }
            `}).join('<hr>')}
            </div>
        </div>
    `}).join('')}
`
}

function Next7DaysDelete(itemm){
    let bigContainer = itemm.closest('.content-body--container')
    // document.getElementById('content').style.flex = 'none'
    bigContainer.style.height = 'auto'
    let container = itemm.closest('.parent')
    container.style.height = (container.scrollHeight ) + 'px'
    container.style.transition = 'all ease 0.5s'
    container.style.opacity = '0'
    setTimeout(()=>{container.style.height = '0' ; },300)
    let getClass = container.querySelector('.parent-options').className
    let getID = parseInt(getClass.match(/\d+/g).toString())
    // setTimeout(()=>{body.style.flexFlow = 'column wrap'},500)
    setTimeout(() => {
        Next7DaysData.forEach((item) => {
            let deleteItem = item.content.find((itemm) => itemm.id === getID)
            let index = Next7DaysData.findIndex(itm => itm.content.find(itmm => itmm.id === getID))
            let name = item.group
            if(deleteItem){
                item.content = item.content.filter((itemm) => itemm.id !== getID)
                pushRecycleBin('Next7DaysData',name,index,deleteItem)
            }
            if(item.content.length === 0){
                bigContainer.style.opacity = '0'
                Next7DaysData = Next7DaysData.filter(item => item.content.length > 0)
            }
        } )
        console.log(recycleBin)
        dataCheck(renderNext7DaysContent(Next7DaysData))
    },200)
}
function Next7DaysDuplicate(item){
    let container = item.closest('.parent')
    let getClass = container.querySelector('.parent-options').className
    let getID = parseInt(getClass.match(/\d+/g).toString())
    let choosedGroup = Next7DaysData.find(item => item.content.find(itemm => itemm.id === getID))
    Next7DaysData.forEach(itm => {
        let choosedItem = itm.content.find(itmm => itmm.id === getID)
        let index = itm.content.findIndex(itmm => itmm.id === getID)
        if(choosedItem) {
            let duplicatedItem = JSON.parse(JSON.stringify(choosedItem));
            choosedGroup.content.splice(index + 1,0,duplicatedItem)
        }
    })
    dataCheck(renderNext7DaysContent(Next7DaysData))
}


// Phần filter nếu user tích vào ngôi sao ở các tab
let previous
let filtered

function filterGroup(todoInf) {
    return `
        <div style="display: flex;flex-direction: row;justify-content:space-between;align-items: center;">
            <div style="display: flex;flex-direction: row;gap: 16px">
                <h3> ${todoInf.group} </h3>
                <button style="border: none;outline: none;background:none;"><i style="color: #EF6820;font-size: 14px" class="fa-solid fa-plus"></i></button>
            </div>
            <p style="padding: 8px 16px;background:#FEF6EE;color:#EF6820;font-weight:600">${todoInf.content.length}</p>
        </div>
    `
}

function filterContent(todoInf,arrayName){
    return `
            <div onclick="clickToModify(this,event,true,'.dupDel-${todoInf.id}',previous)" class="parent" style="display: flex;flex-direction: column;gap: 8px">
                        <div style="display: flex;flex-direction: row;gap: 8px;padding: 8px;">
                            <img alt="..." onclick="colorToFinish(event,previous);stopPropa(event)" style="cursor: pointer;" src="${todoInf.choosing? '../asset/Radio2.png' : '../asset/Radio.png' }" height="${todoInf.choosing?'20' : '28'}" width="${todoInf.choosing? '20' : '28'}"/>
                            <div style="flex: 1;display: flex;flex-direction: column;gap: 8px">
                                <div style="display: flex;justify-content:space-between ;">
                                    <div>
                                        <p style="font-weight: bold;margin-bottom: 4px">${todoInf.title}</p>
                                        <p style="font-size: 12px;color:#9DA4AE">${todoInf.content}</p>
                                    </div>
                                    <div style="position: relative;">
                                        <i style="${todoInf.star? `color:#EF6820` : 'color:black'}" onclick="colorChange(event,previous);stopPropa(event)"  class="${todoInf.star? 'fa-solid' : 'fa-regular'} fa-star"></i>
                                        <div class="dupDel-${todoInf.id} parent-options" style="position: absolute;right: 0;width: 153px;height: 96px;padding: 8px;display: none;flex-direction: column;background: white;justify-content: space-between;border: 2px solid #F3F4F6;border-radius: 6px;color: #4D5761">
                                            <p onclick='filterDuplicate(this)' onmouseleave="this.style.background='white'" onmouseenter="this.style.background='#EF6820'" style="cursor: pointer;border-radius: 8px;padding: 8px"><i style="margin-right: 6px" class="fa-solid fa-clone"></i> Nhân đôi</p>
                                            <p onclick='filterDelete(this)' onmouseleave="this.style.background='white'" onmouseenter="this.style.background='#EF6820'" style="cursor: pointer;border-radius: 8px;;padding: 8px"><i class="fa-solid fa-trash-can"></i> Xoá</p>
                                        </div>
                                    </div>
                                </div>
                                <div style="display: flex;flex-direction: row;align-items: center;">
                                    ${todoInf.tag.map(item => {return `<p style="padding: 4px 12px;font-size: 12px;color: #4D5761">${item}</p>`}).join('')}
                                </div>
                                ${todoInf.repeat
                                ? 
                                `
                                    <div style="display: flex;flex-direction: row;align-items: center;gap: 8px;font-size: 14px;cursor: pointer;">
                                        <i style="color: #9DA4AE" class="fa-solid fa-repeat"></i>
                                        <i style="color: ${todoInf.repeat? '#F04438' : '#9DA4AE'}" id="abcd" class="fa-solid fa-calendar"></i>
                                        <p onclick="stopPropa(event);repeatToggle(event,previous)" style="color: ${todoInf.repeat? '#F04438' : '#9DA4AE'}" class="date">20/03/2025 - 07:00</p>
                                    </div>
                                ` 
                                :   ''
                                }
                            </div>
                        </div>
                    </div>
    `
}

function renderFilterContent(array){
    let button = document.querySelector('.toggleDisplay');
    array.forEach((item) => {
        if(item.content.length === 0){
                array = array.filter(item => item.content.length > 0)
            }
        } )
    if(array.length === 0){
        return `
            <div style="width: 397px;height: 248px;margin: auto;display: flex;flex-direction: column;gap: 24px;align-items: center;">
        <img src="/module2/LandingPage/LandingPage2/asset/Group 26810.png" alt="">
        <div style="display: flex;flex-direction: column;align-items: center;flex: 1;justify-content: space-between;">
            <p style="font-size: 24px;color: #4D5761;font-weight: 500;margin: 0;"> Tạo danh sách việc cần làm !</p>
            <button style="padding: 8px 14px;background: #EF6820;color: white; border: none;outline: none;border-radius: 8px;"> <i style="margin-right: 10px;" class="fa-solid fa-circle-plus"></i>Tạo mới</button>
        </div>
    </div>
        `
    }
    return `
    ${array.map((item,number) => {return `
        <div style='width:${button.getAttribute('data-status') === 'left'? '100%' : '30%'};height:auto;transition:  width 1s ease, height 1s ease;' class="content-body--${number+1} content-body--container">
            ${filterGroup(item)}
            <hr>
            <div style="display: flex;flex-direction: column;gap: 8px;">
            ${item.content.map((itemm) => {return `
                ${( () => {
                    return filterContent(itemm)
                })()
    }
            `}).join('<hr>')}
            </div>
        </div>
    `}).join('')}
`
}

function filterDelete(itemm){
    let bigContainer = itemm.closest('.content-body--container')
    // // document.getElementById('content').style.flex = 'none'
    bigContainer.style.height = 'auto'
    let container = itemm.closest('.parent')
    container.style.height = (container.scrollHeight ) + 'px'
    container.style.transition = 'all ease 0.5s'
    container.style.opacity = '0'
    setTimeout(()=>{container.style.height = '0' ; },300)
    let getClass = container.querySelector('.parent-options').className
    let getID = parseInt(getClass.match(/\d+/g).toString())
    // setTimeout(()=>{body.style.flexFlow = 'column wrap'},500)
    setTimeout(() => {
        filtered.forEach((item) => {
            let deleteItem = item.content.find((itemm) => itemm.id === getID)
            if(deleteItem){
                item.content = item.content.filter((itemm) => itemm.id !== getID)
            }
        } )
        previous.forEach((item) => {
            let deleteItem = item.content.find((itemm) => itemm.id === getID)
            let index = previous.findIndex(itm => itm.content.find(itmm => itmm.id === getID))
            let name = item.group
            if(deleteItem){
                item.content = item.content.filter((itemm) => itemm.id !== getID)
                pushRecycleBin('test',name,index,deleteItem)
            }
            if(item.content.length === 0){
                bigContainer.style.opacity = '0'
                previous = previous.filter(item => item.content.length > 0)
            }
        } )
    },200)
    filterMode = false
    setTimeout(() => {listFilter();filterMode = true},250)
}
function filterDuplicate(item){
    let container = item.closest('.parent')
    let getClass = container.querySelector('.parent-options').className
    let getID = parseInt(getClass.match(/\d+/g).toString())
    let choosedGroup = previous.find(item => item.content.find(itemm => itemm.id === getID))
    previous.forEach(itm => {
        let choosedItem = itm.content.find(itmm => itmm.id === getID)
        let index = itm.content.findIndex(itmm => itmm.id === getID)
        if(choosedItem) {
            let duplicatedItem = JSON.parse(JSON.stringify(choosedItem));
            choosedGroup.content.splice(index + 1,0,duplicatedItem)
        }
    })
    // dataCheck(renderNext7DaysContent(Next7DaysData))
    filterMode = false
    setTimeout(() => {listFilter();filterMode = true},250)
}
let star = document.getElementById('star')
let filterMode = true
let filteredStatus
function listFilter() {
    previous = currentTab
    if(currentTab) {
        filtered =
            currentTab.filter((item) => item.content.some(itm => itm.star === true))
                .map(itm =>
                ({
                    ...itm,
                    content: itm.content.filter(itmm => itmm.star === true)
                }))
    if(filterMode){
        if(star.classList.contains('fa-solid')) {
            star.classList.remove('fa-solid')
            star.classList.add('fa-regular');
            star.style.color = 'black'
            dataCheck(renderFilterContent(previous))
            filteredStatus = true
        }
        else  {
            star.classList.remove('fa-regular')
            star.classList.add('fa-solid');
            star.style.color = 'rgb(239, 104, 32)'
            dataCheck(renderFilterContent(filtered))
            filteredStatus = false
        }
    }
    else {
        if(filteredStatus){
            dataCheck(renderFilterContent(previous))
        }
        else {
            dataCheck(renderFilterContent(filtered))
        }
    } 
    }
    console.log('filter', filtered)
}
