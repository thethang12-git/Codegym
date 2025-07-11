class ball{
    constructor(x,y,radi,color){
        this.x = x;
        this.y = y;
        this.radi = radi;
        this.color = color;
    }
    draw(){
        let canvas = document.getElementById('myCanvas')
        let ctx= canvas.getContext('2d')
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radi,0,Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
}
let ball1 = new ball(100 , 200,50,'blue')
ball1.draw()

class rect{
    constructor(x,y,width,height,color){
        this.x = x;
        this.y = y;
        this.width= width;
        this.height = height;
        this.color = color;
    }
    draw(){
        let canvas = document.getElementById('myCanvas')
        let ctx= canvas.getContext('2d')
        ctx.beginPath();
        ctx.rect(this.x,this.y,this.width,this.height);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
}
let rect1 = new rect(300,200,20,50,'green')
rect1.draw()