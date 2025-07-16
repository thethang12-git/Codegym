let tablee = ''
let BigArr = []
let val =  '';
let isTurn = true
let current = isTurn ? 'X' : 'Y'  ;
function creatCell(){
  for (let x = 0; x < 10; x++){
    let arr = []
    BigArr.push(arr)
    for(let y = 0; y < 10;  y++ ){
      arr.push(val)
    }
  }
}
creatCell();
//(BigArr)
for (let a = 0; a < 10; a++){
  tablee += '<tr>'
  for (let b = 0; b < 10; b++ ){
    tablee += `<td data-row="${a}" data-col="${b}" onclick="clickEvent(event);check();diagonalCheck(event)"> ${BigArr[a][b]} </td>`;
  }
  tablee += '</tr>'
}
document.getElementById('table').innerHTML = tablee

function clickEvent(event){
  let row = event.target.getAttribute('data-row');
  let col = event.target.getAttribute('data-col');
  let current = isTurn ? 'X' : 'Y'  ;
  //(BigArr);
  if(event.currentTarget.innerText !== ''){return}
  if (event.currentTarget.innerText === ''){
    event.currentTarget.innerHTML = current
    BigArr[row][col] = current;
  }
  if(isTurn){
    isTurn = false
  }
  else {isTurn = true}
}

function checkWin(){
   if(rowCheck()){return true}
   if(colCheck()){return true}
   if(diagonalCheck(event)){return true}
  return false
}

function check(){
  if (checkWin()){current = !current ; alert(`${current = isTurn ? 'Y' : 'X'} thắng`)}
}

function rowCheck(){
    let newArr = BigArr.flat()
    for (let x = 10; x < newArr.length; x += 11){newArr.splice(x,0,',')}
    let clone = []
    for(let x = 0;x < newArr.length; x++){
        if (newArr[x] !== '' && newArr[x] === newArr[x+1]){
            if(clone.length === 0){clone.push(newArr[x])}
            clone.push(newArr[x+1]);
            if (clone.length === 5){break}
        }
        else if(newArr[x] !== newArr[x+1]){
            clone = []
        }
    }
    if (clone.length === 5){
        return true
    }
}

function colCheck(){
    let CloneCol = []
  for (let x = 0; x < 10; x++) {
    let Clonearr = []
    CloneCol.push(Clonearr)
    for (let y = 0; y < 10; y++) {
      Clonearr.push(BigArr[y][x])
    }
  }
    let newArr = CloneCol.flat()
    for (let x = 10; x < newArr.length; x += 11){newArr.splice(x,0,',')}
    let clone = []
    for(let x = 0;x < newArr.length; x++){
        if (newArr[x] !== '' && newArr[x] === newArr[x+1]){
            if(clone.length === 0){clone.push(newArr[x])}
            clone.push(newArr[x+1]);
            if (clone.length === 5){break}
        }
        else if(newArr[x] !== newArr[x+1]){
            clone = []
        }
    }
    if (clone.length === 5){
        return true
    }
}

// function diagonalCheck(){
//     let diag = []
//     for(let x = 0; x < BigArr.length*2 - 1; x++){
//         let cloneDiag = []
//         diag.push(cloneDiag)
//         for (let y = 0; y < 5; y++){
//             if(x >= 1 && x + y <5 && cloneDiag.length == 5){cloneDiag.push(BigArr[x+y][y])}
//             else if (x == 0) {cloneDiag.push(BigArr[y][y+x])}
//         }
//     }
//     for(let a = 4;a >= 0; a--){
//         let cloneDiag = []
//         diag.push(cloneDiag)
//         for (let y = 0; y < 5; y++){
//
//             cloneDiag.push(BigArr[y][a-y])
//         }
//     }
//     let newdiag = diag.filter(item => {return item.length === 5})
//     //(newdiag)
//     for (let element of newdiag) {
//     if( element.every( valueee => valueee === 'X') || element.every(valueee => valueee === 'Y')) {return true}
//    }
//    return false
// }

function diagonalCheck(event) {
    let row = parseInt(event.target.getAttribute('data-row'));
    let col = parseInt(event.target.getAttribute('data-col'));
    let clone = []
    let condition = BigArr[row][col];
    if (!condition) {return}
    for (let x = 0;x < 5; x++){
        if (row - x >= 0  && BigArr[row][col] === BigArr[row + x][col +x]){console.log('hehe')}
        else if (
            row - x >= 0 &&
            col - x >= 0 &&
            BigArr[row][col] === BigArr[row - x][col - x]
        ) {
            console.log('hihi');
        }

        console.log(row, col);
    }
    console.log(clone.length);
}
//hehehe
//lặp x = 0 y = 0, chạy đến item of Bigarr, item.length, nếu item[1][0] = item [x +1][y+1], push vào clone[]
