# Portfolio Luthfi Dwi Purwansyah

Portfolio profesional berbahasa Indonesia untuk memperkenalkan pengalaman software engineering, aplikasi bisnis, backend, serta integrasi IoT.

## Menjalankan secara lokal

Website statis ini tidak memerlukan proses build atau dependency aplikasi.

```sh
python -m http.server 8000
```

Buka http://localhost:8000. Semua aset menggunakan path relatif agar kompatibel dengan GitHub Pages.

## Memperbarui konten

- `index.html`: profil, pengalaman, proyek, keahlian, pendidikan, kontak, dan metadata pencarian.
- `styles.css`: desain responsif, tampilan cetak, dan preferensi reduced motion.
- `script.js`: menu seluler, navigasi aktif, dan tahun footer. Konten tetap dapat dibaca tanpa JavaScript.
- `assets/portrait.png`: pasfoto dari file yang disediakan pemilik.
- `assets/resume-luthfi-dwi-purwansyah.docx`: resume asli yang dapat diunduh.

Konten pengalaman mengikuti resume yang disediakan. Perbarui tanggal dan status pekerjaan ketika ada perubahan. Kartu proyek profesional memakai ilustrasi konsep yang dibuat dengan CSS, bukan screenshot aplikasi. Tautan GitHub menuju repository publik dan tidak menyiratkan bahwa aplikasi internal perusahaan tersedia untuk umum. LinkedIn belum ditampilkan karena resume tidak menyertakan URL profil.

## Publikasi

Repository ini ditujukan untuk GitHub Pages di https://luthfidwip1.github.io/. Push perubahan ke branch yang dikonfigurasi sebagai sumber Pages (dokumentasi sebelumnya menyebut `main`). Tidak diperlukan hosting tambahan.
