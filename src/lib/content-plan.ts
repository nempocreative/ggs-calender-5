import catalog from "./service-catalog.json";
import type { PillarKey } from "./schedule";

export type Brand = "beauty" | "hair";
export type ContentBrief = {
  service: string;
  category?: string;
  topic: string;
  format: string;
  flow: string;
};

export const SERVICE_SOURCE = "https://github.com/nempocreative/remix-of-ggs-5/blob/main/src/server/api/lib/default-services.ts";

export const briefs: Record<Brand, Record<PillarKey, ContentBrief[]>> = {
  beauty: {
    talk: [
      { service: "Kuku Asli Cat Eye", topic: "Cerita di balik nail art", format: "Podcast • 25 menit", flow: "Host buka topik → nail artist cerita proses nail art → tanya jawab santai → 2 klip Reels + 1 quote card." },
      { service: "Totok Wajah + Masker 45 Menit", topic: "Self care itu bukan kemewahan", format: "Podcast • 25 menit", flow: "Host buka topik → terapis cerita totok wajah dan masker → pertanyaan penonton → 2 klip Reels + 1 quote card." },
      { service: "L'Oréal Warna", topic: "Rambut berwarna, rawat bagaimana?", format: "Podcast • 25 menit", flow: "Host buka topik → stylist cerita perawatan rambut berwarna → tips harian → 2 klip Reels + 1 quote card." },
      { service: "Press On Nail", topic: "Press on: cepat tapi rapi", format: "Podcast • 25 menit", flow: "Host buka topik → nail artist jelaskan press on → siapa yang cocok → 2 klip Reels + 1 quote card." },
      { service: "Full Body Massage 90 Menit", topic: "Capek kerja, butuh jeda", format: "Podcast • 25 menit", flow: "Host buka topik → terapis cerita pijat whole body → ngobrol santai soal relaksasi → 2 klip Reels + 1 quote card." },
    ],
    elis: [
      { service: "Kuku Asli Full Cat Eye + Chrome", topic: "Elis bingung pilih kuku", format: "Reels • 20–30 detik", flow: "Elis membawa banyak referensi → nail artist bantu pilih → lelucon saat menentukan warna → tampilkan hasil nyata." },
      { service: "Potong Poni", topic: "Poni jangan kependekan!", format: "Reels • 20–30 detik", flow: "Elis takut potong poni → stylist konfirmasi panjang → reaksi lucu tanpa hasil gagal → reveal poni rapi." },
      { service: "Full Body Massage 90 Menit", topic: "Elis susah berhenti ngobrol", format: "Reels • 20–30 detik", flow: "Elis datang banyak cerita → konsultasi tekanan pijat → mendadak santai → punchline selesai sesi; talent berpakaian sopan." },
      { service: "Cuci Blow", topic: "Elis siap-siap mendadak", format: "Reels • 20–30 detik", flow: "Elis panik sebelum acara → stylist konfirmasi model blow → reaksi lucu saat ditata → hasil akhir; hindari janji waktu pengerjaan." },
    ],
    cine: [
      { service: "Kuku Asli Full Cat Eye + Chrome", topic: "Detail Cat Eye + Chrome", format: "Reels • 25–40 detik", flow: "Kuku sebelum → close-up aplikasi dan efek cat eye → detail chrome → hasil akhir di cahaya yang sama." },
      { service: "Pendek", category: "KERATIN SMOOTHING", topic: "Proses keratin smoothing", format: "Reels • 25–40 detik", flow: "Kondisi awal → konsultasi stylist → cuplikan aplikasi dan penataan → before–after tanpa filter." },
      { service: "Lulur + Masker Badan", topic: "Ritual lulur dan masker", format: "Reels • 25–40 detik", flow: "Perlengkapan bersih → tekstur lulur → aplikasi pada lengan dengan izin → penutup ruang treatment; jaga privasi." },
      { service: "Totok Wajah + Masker 45 Menit", topic: "Ritual totok wajah dan masker", format: "Reels • 25–40 detik", flow: "Izin rekam wajah → perlengkapan bersih → detail gerakan terapis dan aplikasi masker → penutup sesi; tanpa klaim medis." },
      { service: "Sedang", category: "COLOURING HIGHLIGHT", topic: "Dimensi warna lewat highlight", format: "Reels • 25–40 detik", flow: "Referensi dan rambut awal → konsultasi warna → detail proses highlight → hasil dari tiga sudut dengan cahaya sama." },
    ],
    ngobras: [
      { service: "MeniPedi", topic: "Waktu me-time pelanggan", format: "Reels • 30–45 detik", flow: "Minta izin rekam → tanya alasan memilih MeniPedi → cuplikan perawatan → tanggapan pelanggan tentang hasil." },
      { service: "Body Massage + Reflexy (90 menit)", topic: "Pilihan relaksasi setelah kerja", format: "Reels • 30–45 detik", flow: "Tanya aktivitas pelanggan → alasan pilih paket → rekam bagian tangan/kaki berizin → kesan selesai sesi, tanpa klaim medis." },
      { service: "Sedang", category: "COLOURING FULL WARNA · DENGAN BLEACHING", topic: "Cerita ganti warna rambut", format: "Reels • 30–45 detik", flow: "Tanya warna yang diinginkan → konsultasi kondisi rambut → cuplikan proses → reaksi hasil warna tanpa menjanjikan durasi." },
      { service: "CBD", category: "CREAMBATH", topic: "Creambath pilihan pelanggan", format: "Reels • 30–45 detik", flow: "Izin rekam → tanya alasan memilih creambath → tampilkan produk CBD dan proses → kesan pelanggan setelah selesai." },
    ],
    promo: [
      { service: "MeniPedi", topic: "Kenali menu MeniPedi", format: "Foto feed • 1 gambar", flow: "Foto hasil asli → nama layanan → harga hanya setelah konfirmasi salon → CTA booking, tanpa diskon rekaan." },
      { service: "Body Massage + Scrub + Masker Badan (120 menit)", topic: "Isi paket body treatment", format: "Carousel • 3 halaman", flow: "Foto perlengkapan → rincian massage, scrub dan masker → durasi menu 120 menit + ajakan booking." },
      { service: "Cuci Curly", topic: "Styling sebelum acara", format: "Foto feed • 1 gambar", flow: "Foto hasil curly → nama layanan Cuci Curly → konfirmasi ketersediaan slot → ajakan reservasi." },
      { service: "Pendek", category: "KERATIN TREATMENT", topic: "Kenali menu keratin treatment", format: "Carousel • 3 halaman", flow: "Foto rambut asli → sebut menu Keratin Treatment untuk rambut pendek → bedakan dari smoothing bersama stylist → CTA konsultasi, harga dikonfirmasi." },
      { service: "Waxing Ketiak", topic: "Kenali layanan waxing ketiak", format: "Carousel • 3 halaman", flow: "Foto ruang dan perlengkapan, bukan area tubuh pribadi → jelaskan layanan bersama terapis → konsultasi sebelum treatment + CTA reservasi." },
    ],
  },
  hair: {
    talk: [
      { service: "Perming", topic: "Perming di rambut pria", format: "Podcast • 25 menit", flow: "Host buka topik → barber jelaskan perming dan bedanya dengan smoothing → tanya jawab → 2 klip Reels + 1 quote card." },
      { service: "Paket GPS (Ganteng Pisan Sob) — Potong + Creambath Pijat Kepala Bahu + Tonik (30 menit)", topic: "Kenapa Paket GPS banyak diambil", format: "Podcast • 25 menit", flow: "Host buka topik → barber bahas isi paket → pertanyaan penonton → 2 klip Reels + 1 quote card." },
      { service: "Colouring No Bleaching", topic: "Warna rambut pria, mulai dari mana", format: "Podcast • 25 menit", flow: "Host buka topik → barber bahas colouring tanpa bleach → kondisi rambut → 2 klip Reels + 1 quote card." },
      { service: "Keratin Smoothing", topic: "Keratin untuk rambut pria", format: "Podcast • 25 menit", flow: "Host buka topik → barber jelaskan keratin smoothing → perawatan setelahnya → 2 klip Reels + 1 quote card." },
    ],
    elis: [
      { service: "Dewasa", category: "HAIR CUT", topic: "Bawa banyak referensi, pulang satu model", format: "Reels • 20–30 detik", flow: "Klien datang bawa banyak referensi → barber jelaskan bentuk rambut yang cocok → deal satu model → reveal potongan rapi, bukan hasil gagal." },
      { service: "Potong Jenggot", topic: "Jenggot cuma dirapikan “sedikit”", format: "Reels • 20–30 detik", flow: "Klien minta sedikit saja → konfirmasi bentuk → ekspresi lucu saat dirapikan → hasil detail jenggot." },
      { service: "Paket G (Ganteng) — Potong + Pijat Bahu (15 menit)", topic: "Potong sekaligus santai", format: "Reels • 20–30 detik", flow: "Klien buru-buru datang → selesai potong ingin pijat terus → punchline → tampilkan dua isi Paket G." },
      { service: "Potong Kumis", topic: "Kumis, sedikit saja!", format: "Reels • 20–30 detik", flow: "Klien berulang kali bilang sedikit → barber konfirmasi bentuk → close-up rapikan kumis → reaksi puas dengan punchline ringan." },
    ],
    cine: [
      { service: "Dewasa", category: "HAIR CUT", topic: "Detail potongan dewasa", format: "Reels • 25–40 detik", flow: "Rambut awal → konsultasi model → close-up gunting dan rapikan tepi → reveal depan, samping, belakang." },
      { service: "Perming", topic: "Perubahan tekstur perming", format: "Reels • 25–40 detik", flow: "Rambut sebelum → detail penataan saat proses → hasil tekstur → before–after pada sudut dan cahaya sama." },
      { service: "Paket GPS (Ganteng Pisan Sob) — Potong + Creambath Pijat Kepala Bahu + Tonik (30 menit)", topic: "Ritual lengkap Paket GPS", format: "Reels • 25–40 detik", flow: "Potong → creambath → pijat kepala bahu → aplikasi tonik dan hasil; jangan tampilkan facial sebagai isi GPS." },
      { service: "Highlight Bleaching", topic: "Detail highlight dengan bleaching", format: "Reels • 25–40 detik", flow: "Konsultasi kondisi rambut → detail proses bleaching dan highlight sesuai barber → reveal warna → before–after tanpa filter." },
    ],
    ngobras: [
      { service: "Panjang Gondrong", topic: "Tetap gondrong, lebih rapi", format: "Reels • 30–45 detik", flow: "Izin rekam → tanya panjang yang ingin dipertahankan → cuplikan potong → komentar pelanggan saat melihat hasil." },
      { service: "Colouring Bleaching", topic: "Pengalaman pertama colouring", format: "Reels • 30–45 detik", flow: "Tanya referensi warna → konsultasi dengan barber → cuplikan pewarnaan → reaksi akhir tanpa menjanjikan hasil identik." },
      { service: "Creambath Pijat Kepala Bahu (30 menit)", topic: "Jeda setelah aktivitas", format: "Reels • 30–45 detik", flow: "Tanya rutinitas → alasan memilih creambath → cuplikan pijat berizin → kesan pelanggan, bukan klaim kesehatan." },
      { service: "Masker / Facial & Pijat Muka (15 menit)", topic: "Cerita jeda facial pelanggan", format: "Reels • 30–45 detik", flow: "Izin rekam wajah → tanya alasan memilih facial sebelum aplikasi → cuplikan masker dan pijat muka → kesan setelah sesi, tanpa klaim medis." },
    ],
    promo: [
      { service: "Paket G (Ganteng) — Potong + Pijat Bahu (15 menit)", topic: "Kenali Paket G", format: "Foto feed • 1 gambar", flow: "Foto hasil potong → rincian potong + pijat bahu → konfirmasi harga salon → CTA booking." },
      { service: "Paket GPSS (Ganteng Pisan Sob Sob) — Potong + Keramas Tonik + Pijat Kepala Muka + Facial (30 menit)", topic: "Facial ada di Paket GPSS", format: "Carousel • 3 halaman", flow: "Foto layanan → isi potong, keramas tonik, pijat kepala muka + facial → durasi menu 30 menit dan ajakan booking." },
      { service: "Highlight No Bleaching", topic: "Pilihan highlight", format: "Foto feed • 1 gambar", flow: "Foto hasil highlight asli → nama Highlight No Bleaching → konsultasi referensi warna → ajakan reservasi." },
      { service: "Paket GP (Ganteng Pisan) — Potong + Pijat Kepala Bahu + Keramas (15 menit)", topic: "Tiga layanan dalam Paket GP", format: "Carousel • 3 halaman", flow: "Foto hasil potong → rincian potong, pijat kepala bahu dan keramas → nama Paket GP + CTA booking; harga dikonfirmasi salon." },
    ],
  },
};

export function catalogService(brand: Brand, brief: ContentBrief) {
  return catalog.find((s) => s.brand === brand && s.name === brief.service && (!brief.category || s.category === brief.category));
}

export function scheduledBrief(brand: Brand, schedule: string[][], day: number, slot: number) {
  const key = schedule[day]?.[slot] as PillarKey | undefined;
  if (!key || !briefs[brand][key]) return undefined;
  const occurrence = schedule.slice(0, day).flat().filter((k) => k === key).length +
    (schedule[day]?.slice(0, slot).filter((k) => k === key).length ?? 0);
  const options = briefs[brand][key];
  return options[occurrence % options.length];
}