<script setup>
import { ref } from 'vue'

// TODO 1: ref stok = 12 | ref tampilInfo = true
const stok = ref(12)
const tampilInfo = ref(true)
</script>

<template>
  <section class="status-stok">
    <h2>Status Stok</h2>

    <div class="kontrol-stok">
      <label>Jumlah Stok: </label>
      <input type="number" v-model.number="stok" />
      <button type="button" @click="stok = 0" style="margin-left: 8px;">Set 0 (Habis)</button>
      <button type="button" @click="stok = 3" style="margin-left: 4px;">Set 3 (Sedikit)</button>
      <button type="button" @click="stok = 12" style="margin-left: 4px;">Set 12 (Tersedia)</button>
    </div>

    <!-- TODO 2: klasifikasi stok (v-if / v-else-if / v-else, BERURUTAN):
    stok = 0 -> 'Habis'
    stok 1-5 -> 'Sedikit'
    stok > 5 -> 'Tersedia' -->
    <p v-if="stok === 0" class="stok-status status-habis">Status: Habis</p>
    <p v-else-if="stok >= 1 && stok <= 5" class="stok-status status-sedikit">Status: Sedikit</p>
    <p v-else class="stok-status status-tersedia">Status: Tersedia</p>

    <!-- TODO 3: tombol untuk toggle tampilInfo -->
    <button type="button" @click="tampilInfo = !tampilInfo">
      {{ tampilInfo ? 'Sembunyikan Info' : 'Tampilkan Info' }}
    </button>
    <p v-show="tampilInfo" class="info-teks">Info stok diperbarui hari ini</p>
  </section>
</template>

<style scoped>
.status-stok {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
}
.kontrol-stok {
  margin-bottom: 12px;
}
.stok-status {
  font-weight: bold;
  padding: 6px 10px;
  border-radius: 4px;
  display: inline-block;
  margin: 8px 0;
}
.status-habis {
  background-color: #ffebee;
  color: #c62828;
}
.status-sedikit {
  background-color: #fff8e1;
  color: #f57f17;
}
.status-tersedia {
  background-color: #e8f5e9;
  color: #2e7d32;
}
.info-teks {
  color: #555;
  font-style: italic;
  margin-top: 8px;
}
button {
  padding: 4px 8px;
  cursor: pointer;
}
</style>
