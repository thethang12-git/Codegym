//logic: chèn 5 cái ảnh, set thứ tự cho các ảnh từ 1-5,  kiểm tra ảnh theo thứ tự thì là đúng, còn không theo thứ tự thì là sai
var i = 1
var a = document.getElementById('1')
var b = document.getElementById('2')
var c = document.getElementById('3')
var d = document.getElementById('4')
var e = document.getElementById('5')

var one = parseInt(a.id)
var two = parseInt(b.id)
var three = parseInt(c.id)
var four = parseInt(d.id)
var five = parseInt(e.id)

function checkk() {
  if (
    a.innerHTML == one &&
    b.innerHTML == two &&
    c.innerHTML == three &&
    d.innerHTML == four &&
    e.innerHTML == five
  ) {
    document.getElementById('result').innerHTML = 'chuẩn rồi';
  } 
  else {
    document.getElementById('result').innerHTML = 'sai rồi';
  }
}

function clickk(event){
    let current = parseInt(event.target.innerHTML);
    event.target.innerHTML = current + 1
    if( event.target.innerHTML == 6){
        event.target.innerHTML = 1
    }
}