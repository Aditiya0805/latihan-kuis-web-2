<script setup>
// TODO 1: import data produk dari "@/data/produk.js"
import produk, { formatRupiah } from "@/data/produk.js"

// TODO 2: ambil SEMUA produk ke variabel `produkList`
const produkList = produk
</script>

<template>
  <div class="kartu">
    <!-- TODO 3: tampilkan setiap produk pakai v-for + :key="p.id"
    (sementara boleh pakai v-for, detail P5) -->
    <div v-for="p in produkList" :key="p.id" class="item-produk">
      <h3>{{ p.nama }}</h3>
      <p>Harga: {{ formatRupiah(p.harga) }}</p>
      <p>Stok: {{ p.stok }}</p>
      <p>Kategori: {{ p.kategori }}</p>
    </div>
  </div>
</template>

<style scoped>
/* TODO 4: gaya .kartu:
 border: 2px solid #41B883; border-radius: 8px; padding: 12px */
.kartu {
  border: 2px solid #41B883;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 12px;
}
.item-produk {
  margin-bottom: 8px;
  padding-bottom: 8px;
  border-bottom: 1px dashed #ccc;
}
.item-produk:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}
</style>