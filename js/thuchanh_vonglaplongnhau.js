for ( let i = 1 ; i <= 10; i++) {
    let row =''
    for (let x = 1; x <= 10; x++){
        row += (i * x) + '&nbsp;&nbsp;'
    }
    document.write( row +'<br>' )
}
