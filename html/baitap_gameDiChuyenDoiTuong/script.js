/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }

    this.moveRight = function(){
        this.left += 20;
        console.log('ok: ' + this.left);
    }
    this.moveLeft = function(){
        this.left -= 20;
        console.log('ok: ' + this.left);
    }
    this.moveTop = function(){
        this.top -= 20;
        console.log('ok: ' + this.top);
    }
    this.moveBottom = function(){
        this.top += 20;
        console.log('ok: ' + this.top);
    }
}

var hero = new Hero('Charizard.png', 20, 30, 200);

function start(event){
    // if(hero.left < window.innerWidth - hero.size){
    //     hero.moveRight();
    // }
    switch (event.key){
        case 'ArrowUp' :
            if (hero.top <= 0) {
                return
            } else {
                hero.moveTop();
            }
            break;
        case 'ArrowDown' :
            if (hero.top >= window.innerHeight - hero.size) {
                return
            } else {
                hero.moveBottom();
            }
            break;
        case 'ArrowLeft' :
            if (hero.left <= 0) {
                return
            } else {
                hero.moveLeft();
            }
            break;
        case 'ArrowRight' :
            if (hero.left >= window.innerWidth - hero.size - 1000) {
                return
            } else {
                hero.moveRight();
            }
            break;
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
}
document.addEventListener('keydown',start)


