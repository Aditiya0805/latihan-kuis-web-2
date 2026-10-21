<script setup>
import DaftarProduk from '@/components/DaftarProduk.vue'
import KartuNilai from '@/components/KartuNilai.vue'
import KartuGaleri from '@/components/KartuGaleri.vue'
import FormProduk from '@/components/FormProduk.vue'
import StatusStok from '@/components/StatusStok.vue'
import DaftarTugas from '@/components/DaftarTugas.vue'
import TodoMini from '@/components/TodoMini.vue'
</script>

<template>
  <main class="container">
    <h1>Adit si Raja Coding</h1>

    <!-- Soal 2 & 3: DaftarProduk (memanggil KartuProduk 2x) -->
    <DaftarProduk />

    <!-- Soal 4: KartuNilai (Interpolasi & Ekspresi) -->
    <KartuNilai />

    <!-- Soal 5: KartuGaleri (v-bind, :class, :style) -->
    <KartuGaleri />

    <!-- Soal 6: FormProduk (v-model & Preview) -->
    <FormProduk />

    <!-- Soal 7: StatusStok (v-if / v-else-if / v-else & v-show) -->
    <StatusStok />

    <!-- Soal 8: DaftarTugas (v-for + :key & Empty State) -->
    <DaftarTugas />

    <!-- Soal 9 & 10: TodoMini (Event Handling, Todo & Counter) -->
    <TodoMini />
  </main>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  color: #333;
}
h1 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 24px;
}
</style>
