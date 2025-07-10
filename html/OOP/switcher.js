class Switcher {
    constructor(lamp){
        this.lamp = lamp;
    }
    switchOn(){
        this.lamp.status = true;
    }
    switchOff(){
        this.lamp.status = false;
    }
    switchButton(){
        if (this.lamp.status){
            this.switchOff()
        }
        else{
            this.switchOn()
        }
    }
}
