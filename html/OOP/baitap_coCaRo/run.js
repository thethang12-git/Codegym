let tablee = ''
let BigArr = []
let val =  '';
let isTurn = true
let current;
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
  isTurn = !isTurn
  return current
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

function diagonalCheck(event) {
    let row = parseInt(event.target.getAttribute('data-row'));
    let col = parseInt(event.target.getAttribute('data-col'));
    let count = 1
    let count1 = 1
    let clone = test3(event)
    for (let x = 0;x < clone.length -1;x++ ){
      if (clone[x] !== '' && clone[x] === clone[x + 1]) {
      count++;
      if (count >= 5) {
        console.log('jes hé');
        break;
  }
      } 
      else {
        count = 1;
      }
    }
    let clone1 = test4(event)
    for(let x = 0; x < clone1.length - 1;x++){
      if(!clone1[x+1] || clone1[x] === '' || clone1[x] == undefined){continue}
      if(clone1[x] === clone1[x+1]){
        count1++
      }
      else {count1 = 1}
      if(count1 >= 5){console.log('hehehehehe'); break}
    }
    console.log(clone,count,clone1,count1)
    if(count >= 5 || count1 >= 5){return true}
    return false
  }

// cách 1:
// function test1(event){
//     let row = parseInt(event.target.getAttribute('data-row'));
//     let col = parseInt(event.target.getAttribute('data-col'));
//     count = 1
//     console.log(row,col)
//     for (let x = 1; x < 6;x++){
//       if(!BigArr[row + x]){break}
//       // console.log(BigArr[row][col],BigArr[row+x][col+x] , BigArr.length)
//       // if (row + x > BigArr.length || col + x > BigArr[0].length) {console.log('eee')}
//       if(BigArr[row][col] === BigArr[row + x][col + x]){count++}
//       else {break}
//     }
//     console.log('count =' + count)
// }
// function test2(event){
//     let row = parseInt(event.target.getAttribute('data-row'));
//     let col = parseInt(event.target.getAttribute('data-col'));
//     count = 1
//     for (let x = 1; x <6; x++){
//       if(!BigArr[row - x]){break}
//       if(BigArr[row][col] ===  BigArr[row - x][col - x]){
//         count++
//       }
//       else {break}
//     }
//     console.log('count ở test 2 là' + count)
// }

// Cách 2:
// function test3(event){
//   let row = parseInt(event.target.getAttribute('data-row'));
//   let col = parseInt(event.target.getAttribute('data-col'));
//   let current = col - row
//   let clone = []
//   if(current >= 0){
//     for(let x = 0; x <= 9; x++ ){
//     if(current + x == BigArr.length){break}
//     else {clone.push(BigArr[x][current + x])}
    
//   }}
//   else {
//     for (let y = 0; y <= 9; y++){
//       if(Math.abs(current) + y == BigArr.length ){break}
//       else {
//         clone.push(BigArr[Math.abs(current) + y][y])
//       }
//     }
//   }
//   return clone
// }

function test3(event){
  let row = parseInt(event.target.getAttribute('data-row'));
  let col = parseInt(event.target.getAttribute('data-col'));
  let current = col - row
  let clone = []
  for (let x = 0; x <= BigArr.length - 1;x++){
    if(!BigArr[x][current+ x]){clone.push('')}
    else {clone.push(BigArr[x][current +x ])}
  }
  return clone
}

function checkWin(){
  if(rowCheck()){return true}
  if(colCheck()){return true}
  // if(diagonalCheck(event)){return true}
  return false
}

function check(){
  if (checkWin()){current = !current ; alert(`${current = isTurn ? 'Y' : 'X'} thắng`)}
}




function test4(event){
  let row = parseInt(event.target.getAttribute('data-row'));
  let col = parseInt(event.target.getAttribute('data-col'));
  let current = col + row
  let clone = []
  for(let x = 0;x <= BigArr.length - 1;x++){
    if(current - x < 0 || !BigArr[x][current -x]){clone.push('');continue}
    clone.push(BigArr[x][current - x])
  }
  return clone
}