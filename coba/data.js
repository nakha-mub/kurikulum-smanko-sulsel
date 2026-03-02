const fs = require('fs');

// 1. Membaca file DataSiswa.txt
fs.readFile('DataSiswa.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Gagal membaca file:", err);
        return;
    }

    // 2. Pisahkan per baris dan hapus baris header (baris pertama)
    const lines = data.trim().split('\n');
    const dataLines = lines.slice(1); // Mengambil data mulai dari baris kedua

    const students = dataLines.map(line => {
        // Karena data dipisahkan oleh tab, kita gunakan \t
        // Jika data dipisahkan spasi ganda, gunakan regex /\s{2,}/
        const columns = line.split('\t');

        return {
            nisn: columns[2].trim(),
            nis: columns[1].trim(),
            nama: columns[3].trim(),
            kelas: columns[0].trim(),
            jk: columns[4].trim() === 'L' ? 'Laki-laki' : 'Perempuan',
            cabor: columns[5].trim(),
            status: columns[6].trim().charAt(0).toUpperCase() + columns[6].trim().slice(1).toLowerCase()
        };
    });

    // 3. Format hasil menjadi string konstanta JavaScript
    const outputContent = `const students = ${JSON.stringify(students, null, 2)};`;

    // 4. Tulis hasil ke file data.js
    
});
