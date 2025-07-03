let confirmm = confirm('bộ phim hôm nay thế nào')
function answer(answerr){
    if(answerr) {
        return 'hay quá'
    }
    else {
        return 'chán phèo'
    }
}
alert(answer(confirmm))