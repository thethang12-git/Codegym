let tablee = ''
let BigArr = []
let val = ''
let isTurn = true
let current = isTurn ? 'X' : 'Y'  ;
function creatCell(){
  for (let x = 0; x < 5; x++){
    let arr = []
    BigArr.push(arr)
    for(let y = 0; y < 5;  y++ ){
      arr.push(val)
    }
  }
}
creatCell();
console.log(BigArr)
for (let a = 0; a < 5; a++){
  tablee += '<tr>'
  for (let b = 0; b < 5; b++ ){
    tablee += `<td data-row="${a}" data-col="${b}" onclick="clickEvent(event);check();diagonalCheck()"> ${BigArr[a][b]} </td>`;
  }
  tablee += '</tr>'
}
document.getElementById('table').innerHTML = tablee

function clickEvent(event){
  let row = event.target.getAttribute('data-row');
  let col = event.target.getAttribute('data-col');
  let current = isTurn ? 'X' : 'Y'  ;
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
   for (let element of BigArr) {
    if( element.every( valueee => valueee === 'X') || element.every(valueee => valueee === 'Y')) {return true}
   }
   if(colCheck()){return true}
   if(diagonalCheck()){return true}
  return false
}

function check(){
  if (checkWin()){current = !current ; alert(`${current = isTurn ? 'Y' : 'X'} thắng`)}
}

function colCheck(){
    let CloneCol = []
  for (let x = 0; x < 5; x++) {
    let Clonearr = []
    CloneCol.push(Clonearr)
    for (let y = 0; y < 5; y++) {
      Clonearr.push(BigArr[y][x])
    }
  }
  for(let item of CloneCol){
    if(item.every( valueee => valueee === 'X') || item.every(valueee => valueee === 'Y')) {return true}
  }
  return false
console.log(CloneCol)
}

function diagonalCheck(){
    let diag = []
    for(let x = 0; x < BigArr.length*2 - 1; x++){
        let cloneDiag = []
        diag.push(cloneDiag)
        for (let y = 0; y < 5; y++){
            if(x >= 1 && x + y <5 && cloneDiag.length == 5){cloneDiag.push(BigArr[x+y][y])}
            else if (x == 0) {cloneDiag.push(BigArr[y][y+x])}
        }
    }
    for(let a = 4;a >= 0; a--){
        let cloneDiag = []
        diag.push(cloneDiag)
        for (let y = 0; y < 5; y++){
            
            cloneDiag.push(BigArr[y][a-y])
        }
    }
    let newdiag = diag.filter(item => {return item.length === 5})
    console.log(newdiag)
    for (let element of newdiag) {
    if( element.every( valueee => valueee === 'X') || element.every(valueee => valueee === 'Y')) {return true}
   }
   return false
}

// 