class Battery{
    constructor(energy){
        this.energy = energy;
    }
    getEnergy(){
        if (this.energy < 100){ this.energy++;}
    }
    decreaseEnergy(energy){
        if (energy > 0){
            this.energy--
            document.getElementById('batteryEnergy').innerHTML = `số pin còn lại là ${this.energy}%`
        }
        if (this.energy === 0){statuss.innerHTML = 'hết pin rồi'}
    }
}
