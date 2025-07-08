let tem ='' ;
let inboxx = document.getElementById('inbox')
class phone{
    constructor(type){
        this.type = type;
    }
    sendMess(){
        tem = prompt('nhập tin nhắn để gửi đi')
        alert('đã gửi thư thành công')
    }
    checkInb(){
        let inbox = tem
        inboxx.innerHTML = `đây là tin nhắn mới : ${inbox}`
        tem = ''
    }
}
let phone1 = new phone('iphone')
let phone2 = new phone('nokia')

function inbCheck(){
    if(tem == ''){inboxx.innerHTML = 'hiện tại hòm thư đang trống'}
    else {
        inboxx.innerHTML ='đang có thư mới, bấm kiểm tra ngay'
    }
}