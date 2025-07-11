let battery1 = new Battery(100)
let battery2 = new Battery(10)
let lamp1 = new Lamp(false,battery2)
let statuss = document.getElementById('status')
// console.log(lamp1.status)
lamp1.getBatteryInfo()
function clickk(){
    if (lamp1.status){lamp1.turnOff()}
    else{lamp1.turnOn()}
    lamp1.light()
}