let flag = false;
class Human {
    constructor(name,gender,weight){
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }
    eat(something){
        if(flag) return
        if(something.decrease()){
            this.weight++
        }
        if(something.count == 0){
            console.log(this.name + ' đã ăn quả cuối ');
            flag = true
            
        }
    }
    say(){
        alert(this.name + ' nói : ' + prompt('nói'))
    }
}


