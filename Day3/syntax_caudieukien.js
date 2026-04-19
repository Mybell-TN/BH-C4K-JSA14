var age = 30;

if (age >= 30) {
    console.log("Đủ tuổi uống rượu");
} else {
    console.log("Không đủ tuổi uống rượu");
}

// ===================================
var toan = 1;
var ly = 5;
var tiengAnh = 10;
var diemTB = (toan + ly + tiengAnh) / 3;

if (diemTB >= 9 && diemTB <= 10) 
{
    console.log("Xuất sắc");
} 
else if (diemTB >= 8 && diemTB <= 8.9)
{
    console.log("Điểm giỏi");
}
else if (diemTB >= 7 && diemTB <= 7.9)
{
    console.log("Điểm Khá");
}
else if (diemTB >= 5 && diemTB <= 6.9)
{
    console.log("Điểm Trung Bình");
} 
else if (diemTB >= 4 && diemTB <= 4.9)
{
    console.log("Điểm Yếu");
}
else
{
    console.log("Điểm Kém");
}