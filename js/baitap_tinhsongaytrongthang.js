//  cách 1
var month = document.getElementById('month')
// const day = new Date();
// const year = day.getFullYear();
// function runn(event){
//      event.preventDefault();
//      if (!month.value.trim() || month.value <= 0 || month.value >= 13) return
//     let monthCount = new Date(year, month.value, 0).getDate();
//     document.getElementById('result').innerHTML = `số ngày trong tháng ${month.value} là ${monthCount}`;
//     month.value = '';
// }
// cách 2
function runn(event) {
    event.preventDefault();
    const monthNumber = parseInt(month.value);
    if (!monthNumber || monthNumber < 1 || monthNumber > 12) return;
    let days;
    switch (monthNumber) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            days = 31;
            break;
        case 4: case 6: case 9: case 11:
            days = 30;
            break;
        case 2:
            days = 28; 
            break;
    }

    document.getElementById('result').innerText = `Số ngày trong tháng ${monthNumber} là ${days}`;
    month.value = '';
}
