========================= SEBELUM MENJALANKAN WEBSITE
- pastikan sudah terinstall node js
- jalankan perintah npm install
- pastikan database sudah di import
- jalankan perintah npm run dev, kemudian buka browser http://localhost:3000

// jika database tidak diimport
- jalankan perintah sequelize db:create, jika gagal jalankan perintah npx sequelize-cli db:create
- jalankan perintah sequelize db:migrate, jika gagal jalankan perintah npx sequelize-cli db:migrate

tgl-pinjam = 
estimasi = 7
tgl-kembali = 
totalDenda = 

let hasil = tgl-kembali - tgl-pinjam = 10

if (hasil > estimasi) {
    let operasi = hasil - estimasi;
    let jumlahdenda = operasi * 500;
    return jumlahdenda;
}

totalDenda = jumlahdenda

