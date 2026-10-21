<script setup>
import { ref } from 'vue'
import { formatRupiah } from '@/data/produk.js'

// TODO 1: ref:
// nama -> '' (input teks, WAJIB modifier .trim)
// harga -> 0 (input angka, WAJIB modifier .number)
// kategori -> 'Minuman' (select)
// setuju -> false (checkbox)
const nama = ref('')
const harga = ref(0)
const kategori = ref('Minuman')
const setuju = ref(false)
</script>

<template>
  <section class="form">
    <h2>Form Produk</h2>

    <!-- TODO 2: input teks nama (pakai .trim) -->
    <div class="form-group">
      <label>Nama Produk: </label>
      <input type="text" v-model.trim="nama" placeholder="Masukkan nama..." />
    </div>

    <!-- TODO 3: input angka harga (pakai .number) -->
    <div class="form-group">
      <label>Harga: </label>
      <input type="number" v-model.number="harga" placeholder="Masukkan harga..." />
    </div>

    <!-- TODO 4: select kategori: Minuman / Makanan / Snack -->
    <div class="form-group">
      <label>Kategori: </label>
      <select v-model="kategori">
        <option value="Minuman">Minuman</option>
        <option value="Makanan">Makanan</option>
        <option value="Snack">Snack</option>
      </select>
    </div>

    <!-- TODO 5: checkbox setuju -->
    <div class="form-group">
      <label>
        <input type="checkbox" v-model="setuju" />
        Setuju dengan syarat dan ketentuan
      </label>
    </div>

    <!-- TODO 6: preview. Aturan:
    - nama kosong -> 'Nama belum diisi' (operator ||)
    - harga -> tampilkan formatRupiah dari data/produk.js
    - setuju -> 'Ya' / 'Belum' (ternary) -->
    <div class="preview">
      <h3>Preview Produk</h3>
      <p><strong>Nama:</strong> {{ nama || 'Nama belum diisi' }}</p>
      <p><strong>Harga:</strong> {{ formatRupiah(harga) }}</p>
      <p><strong>Kategori:</strong> {{ kategori }}</p>
      <p><strong>Status Setuju:</strong> {{ setuju ? 'Ya' : 'Belum' }}</p>
    </div>
  </section>
</template>

<style scoped>
.form {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
}
.form-group {
  margin-bottom: 12px;
}
.form-group label {
  display: inline-block;
  min-width: 110px;
}
input[type="text"], input[type="number"], select {
  padding: 6px;
  border: 1px solid #aaa;
  border-radius: 4px;
}
.preview {
  border: 1px dashed #999;
  border-radius: 8px;
  padding: 12px;
  margin-top: 12px;
}
</style>
