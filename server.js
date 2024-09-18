const http = require('http-server');
const port = 9000;
const host = '127.0.0.1';

// Buat server http menggunakan http-server
const server = http.createServer({ root: './' });

// Menjalankan server
server.listen(port, host, () => {
  console.log(`\nServer telah berjalan di:`);
  console.log(`- http://${host}:${port}`);
  console.log(`\nSilahkan buka browser dan ketikkan alamat di atas`);
});
