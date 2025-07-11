class Switcher {
    constructor(status,lamp){
        this.status = status;
        this.lamp = lamp;
    }
    connectToLamp(lamp){
        this.lamp = lamp;
        console.log('connected to Lamp!!!')
    }
    switchOff(){
        this.lamp.status = false;
        this.status = false;
    }
    switchOn(){
        this.lamp.status = true;
        this.status = true;
    }
    switchButton(){
        if(this.status){this.switchOff()}
        else{this.switchOn()}
    }
}

class Lamp {
    constructor(status){
        this.status = status;
    }
    electricLamp(){
        console.log(this.status ? 'bóng đèn đang bật' : 'bóng đèn đang tắt')
    }
}

// ini
let myLamp = new Lamp(false);
let mySwitcher = new Switcher(false,myLamp);
mySwitcher.connectToLamp(myLamp);
for (let i = 1; i <= 10; i++) {
    console.log(`Lần ${i}:`);
    mySwitcher.switchButton();
    myLamp.electricLamp();
}