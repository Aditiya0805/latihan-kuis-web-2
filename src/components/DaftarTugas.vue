<script setup>
import { ref } from 'vue'

const tugas = ref([
  { id: 1, judul: 'Belajar v-for', selesai: true },
  { id: 2, judul: 'Kumpul tugas Vue', selesai: false },
  // TODO 1: tambah minimal 1 item lagi (id unik)
  { id: 3, judul: 'Mengerjakan Kuis Praktikum Web 2', selesai: false },
])

const backupTugas = [
  { id: 1, judul: 'Belajar v-for', selesai: true },
  { id: 2, judul: 'Kumpul tugas Vue', selesai: false },
  { id: 3, judul: 'Mengerjakan Kuis Praktikum Web 2', selesai: false },
]

function kosongkanTugas() {
  tugas.value = []
}

function resetTugas() {
  tugas.value = [...backupTugas]
}
</script>

<template>
  <section class="daftar-tugas">
    <h2>Daftar Tugas</h2>

    <div class="aksi">
      <button type="button" @click="kosongkanTugas" v-if="tugas.length > 0">
        Kosongkan Daftar (Tes Empty State)
      </button>
      <button type="button" @click="resetTugas" v-else>
        Kembalikan Daftar
      </button>
    </div>

    <!-- TODO 3: empty state v-if saat list kosong -> 'Belum ada tugas' -->
    <ul v-if="tugas.length > 0">
      <!-- TODO 2: v-for + :key="t.id" + :class="{ selesai: t.selesai }"
      tampilkan judul + status ternary (Selesai / Belum) -->
      <li
        v-for="t in tugas"
        :key="t.id"
        :class="{ selesai: t.selesai }"
      >
        {{ t.judul }} - {{ t.selesai ? 'Selesai' : 'Belum' }}
      </li>
    </ul>

    <p v-else class="empty-state">Belum ada tugas</p>
  </section>
</template>

<style scoped>
/* TODO 4: .selesai { text-decoration: line-through; color: #888; } */
.selesai {
  text-decoration: line-through;
  color: #888;
}
.daftar-tugas {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
}
.aksi {
  margin-bottom: 12px;
}
button {
  padding: 4px 8px;
  cursor: pointer;
}
ul {
  padding-left: 20px;
}
li {
  margin: 6px 0;
}
.empty-state {
  color: #888;
  font-style: italic;
  margin-top: 8px;
}
</style>
