let answer = prompt('ai day')
var count = 0
if ( answer === 'thang') {
    alert('chào Thắng, nhập mật khẩu nhé')
    let password = prompt('Nhập mật khẩu')
    if (password == 'xinchao'){alert('mật khẩu đúng rùi') }
    else {alert('Sai rồi')
    }
}
else if (answer == null || answer == '') {
    alert('bạn chưa nhập gì cả') }
else { alert('mày là thằng nào')}