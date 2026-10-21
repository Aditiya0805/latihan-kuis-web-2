<script setup>
import { ref, computed } from 'vue'

const baru = ref('')
const daftar = ref([])
let id = 1

// Counter untuk Soal 10
const hitung = ref(0)

// TODO 1: function tambah() -> push { id: id++, judul, selesai:false }, tolak bila kosong
// Juga menangani Soal 10 jika menerima argumen angka: tambah(5)
function tambah(param) {
  if (typeof param === 'number') {
    hitung.value += param
    return
  }
  if (!baru.value.trim()) return
  daftar.value.push({
    id: id++,
    judul: baru.value.trim(),
    selesai: false,
  })
  baru.value = ''
}

// TODO 2: function hapus(i) -> splice
function hapus(i) {
  daftar.value.splice(i, 1)
}

// TODO 3: function toggle(t) -> balik t.selesai (dipanggil dari @click)
function toggle(t) {
  t.selesai = !t.selesai
}

// TODO 4: computed total / selesai / belum
const total = computed(() => daftar.value.length)
const selesai = computed(() => daftar.value.filter(t => t.selesai).length)
const belum = computed(() => daftar.value.filter(t => !t.selesai).length)
</script>

<template>
  <section class="todo-mini">
    <h2>Todo ({{ total }} total)</h2>

    <!-- TODO 5: <form @submit.prevent="tambah"> berisi
    input v-model="baru" + tombol type="submit" -->
    <form @submit.prevent="tambah">
      <input
        type="text"
        v-model="baru"
        placeholder="Tulis tugas baru..."
      />
      <button type="submit">Tambah Tugas</button>
    </form>

    <!-- TODO 6: v-for + :key="t.id" ; checkbox v-model="t.selesai" ;
    judul :class { selesai } ; tombol Hapus @click="hapus(i)" -->
    <ul v-if="daftar.length > 0">
      <li v-for="(t, i) in daftar" :key="t.id">
        <input type="checkbox" v-model="t.selesai" />
        <span :class="{ selesai: t.selesai }" @click="toggle(t)">
          {{ t.judul }}
        </span>
        <button type="button" @click="hapus(i)" class="btn-hapus">Hapus</button>
      </li>
    </ul>

    <!-- TODO 8: empty state v-if saat list kosong -> 'Belum ada tugas' -->
    <p v-else class="empty-state">Belum ada tugas</p>

    <!-- TODO 7: baris hitung: Total: X | Selesai: Y | Belum: Z -->
    <p class="baris-hitung">
      Total: {{ total }} | Selesai: {{ selesai }} | Belum: {{ belum }}
    </p>

    <!-- Soal 10 - Tombol +1 dan +5 (P6) -->
    <hr />
    <div class="counter-box">
      <h3>Counter: {{ hitung }}</h3>
      <!-- TODO: tombol +1 (INLINE handler hitung++) -->
      <button type="button" @click="hitung++">+1</button>
      <!-- TODO: tombol +5 (METHOD handler tambah(5)) -->
      <button type="button" @click="tambah(5)">+5</button>
      <!-- TODO: tombol Reset (hitung = 0) -->
      <button type="button" @click="hitung = 0">Reset</button>
    </div>
  </section>
</template>

<style scoped>
.selesai {
  text-decoration: line-through;
  color: #888;
}
.todo-mini {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
}
form {
  margin-bottom: 12px;
}
input[type="text"] {
  padding: 6px;
  border: 1px solid #aaa;
  border-radius: 4px;
  margin-right: 8px;
}
ul {
  list-style: none;
  padding: 0;
  margin: 12px 0;
}
li {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}
span {
  cursor: pointer;
  flex: 1;
}
.btn-hapus {
  padding: 2px 8px;
  background-color: #ff5252;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.btn-hapus:hover {
  background-color: #d32f2f;
}
.empty-state {
  color: #888;
  font-style: italic;
  margin: 12px 0;
}
.baris-hitung {
  font-weight: bold;
  background: #f0f0f0;
  padding: 8px;
  border-radius: 4px;
  margin-top: 12px;
}
hr {
  margin: 16px 0;
  border: 0;
  border-top: 1px solid #eee;
}
.counter-box h3 {
  margin-bottom: 8px;
}
.counter-box button {
  margin-right: 8px;
  padding: 6px 12px;
  cursor: pointer;
}
</style>
