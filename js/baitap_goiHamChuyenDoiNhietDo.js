let inputt = +prompt('convert from Fahrenheit to Celsius')
function temperatureConvert(F){
    return (F - 32)/1.8
}
alert(temperatureConvert(inputt).toFixed(1))