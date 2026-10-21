# Jawaban Observasi

Berikut adalah fungsi dari masing-masing folder pada struktur project Vue:

1. **`src/components/`**
   - **Fungsi**: Tempat menyimpan komponen-komponen Vue (.vue) yang bersifat modular, independen, dan dapat digunakan kembali (reusable) di berbagai bagian halaman atau komponen lain (seperti header, card/kartu, form, modal, dll.).

2. **`src/views/`**
   - **Fungsi**: Tempat menyimpan komponen Vue yang bertindak sebagai representasi tampilan halaman penuh (page/view), biasanya dipetakan langsung dengan rute tertentu pada Vue Router (seperti HomeView, AboutView, ProductView).

3. **`public/`**
   - **Fungsi**: Tempat menyimpan aset-aset statis murni (seperti `favicon.ico`, robot.txt, file gambar langsung) yang tidak diproses atau dibundle oleh pipeline Vite/Webpack. File di dalam folder ini disajikan langsung apa adanya pada root URL server web (`/`).
