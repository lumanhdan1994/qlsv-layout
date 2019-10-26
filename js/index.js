var sinhVien = {
    maSV: "",
    hoTen: "",
    loaiSV: "",
    diemToan: 0,
    diemVan: 0,
}
sinhVien.diemTB = function () {
    return (sinhVien.diemToan + sinhVien.diemVan) / 2;
}
sinhVien.xepLoai = function () {
    if (sinhVien.diemTB() < 5) {
        return "Yếu";
    } else if (sinhVien.diemTB() > 5 && sinhVien.diemTB() < 6.5) {
        return "Trung Bình";
    } else if (sinhVien.diemTB() > 6.5 && sinhVien.diemTB() < 8) {
        return "Khá";
    } else if (sinhVien.diemTB() > 8 && sinhVien.diemTB() < 9) {
        return "Giỏi";
    } else {
        return "Xuât Sắc";
    }
}


// DOM 
function dom(tagname) {
    return document.querySelectorAll(tagname);
}
function LayThongTin() {
    sinhVien.maSV = dom("#txtMaSV")[0].value;
    sinhVien.hoTen = dom("#txtTenSV")[0].value;
    sinhVien.loaiSV = LayThongTinLoaiSV("#loaiSV");
    sinhVien.diemToan = parseFloat(dom("#txtDiemToan")[0].value);
    sinhVien.diemVan = parseFloat(dom("#txtDiemVan")[0].value);
}
function LayThongTinLoaiSV(tagname) {
    var thutu_option = dom(tagname)[0].selectedIndex;
    var lua_chon = dom(tagname)[0].options;
    return lua_chon[thutu_option].text;
}


dom(".btn")[0].addEventListener("click", function () {
    LayThongTin();
    dom("#spanTenSV")[0].innerHTML = sinhVien.hoTen;
    dom("#spanMaSV")[0].innerHTML = sinhVien.maSV;
    dom("#spanLoaiSV")[0].innerHTML = sinhVien.loaiSV;
    dom("#spanDTB")[0].innerHTML = sinhVien.diemTB();
    dom("#spanXepLoai")[0].innerHTML = sinhVien.xepLoai();
})