function tinhToan() {
    var sotien = document.getElementById("sotien").value;
    var sothang = document.getElementById("sothang").value;
    var laisuat = 0.075
    var laisuatthang = laisuat / 12; 
    sotien = parseFloat(sotien);
    sothang = parseInt(sothang);
    var tongSoTien = sotien * laisuatthang * sothang + sotien;
    alert("Số tiền bạn nhận được là: " + tongSoTien + " đồng");
}