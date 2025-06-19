// function tinhTienDien() {
//     var soDien = document.getElementById("soDien").value;
//     var donGia;
//     soDien = parseFloat(soDien);
//     if (soDien < 50) {
//         donGia =1984
//         parseFloat(donGia);
//     }
//     else if (soDien < 100) {
//         donGia = 2050;
//         parseFloat(donGia);
//     } else if (soDien < 200) {
//         donGia = 2380;
//         parseFloat(donGia);
//     } else if (soDien < 300) {
//         donGia = 2998;
//         parseFloat(donGia);
//     } else if (soDien < 400) {
//         donGia = 3550;
//         parseFloat(donGia);
//     } else {
//         donGia = 3460;
//         parseFloat(donGia);
//     }     
//     var tongTien = soDien * donGia;
//     document.getElementById("result").innerHTML = "Tổng tiền điện: " + tongTien + " VND";
// }

// tính lũy kế
function tinhTienDien() {
    var soDien = document.getElementById("soDien").value;
    var donGia;
    if (soDien < 50) {
        donGia = 1984;
        var tongTien = soDien * donGia;
        document.getElementById("result").innerHTML = "Tổng tiền điện: " + tongTien + " VND";
    }
    else if (soDien < 100) {
        donGia = 2050;
        var tongTien = (50 * 1984) + ((soDien - 50) * donGia);
        document.getElementById("result").innerHTML = "Tổng tiền điện: " + tongTien + " VND";
    }
    else if (soDien < 200) {
        donGia = 2380;
        var tongTien = (50 * 1984) + (50 * 2050) + ((soDien - 100) * donGia);
        document.getElementById("result").innerHTML = "Tổng tiền điện: " + tongTien + " VND";
    }
    else if (soDien < 300) {
        donGia = 2998;
        var tongTien = (50 * 1984) + (50 * 2050) + (100 * 2380) + ((soDien - 200) * donGia);
        document.getElementById("result").innerHTML = "Tổng tiền điện: " + tongTien + " VND";
    }
    else if (soDien < 400) {
        donGia = 3550;
        var tongTien = (50 * 1984) + (50 * 2050) + (100 * 2380) + (100 * 2998) + ((soDien - 300) * donGia);
        document.getElementById("result").innerHTML = "Tổng tiền điện: " + tongTien + " VND";
    }
    else {
        donGia = 3460;
        var tongTien = (50 * 1984) + (50 * 2050) + (100 * 2380) + (100 * 2998) + (100 * 3550) + ((soDien - 400) * donGia);
        document.getElementById("result").innerHTML = "Tổng tiền điện: " + tongTien + " VND";
    }
}