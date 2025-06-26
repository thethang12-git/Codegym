let html = ''
for (i = 2;i< 10;i++){
    html +='<tr>'
    for(x = 1;x < 10; x++)
    {
        html+= '<td style="border: 1px solid black;">'
        html += i + ' x' + x + '=' + i*x 
        html += '</td>'
    }
    html+= '</tr>'
}
document.getElementById('main').innerHTML = html