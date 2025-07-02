//Bài 1
function bai1(){
    let myColor = ["Red", "Green", "White", "Black"];
    let format = myColor.join(',')
    document.write(format)
}

//bài 2
function bai2(){
    let stringg = "025468"
    let arr = [...stringg]
    for (let x = 0; x < arr.length; x++) {
        if ( arr[x] % 2 == 0 && arr[x + 1] % 2 == 0){
            arr.splice((x+1),0,'-')
        }
    }
    document.write(arr.join(''))
}

//bài 3
function bai3(){
    let stringg = 'The Quick Brown Fox';
    let arr = [...stringg];
    let format = arr.map(item => {
        if(item ===  item.toUpperCase()){
            return item.toLowerCase();
        }
        else {
            return item.toUpperCase();
        }
    })
    document.write(format.join(''))
}