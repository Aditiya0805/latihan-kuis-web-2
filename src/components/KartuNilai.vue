<script setup>
import { ref } from 'vue'

// TODO 1: buat ref: nama ("Budi Santoso"), uts (72), uas (89), kehadiran (90)
const nama = ref("Budi Santoso")
const uts = ref(72)
const uas = ref(89)
const kehadiran = ref(90)
</script>

<template>
  <div class="kartu">
    <h2>Kartu Nilai</h2>
    <!-- TODO 2: tampilkan nama dalam HURUF BESAR (toUpperCase) -->
    <p>Nama: {{ nama.toUpperCase() }}</p>

    <!-- TODO 3: rata-rata (uts+uas)/2 dibulatkan 1 desimal (toFixed(1)) -->
    <p>Nilai Rata-rata: {{ ((uts + uas) / 2).toFixed(1) }}</p>

    <!-- TODO 4: status TERNARY: rata-rata >= 75 -> 'LULUS', selain itu 'REMIDIAL' -->
    <p>Status: {{ ((uts + uas) / 2) >= 75 ? 'LULUS' : 'REMIDIAL' }}</p>

    <!-- TODO 5: kehadiran format "Kehadiran: 90% (baik)"
    ternary: >= 85 -> 'baik', selain itu 'kurang' -->
    <p>Kehadiran: {{ kehadiran }}% ({{ kehadiran >= 85 ? 'baik' : 'kurang' }})</p>
  </div>
</template>

<style scoped>
.kartu {
  border: 2px solid #1F3A5F;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 16px;
}
</style>
