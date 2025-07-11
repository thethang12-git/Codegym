class Apple {
    constructor() {
        this.count = 10
    }
    isEmpty(){
        if(this.count > 0){
            console.log(this.count)
            return false
        }
        else { console.log('hết táo rồi !!!')
            return true
        }
    }
    decrease(){
        if(!this.isEmpty()){  
            this.count--
            return true
        }
        else {return false}
    }

}



//apple: decrease(),isEmpty(),getWeight()