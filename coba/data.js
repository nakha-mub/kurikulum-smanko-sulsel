fetch('DataSiswa.txt')
      .then(response => {
        if (!response.ok) {
          throw new Error('Gagal mengambil data');
        }
        return response.text();
      })
      .then(data => {
        document.getElementById('output').textContent = data;
      })
      .catch(error => {
        document.getElementById('output').textContent = 'Terjadi kesalahan: ' + error.message;
      });

const rawData = document.getElementById('output').textContent;


/*const rawData = `
XII IPA 1	22231001	78687146	A. ARYA INDRA RABBANI	L	SEPAK BOLA	LULUS
XII IPA 1	22231013	68864284	ACHMAD HAMZAH	L	KARATE	LULUS
`; // Tempelkan seluruh isi file di sini
*/

const students = rawData.trim().split('\n').map(line => {
  const [kelas, nis, nisn, nama, jk, cabor, status] = line.split('	');
  return { kelas, nis, nisn, nama, jk, cabor, status };
});

console.log(students);


/*const students = [
  {
    nisn: "0041957865",
	nis: "242500212",
    nama: "Andi Prasetyo",
    kelas: "XII IPA 1",
	jk: "Laki-laki",
	cabor: "Bulutangkis",
    status: "Lulus"
  },
  {
    nisn: "0041957866",
	nis: "242500212",
    nama: "Budi Santoso",
    kelas: "XII IPA 2",
	jk: "Laki-laki",
	cabor: "Sepakbola",
    status: "Tidak Lulus"
  }
];*/
