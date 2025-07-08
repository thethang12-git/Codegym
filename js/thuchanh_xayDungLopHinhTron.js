class circle{
    constructor(radius,color){
        this.radius = radius;
        this.color = color
    }
    getArea(){
        return Math.PI * this.radius * this.radius
    }
}
let circle1 = new circle(2,'neon')
document.write("the circle's Area" + ' with radius = '+ circle1.radius + ': '  + circle1.getArea())