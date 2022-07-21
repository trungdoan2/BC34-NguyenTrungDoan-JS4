document.getElementById ('ketQua').onclick = function () {
    var a = document.getElementById ('soThu1').value * 1;
    var b = document.getElementById ('soThu2').value * 1;
    var c = document.getElementById ('soThu3').value * 1;
    
    if (a > b &&  a > c) {
      ketQua =  "<p> Kết quả là: "+ c +" < " + b +" < " + a +" </p>";
    }else if (a > b && c > b && a > c) {
        ketQua =  "<p> Kết quả là: "+ b +" < " + c +" < " + a +" </p>";
    }else if (a > b && c > a) {
        ketQua =  "<p> Kết quả là: "+ b +" < " + a +" < " + c +" </p>";
    }else if ( b > a && b > c) {
        ketQua =  "<p> Kết quả là: "+ a +" < " + c+" < " + b +" </p>";
    }else if ( b > c && c > a) {
        ketQua =  "<p> Kết quả là: "+ a +" < " + c +" < " + b +" </p>";
    }else {
        ketQua =  "<p> Kết quả là: "+ a +" < " + b +" < " + c +" </p>";
    }

    document.getElementById ('thongBao').innerHTML = ketQua;
}

document.getElementById ('btnChao').onclick = function () {
    var thanhVien = document.getElementById ('thanhVien').value;
     console.log(thanhVien);

     if (thanhVien === "Bố") {
        loiChao = "<p> Xin Chào Bố</p>"
     }else if (thanhVien === "Mẹ") {
        loiChao = "<p> Xin Chào Mẹ</p>"
     } else if (thanhVien === "Anh Trai") {
        loiChao = "<p> Xin Chào Anh Trai</p>"
     } else if (thanhVien === "Em Gái") {
        loiChao = "<p> Xin Chào Em Gái</p>"
     }else {
        loiChao = "<p> Xin Chào Người Lạ !!</p>"
     }





     document.getElementById ('thongBaoLoiChao').innerHTML = loiChao;
}

document.getElementById ("btnDemSo").onclick = function () {
    var num1 = document.getElementById ('num1').value * 1;
    var num2 = document.getElementById ('num2').value * 1;
    var num3 = document.getElementById ('num3').value * 1;
    var soChan = 0;
    
   if (num1 && num2 && num3 % 2 ==0 ) {
    soChan1 = ((soChan++) + 3 *1 ) ;
    ketQua = "<p> có " + soChan1 +" số chẵn, " + (3-soChan1) +" số lẻ     </p>"
   }else if (num1 && (num2 || num3)  % 2 ==0) {
    soChan1 = ((soChan++) + 2 *1 ) ;
    ketQua = "<p> có " + soChan1 +" số chẵn, " + (3-soChan1) +" số lẻ     </p>"
   } else {
    ketQua = "<p> có " + soChan +" số chẵn, " + (3-soChan) +" số lẻ     </p>"
   }

   

  document.getElementById ('thongBaoDemSo').innerHTML = ketQua;
}

