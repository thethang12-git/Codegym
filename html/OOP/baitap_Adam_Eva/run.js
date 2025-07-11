let apple1 = new Apple()
let human1 = new Human('Adam','male',65)
let human2 = new Human ('Eva','female',55)
let result = document.getElementById('result')
function clickToEat(human,eatWhat){
    human.eat(apple1);
    result.innerHTML = `${human.name} đã ăn táo, số lượng táo còn lại là ${eatWhat.count}, cân nặng của ${human.name} lúc này là ${human.weight} cân`
}