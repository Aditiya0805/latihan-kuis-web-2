// src/data/produk.js
const produk = [
  { id: 1, nama: 'Kopi', harga: 15000, stok: 12, kategori: 'Minuman' },
  { id: 2, nama: 'Teh', harga: 10000, stok: 5, kategori: 'Minuman' },
  { id: 3, nama: 'Cokelat', harga: 20000, stok: 0, kategori: 'Snack' },
];

// TODO 2: export DUA hal:
export const totalHarga = list => list.reduce((t, p) => t + p.harga, 0);
export const formatRupiah = angka => `Rp ${angka}`;

export default produk;