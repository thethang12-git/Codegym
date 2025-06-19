function checkLeapYear() {
    const yearInput = document.getElementById("yearInput").value;
    let year = parseInt(yearInput);
    if (yearInput === "" || isNaN(year) || year < 0) {
        document.getElementById("result").innerHTML = "Vui lòng nhập một năm hợp lệ.";
        return;
    }
    else {
        if (year % 4 == 0 && year % 100 !== 0) {
            document.getElementById("result").innerHTML = year + " là năm nhuận.";
        }
        else if (year % 400 == 0) {
            document.getElementById("result").innerHTML = year + " là năm nhuận.";
        }
        else {
            document.getElementById("result").innerHTML = year + " không phải là năm nhuận.";
        }
    }

}