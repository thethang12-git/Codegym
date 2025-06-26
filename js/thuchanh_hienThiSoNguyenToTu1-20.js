function run() {
    for (x = 1;x <= 20; x ++){
        let flag = true;
        if (x == 1 ){flag = false}
        else if (x == 2) {document.write(x + '<br>')}
        else {
        
        for (i = 2; i < x ; i++  ){
            if(x % i === 0){ flag = false ;break}
            
        }
        if(flag) {document.write(x + '<br>')}
    }}
}