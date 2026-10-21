import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import produk, { totalHarga } from './data/produk.js'

console.log(totalHarga(produk)) // 45000

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