document.getElementById ('btnDuDoan').onclick =function () {
    var a = document.getElementById('canh1').value * 1;
    var b = document.getElementById('canh2').value * 1;
    var c = document.getElementById('canh3').value * 1;
  
    if((a == b) && (b == c))
		{
			ketQua = "<p> Hình Tam Giác Đều</p>";
		}
		else
		{
			if(a * a + b * b == c * c || a * c + c * c == b * b || b * b + c * c == a * c)
			{
				ketQua = "<p> Hình Tam Giác Vuông</p>";
			}
			if(a == b || a == c || b == c)
		    {
          ketQua = "<p> Hình Tam Giác Cân </p>";
		    }
			else
			{
				ketQua = "<p>  Tam Giác Khác </p>";
			}
		}
    document.getElementById("thongBaoTamGiac").innerHTML = ketQua;
	}

    document.getElementById ("btnNgayHomQua").onclick = function () {
    

    }
   
    document.getElementById ("btnTinhDate").onclick = function () {
        var thang = document.getElementById('date').value *1;
        var nam = document.getElementById('year').value *1;
       console.log(thang,nam);

        if (thang == 4 || thang ==6 || thang == 9 || thang ==11) {
            ketQua = "<p> Tháng  " + thang +" năm " + nam + " có 30 ngày</p>"
        }else if (thang == 2) {
            if ((nam % 4 == 0 && nam % 100 != 0) || (nam % 400 == 0)) {
                ketQua = "<p> Tháng  " + thang +" năm " + nam + " có 29 ngày</p>"
            }else {
                ketQua = "<p> Tháng  " + thang +" năm " + nam + " có 28 ngày</p>" 
            }
        }else {
            ketQua = "<p> Tháng  " + thang +" năm " + nam + " có 31 ngày</p>" 
        }

        document.getElementById ('thongBaoNgay').innerHTML = ketQua;
    }

    document.getElementById ('btnDocSo').onclick = function () {
        var i = document.getElementById ('soCo3').value * 1;
   

        if (i > 999 || i < 100) {
            ketQua = "Không Phải Số có 3 Chữ Số"
        } else {
            donvi = i % 10; //12
            chuc = Math.floor(i/10%10);
             tram =  Math.floor(i / 100);
            if (tram == 1) {
                tram = "Một trăm";
            }else if (tram == 2) {
                tram = "Hai trăm";
            }else if (tram == 3) {
                tram = "Ba trăm";
            }else if (tram == 4) {
                tram = "Bốn trăm";
            }else if (tram == 5) {
                tram = "Năm trăm";
            }else if (tram == 6) {
                tram = "Sáu trăm";
            }else if (tram == 7) {
                tram = "Bảy trăm";
            }else if (tram == 8) {
                tram = "Tám trăm";
            }else if (tram == 9) {
                tram = "Chín trăm";
            }

            if (chuc == 1) {
                chuc = "Mười"
            }else if (chuc == 2) {
                chuc = "Hai Mươi"
            }else if (chuc == 3) {
                chuc = "Ba Mươi"
            }else if (chuc == 4) {
                chuc = "Bốn Mươi"
            }else if (chuc == 5) {
                chuc = "Năm Mươi"
            }else if (chuc == 6) {
                chuc = "Sáu Mươi"
            }else if (chuc == 7) {
                chuc = "Bảy  Mươi"
            }else if (chuc == 8) {
                chuc = "Tám  Mươi"
            }else if (chuc == 9) {
                chuc = "Chín Mươi"
            }else if (chuc == 0) {
                chuc = ""
            }
            if (donvi == 1) {
                donvi = "Một"
            }else if (donvi == 2) {
                donvi = "Hai"
            }else if (donvi == 3) {
                donvi = "Ba"
            }else if (donvi == 4) {
                donvi = "Bốn"
            }else if (donvi == 5) {
                donvi = "Năm"
            }else if (donvi == 6) {
                donvi = "Sáu"
            }else if (donvi == 7) {
                donvi = "Bảy"
            }else if (donvi == 8) {
                donvi = "Tám"
            }else if (donvi == 9) {
                donvi = "Chín"
            }else if (donvi == 0) {
                donvi = ""
            }
            ketQua = "<p>"+ tram +" " + chuc +" " + donvi +"</p>"
        }
        document.getElementById ('thongBaoSo').innerHTML = ketQua;
    }


    document.getElementById ('btnS').onclick = function () {
        var hoTen1 = document.getElementById ('hoTen1').value;
        var hoTen2 = document.getElementById ('hoTen2').value;
        var hoTen3 = document.getElementById ('hoTen3').value;
         
         
        var x = document.getElementById('x').value * 1;
        var y = document.getElementById('y').value * 1;
       
 
        var x1 = document.getElementById('x1').value * 1;
        var y1 = document.getElementById('y1').value * 1;
        d1 = Math.sqrt(((x1 - x)*(x1-x)) +((y1 - y)*(y1-y)) );

        var x2 = document.getElementById('x2').value * 1;
        var y2 = document.getElementById('y2').value * 1;
        d2 = Math.sqrt(((x2 - x)*(x2 - x)) +((y2 - y)*(y2 - y)) );

        var x3 = document.getElementById('x3').value * 1;
        var y3 = document.getElementById('y3').value * 1;
        d3 = Math.sqrt(((x3 - x)*(x3 - x)) +((y3 - y )*(y3 - y)) );

        if ( d1 > d2 && d2 > d3) {
            ketQua = "<p>Sinh Viên "+ hoTen1 +" xa trường nhất</p>"
        }else if (d1 < d2 && d2 > d3) {
            ketQua = "<p>Sinh Viên "+ hoTen2 +" xa trường nhất</p>"
        }else if (d1 < d2 && d2 < d3) {
            ketQua = "<p>Sinh Viên "+ hoTen3 +" xa trường nhất</p>"
        }
        document.getElementById ('thongBaoQuangDuong').innerHTML = ketQua;
    }

