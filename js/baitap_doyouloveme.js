var no = document.getElementById("noButton");
function sayYes(){
    document.getElementById("question").innerHTML = "I love you too!";
}
function sayNo(){
    let randomPosition_Left =  Math.floor(Math.random() * 500) + 10;
    let randomPosition_Top = Math.floor(Math.random() * 500) + 10;
    no.style.left = randomPosition_Left + 'px'
    no.style.top = randomPosition_Top + 'px'
}
