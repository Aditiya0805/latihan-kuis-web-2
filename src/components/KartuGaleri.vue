<script setup>
import { ref } from 'vue'

// TODO 1: ref:
// logo -> 'https://vuejs.org/images/logo.png'
// docs -> 'https://vuejs.org/guide/introduction.html'
// aktif -> true (boolean)
// warna -> 'teal' | ukuran -> 18
const logo = ref('https://vuejs.org/images/logo.png')
const docs = ref('https://vuejs.org/guide/introduction.html')
const aktif = ref(true)
const warna = ref('teal')
const ukuran = ref(18)
const galeri = ref('galeri')
</script>

<template>
  <section :class="[galeri, aktif && 'on']">
    <h2>Kartu Galeri</h2>

    <!-- TODO 2: PERBAIKI baris ini (atribut TIDAK boleh pakai {{ }}) -->
    <img :src="logo" alt="Logo Vue" width="80" />

    <br />
    <!-- TODO 3: tautan ke docs memakai :href -->
    <a :href="docs" target="_blank" rel="noopener">Dokumentasi Vue</a>

    <br /><br />
    <!-- TODO 4: tombol Simpan dinonaktifkan saat aktif = false (:disabled + !) -->
    <button :disabled="!aktif">Simpan</button>
    <button type="button" @click="aktif = !aktif" style="margin-left: 8px;">
      Toggle Aktif (Saat ini: {{ aktif }})
    </button>

    <!-- TODO 5: :class object syntax { aktif } -->
    <div :class="{ aktif: aktif }">
      <p>Kotak Status Aktif (Menggunakan Object Syntax: { aktif })</p>
    </div>

    <!-- TODO 6: :class array syntax [galeri, aktif && 'on'] -->
    <p :class="[galeri, aktif && 'on']">
      Teks dengan Array Syntax: [galeri, aktif && 'on']
    </p>

    <!-- TODO 7: :style object { color: warna, fontSize: ukuran + 'px' } -->
    <p :style="{ color: warna, fontSize: ukuran + 'px' }">
      Teks Dinamis dengan :style ({ color: 'teal', fontSize: '18px' })
    </p>
  </section>
</template>

<style scoped>
/* TODO 8: .aktif (border hijau #41B883) dan .on (font-weight: bold) */
.aktif {
  border: 2px solid #41B883;
  padding: 8px;
  margin-top: 8px;
  border-radius: 4px;
}
.on {
  font-weight: bold;
}
.galeri {
  padding: 4px 0;
}
section {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
}
</style>
