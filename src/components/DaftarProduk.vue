<script setup>
// TODO 1: import KartuProduk dari "@/components/KartuProduk.vue"
import KartuProduk from "@/components/KartuProduk.vue"
</script>

<template>
  <section class="daftar">
    <h2>Daftar Produk</h2>
    <!-- TODO 2: panggil <KartuProduk /> DUA KALI -->
    <KartuProduk />
    <KartuProduk />
  </section>
</template>

<style scoped>
/* TODO 3: style .daftar (background #f4f4f4, padding 12px, border-radius 8px) */
.daftar {
  background: #f4f4f4;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 16px;
}
</style>
