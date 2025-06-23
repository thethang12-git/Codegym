// nhập 2 số kiểm tra a và b có chia hết cho nhau hay không
function kiemTraChia() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    
    if (isNaN(a) || isNaN(b)) {
        document.getElementById("result1").innerHTML = "Vui lòng nhập các số hợp lệ.";
        return;
    }
    
    if (b === 0) {
        document.getElementById("result1").innerHTML = "Không thể chia cho 0.";
        return;
    }
    
    if (a % b === 0) {
        document.getElementById("result1").innerHTML = `${a} chia hết cho ${b}.`;
    } else {
        document.getElementById("result1").innerHTML = `${a} không chia hết cho ${b}.`;
    }
}
//nhập tuổi và kiểm tra xem học sinh có đủ điều kiện vào lớp 10 không
function kiemTraTuoiVao10() {
    let tuoi = parseInt(document.getElementById("tuoi").value);
    
    if (isNaN(tuoi)) {
        document.getElementById("result2").innerHTML = "Vui lòng nhập tuổi hợp lệ.";
        return;
    }
    else if (tuoi >= 20 ) {
        document.getElementById("result2").innerHTML = "Đã quá tuổi, vui lòng đi học nghề";}
    else if (tuoi >= 15) {
        document.getElementById("result2").innerHTML = "Học sinh đủ điều kiện vào lớp 10.";
    }

    else {
        document.getElementById("result2").innerHTML = "Học sinh chưa đủ điều kiện vào lớp 10.";
    }
}

//nhập số nguyên và kiểm tra xem số đó lớn hay nhỏ hơn 10
function soSanhVoi10() {
    let so = parseInt(document.getElementById("so").value);
    if (isNaN(so)) {
        document.getElementById("result3").innerHTML = "Vui lòng nhập một số nguyên hợp lệ.";
        return;
    }
    if (so > 10) {
        document.getElementById("result3").innerHTML = `${so} lớn hơn 10.`;
    } else if (so < 10) {
        document.getElementById("result3").innerHTML = `${so} nhỏ hơn 10.`;
    } else {
        document.getElementById("result3").innerHTML = `${so} bằng 10.`;
    }
}
// nhập điểm giữa kỳ và điểm cuối kỳ, phân loại học lực
function xepLoaiHocLuc() {
    let diemGiuaKy = parseFloat(document.getElementById("diemGiuaKy").value);
    let diemCuoiKy = parseFloat(document.getElementById("diemCuoiKy").value);
    if( diemGiuaKy < 0 || diemCuoiKy < 0 || diemGiuaKy > 10 || diemCuoiKy > 10) { document.getElementById("result4").innerHTML = "nhập sai điểm, nhập lại"; return; };
    if (isNaN(diemGiuaKy) || isNaN(diemCuoiKy)) {
        document.getElementById("result4").innerHTML = "Vui lòng nhập điểm hợp lệ.";
        return;
    }
    
    let diemTrungBinh = (diemGiuaKy + diemCuoiKy) / 2;
    
    if (diemTrungBinh >= 8) {
        document.getElementById("result4").innerHTML = `Học lực xuất sắc với điểm trung bình là ${diemTrungBinh}.`;
    } else if (diemTrungBinh >= 6.5) {
        document.getElementById("result4").innerHTML = `Học lực khá với điểm trung bình là ${diemTrungBinh}.`;
    } else if (diemTrungBinh >= 5) {
        document.getElementById("result4").innerHTML = `Học lực trung bình với điểm trung bình là ${diemTrungBinh}.`;
    } else {
        document.getElementById("result4").innerHTML = `Học lực yếu với điểm trung bình là ${diemTrungBinh}.`;
    }
}

// Tính hoa hồng nhận được dựa trên doanh số bán hàng
function tinhHoaHong() {
    let doanhSo = parseFloat(document.getElementById("doanhSo").value);
    if (isNaN(doanhSo) || doanhSo < 0) {
        document.getElementById("result5").innerHTML = "Vui lòng nhập doanh số hợp lệ.";
        return;
    }
    
    let tiLeHoaHong = 0.1; // 10%
    let hoaHong = doanhSo * tiLeHoaHong;
    
    document.getElementById("result5").innerHTML = `Hoa hồng nhận được là: ${hoaHong} đồng.`;
}
//tính cước điện thoại dựa trên số phút gọi
function tinhCuocDienThoai() {
    let soPhut = parseInt(document.getElementById("soPhut").value);
    if (isNaN(soPhut) || soPhut < 0) {
        document.getElementById("result6").innerHTML = "Vui lòng nhập số phút hợp lệ.";
        return;
    }
    
    let cuocCoDinh = 5000; // Cước cố định
    let cuocTheoPhut = 200; // Cước theo phút
    let tongCuoc = cuocCoDinh + (soPhut * cuocTheoPhut);
    
    document.getElementById("result6").innerHTML = `Tổng cước điện thoại là: ${tongCuoc} đồng.`;
}