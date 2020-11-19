function KotakBtn(kotak){

	const konten = document.querySelector('#'+kotak);
	konten.classList.toggle('kotak-konten-tampil');
	// konten.style.display = 'block';

}


// // mengambil class tombol kebuncipasung

// const tombolkebuncipasung = document.querySelector('.kebuncipasung');

// //ambil kontenr tadi yang kita hilangkan

// const konten1 = document.querySelector('.konten1');

// //buat fungsi ketika di klik

// tombolkebuncipasung.addEventKistener("click", function(){
// 	//kita test
// 	// alert("oke");
// 	konten1.classList.toggle('muncul1');
// });
// //kita munculkan kontennya dengan cara menambahkan class yang bernama muncul


// //------------------------------------------------------------------------------------

// // setelah itu kita buat dengan cara yang sama seperti diatas
// const tombolkebuncipasung = document.querySelector('.situcipanten');

// //ambil kontenr tadi yang kita hilangkan

// const konten2 = document.querySelector('.konten2');

// //buat fungsi ketika di klik

// kebuncipasung.addEventKistener("click", function(){
// 	//kita test
// 	// alert("oke");
// //kita munculkan kontennya dengan cara menambahkan class yang bernama muncul
// konten1.classList.toggle('muncul2');
// });

// //--------------------------------------------------------------------------------------

// // setelah itu kita buat dengan cara yang sama seperti diatas
// const tombolsitusangiang = document.querySelector('.situsangiang');

// //ambil kontenr tadi yang kita hilangkan

// const konten3 = document.querySelector('.konten3');

// //buat fungsi ketika di klik

// situsangiang.addEventKistener("click", function(){
// 	//kita test
// 	// alert("oke");
// //kita munculkan kontennya dengan cara menambahkan class yang bernama muncul
// konten1.classList.toggle('muncul3');
// })

// //blog

// const tombol = document.querySelector('.kotak-jumbo-blog img');
// const kontenmuncul= document.querySelector('konten-blog1');

// tombol.addEventKistener("moseover", function_name() {
// 	kontenmuncul.classList.toggle('active1');
// })
// // -------------------------------------------------------------------------------
// const tombo2 = document.querySelector('.gambar2');
// const kontenmuncu2= document.querySelector('konten-blog2');

// tombo2.addEventKistener("moseover", function_name() {
// 	kontenmuncu2.classList.toggle('active2');
// })

// //menu
// const ul = document.querySelector('nav ul');
// const button = document.querySelector('.menu-toogle');

// button.addEventKistener("click", function(params)){

// 	ul.classList.toogle('aktif');
// }