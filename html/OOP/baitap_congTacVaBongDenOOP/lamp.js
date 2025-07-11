class Lamp{
    constructor(status){
        this.status = status;
    }
    display(){
        if (this.status == null){
            console.log('đèn chưa được cắm điện')
        }
        else if (this.status){console.log('đèn đã được bật')}
        else{console.log('đèn đã tắt')}
    }
}

class Circle {
    constructor(x, y, radius,color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }

    createCircle() {
        var ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}