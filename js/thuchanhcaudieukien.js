let diem1 = document.getElementById("diem1")  
let diem2 = document.getElementById("diem2")
function kiemTraDiem(){
    if (diem1.value <10 && diem1.value >= 0 && diem2.value <10 && diem2.value >= 0) {
        let diemTrungBinh = (parseFloat(diem1.value) + parseFloat(diem2.value)) / 2;
        if (diemTrungBinh >= 7) {
            document.getElementById("result").innerHTML = `Điểm trung bình là ${diemTrungBinh} - Good`;
        }
        else if (diemTrungBinh >= 5) {
            document.getElementById("result").innerHTML = `Điểm trung bình là ${diemTrungBinh} - Average`;
        }
        else {
            document.getElementById("result").innerHTML = `Điểm trung bình là ${diemTrungBinh} - Bad`;
        }
    }
    else {
        document.getElementById("result").innerHTML = "Điểm không hợp lệ. Vui lòng nhập điểm từ 0 đến 10.";
    }
}