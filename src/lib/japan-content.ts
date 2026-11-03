import type { ContentBrief } from "./content-plan";

// One shared owner-trip production list; destinations adapt to the actual itinerary.
export const japanBriefs: { jpn: ContentBrief[]; lotion: ContentBrief[] } = {
  jpn: [
    ["Asakusa: awal cerita GGS", "Owner di Senso-ji → cerita satu tantangan awal membangun GGS → ajak penonton cerita mimpi mereka."],
    ["Shibuya: berani mulai dari nol", "Suasana crossing → owner cerita keputusan paling berani saat memulai usaha → pertanyaan untuk penonton."],
    ["Harajuku: inspirasi tanpa meniru", "Detail street style berizin → tiga inspirasi visual → cara owner menjaga karakter GGS sendiri."],
    ["Fuji: jeda di tengah ambisi", "Perjalanan Kawaguchiko → refleksi soal istirahat sebagai pemilik usaha → pesan untuk tim."],
    ["Tsukiji: pelayanan dari hal kecil", "Amati pengalaman sebagai pelanggan → satu detail pelayanan yang berkesan → ide untuk tim salon."],
    ["Yanaka: bisnis yang punya karakter", "Jalan di Yanaka Ginza → amati identitas toko → owner cerita nilai yang ingin dijaga di GGS."],
    ["Akihabara: belajar beradaptasi", "Suasana kawasan → cerita owner tentang perubahan kebiasaan pelanggan → ajak diskusi."],
    ["Ginza: premium bukan cuma tampilan", "Detail etalase dan suasana → bahas pengalaman pelanggan, bukan harga → satu komitmen owner."],
    ["Tokyo Tower: 3 ide untuk GGS", "Montase penutup perjalanan → tiga ide yang akan dibahas dengan tim → ajakan pilih ide favorit."],
  ].map(([topic = "", flow = ""]) => ({ service: "Japan Diaries", topic, flow, format: "Vlog • 45–60 detik" })),
  lotion: [
    ["Isi travel pouch owner", "Foto flat lay pouch terbuka dengan lotion → tandai produk yang benar-benar dibawa → CTA simpan inspirasi packing."],
    ["Baca label sebelum pilih lotion", "Carousel close-up kemasan → nama dan informasi sesuai label → ajak DM untuk detail produk terverifikasi."],
    ["Satu produk, tiga angle foto", "Foto produk dari depan, samping, dan detail → kemasan jelas tanpa filter yang mengubah warna."],
    ["Checklist tutup botol sebelum jalan", "Carousel langkah memeriksa tutup sesuai kemasan → letakkan di pouch terpisah → simpan checklist."],
    ["Detail tekstur tanpa filter", "Foto tekstur asli dengan pencahayaan netral → deskripsikan hanya yang terlihat → tanpa klaim manfaat."],
    ["Seberapa besar di dalam tas?", "Foto produk di samping pouch dan tangan → tampilkan ukuran dari label bila tersedia → CTA tanya ukuran."],
    ["Lotion di meja penginapan", "Foto produk di meja rapi → cerita rutinitas owner yang benar-benar dilakukan → tanpa klaim hasil."],
    ["Cara pakai: ikuti kemasan", "Carousel petunjuk penggunaan yang tertulis pada label → jangan menambahkan dosis atau aturan rekaan."],
    ["Kemasan dekat, tulisan jelas", "Foto macro nama dan label asli → ajak cek informasi sebelum membeli → CTA pertanyaan produk."],
    ["Jangan lupa cek tanggal produk", "Carousel lokasi tanggal pada kemasan → cara membaca sesuai label → ajakan cek produk sendiri."],
    ["Pink atau gold untuk foto produk?", "Dua komposisi foto produk identik dengan aksen brand → polling pilihan visual, bukan varian produk."],
    ["Di balik layar foto lotion", "Carousel setup meja, cahaya jendela, dan hasil foto → tunjukkan proses sederhana tanpa rekayasa tekstur."],
    ["Self-care kit setelah jalan", "Foto lotion bersama barang pribadi owner → cerita jeda di penginapan → produk bukan klaim pemulihan."],
    ["Pertanyaan aroma sebelum beli", "Carousel pertanyaan untuk penjual → aroma hanya disebut jika terverifikasi → ajak DM kebutuhan."],
    ["Catatan owner setelah memakai", "Foto produk dan kutipan pengalaman pribadi yang nyata → tidak menjanjikan hasil sama untuk semua orang."],
    ["Panduan menyimpan dari label", "Carousel ketentuan penyimpanan sesuai kemasan → foto penempatan yang sesuai → tanpa aturan suhu rekaan."],
    ["Yang selalu kembali ke pouch", "Foto produk saat packing pulang → cerita alasan pribadi owner membawanya → tidak mengklaim produk asal Jepang."],
    ["Tanya produk langsung ke GGS", "Carousel ringkasan kemasan → pertanyaan nama, ukuran, dan harga → CTA DM; stok dan harga dikonfirmasi dulu."],
  ].map(([topic = "", flow = ""], i) => ({ service: "Lotion Badan", topic, flow, format: i % 2 === 0 ? "Foto feed • 1 gambar" : "Carousel • 3 halaman" })),
};