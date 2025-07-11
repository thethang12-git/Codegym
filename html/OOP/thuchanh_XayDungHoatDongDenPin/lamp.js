class Lamp {
    constructor(status,battery) {
        this.status = status ? 'ĐÈN BẬT' : 'ĐÈN TẮT';
        this.battery = battery
    }
    getBatteryInfo(){
        if(this.battery){
            statuss.innerHTML = 'đã có pin';
        }
        else {
            statuss.innerHTML = 'chưa có pin, vui lòng lắp pin';
        }
    }
    light(){
        if (this.status && this.battery.energy > 0){
            statuss.innerHTML = 'đèn đang bật'
        }
        else if(this.status === false && this.battery.energy > 0) {
            statuss.innerHTML = 'đèn đang tắt'
        }
    }
    turnOn(){
        this.status = true;
        this.battery.decreaseEnergy(this.battery.energy)
    }
    turnOff(){
        this.status = false;
    }
}
