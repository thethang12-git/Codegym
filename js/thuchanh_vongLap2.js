function bai1() {
    for (let i = 1; i <= 5; i++) {
         let sao = '';
        for (let j = 1; j <= i; j++) {
            sao += '*';   
        }
        document.write(sao + '<br>');
    }
    document.write('<br>')
    for (let i = 5; i >= 1; i--) {
         let sao2 = '';
        for (let j = 1; j <= i; j++) {
            sao2 += '*';   
        }
        document.write(sao2 + '<br>');
    }
    document.write('<br>')
    for (let i = 1; i <= 5; i++) {
         let sao3 = '';
         let space = '';
         for (let s = 1; s <= 5 - i; s++) {
            space += '&nbsp;';  
        }
        for (let j = 1; j <= i; j++) {
            sao3 += '*';  } 
        document.write(space + sao3 + '<br>');
    }
}
