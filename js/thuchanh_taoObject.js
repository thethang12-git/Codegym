class Product {
    name;
    des;
    price;
    constructor(nameInput , desInput , priceInput){
        this.name = nameInput;
        this.des = desInput;
        this.price = priceInput;
    }
    getInfo(){
        return `sản phẩm ${this.name} với mô tả: ${this.des} có giá là ${this.price} `
    }
}

let product1 = new Product ('mazda', 'không mô tả' ,'986 triệu' )
let product2 = new Product ('camry', ' không cần mô tả', '1 tỷ 2')
let product3 = new Product ('audi', ' không mô tả' , '5 tỷ')
let arr = [product1, product2,product3]
for (let x = 0; x < arr.length; x++){
    document.write(arr[x].getInfo() + '<br>')
}

//Bài thực hành 2
class rectangle {
    width;
    height;
    constructor (width,height){
        this.width = width;
        this.height = height
    }
    getCircumference(){
        return `chu vi của hình là ${(this.width + this.height)*2} `
    } 
    getArea (){
        return `diện tích của hình là ${this.width * this.height} `
    }
}
let rec1 = new rectangle(20,30)
document.write(rec1.getCircumference() + 'và' + rec1.getArea() )

//bài 3: chuyển đổi nhiệt độ
class Convert {
    tem;
    constructor(tem){
        this.tem = tem
    }
    getFahrenheit(){
        let x = (this.tem * 9/5) +32;
        return `nhiet do F : ${x}`
    }
    getKelvin(){
        let x = this.tem +273.15
        return `nhiet do K : ${x}`
    }
}
let tem1 = new Convert(20) 
document.write(tem1.getFahrenheit() + '<br>' + tem1.getKelvin())
