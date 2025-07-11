let lamp = new Lamp()
let switcher = new Switcher(lamp)
// switcher.switchButton()
let circle1 = new Circle(85,100,50,lamp.status ?'yellow' : 'gray')
circle1.createCircle()
document.getElementById('button').innerHTML = lamp.status ? 'tắt đèn' : 'bật đèn';
function toggle(){
    switcher.switchButton();
    lamp.display();
    // Xóa canvas cũ`
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const newColor = lamp.status ? 'yellow' : 'gray';
    const circle = new Circle(85, 100, 50, newColor);
    circle.createCircle();
    document.getElementById('button').innerHTML = lamp.status ? 'tắt đèn' : 'bật đèn';
}






