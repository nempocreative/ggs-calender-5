import type { Brand } from "./content-plan";

export type CaptionGuide = { pillar: string; hook: string; body: string; cta: string };

// Caption templates per pillar; [layanan] diisi dari jadwal. Tanpa klaim medis atau harga rekaan.
export const captions: Record<Brand, CaptionGuide[]> = {
  beauty: [
    { pillar: "GGS Talk (Ngopi Sore)", hook: "Ngopi sore bareng GGS ☕ Topik minggu ini: [topik]", body: "Obrolan santai soal [layanan] bareng tim kami. Full episode di Reels.", cta: "Kamu tim yang mana? Tulis di komentar 💬" },
    { pillar: "Si Elis", hook: "Elis lagi-lagi… 😂", body: "Niatnya cuma [layanan], ujungnya [punchline]. Relate nggak?", cta: "Tag bestie kamu yang mirip Elis 👇" },
    { pillar: "Cinematic Treatment", hook: "Pause sebentar. Nikmati prosesnya ✨", body: "Detail [layanan] di GGS Beauty, dikerjakan pelan dan rapi.", cta: "Save buat referensi treatment berikutnya 🤍" },
    { pillar: "Ngobras", hook: "Kata mereka setelah [layanan]…", body: "Ngobrol santai bareng pelanggan kami sambil treatment. Terima kasih sudah mau berbagi cerita!", cta: "Mau ikut cerita juga? Booking lewat link di bio" },
    { pillar: "Promo", hook: "[Layanan] — waktunya me-time 💗", body: "Isi layanan: [rincian]. Harga & slot sesuai info admin.", cta: "DM / WhatsApp untuk reservasi ✨" },
  ],
  hair: [
    { pillar: "GGS Talk (Ngopi Sore)", hook: "Ngopi sore, ngobrol rambut ☕", body: "Barber kami bahas [topik] — jujur dan to the point.", cta: "Ada pertanyaan buat episode depan? Drop di komentar" },
    { pillar: "Comedy", hook: "Cowok pas di kursi barber be like… 😂", body: "Mau [layanan] tapi [punchline].", cta: "Tag teman yang begini juga 👇" },
    { pillar: "Cinematic Treatment", hook: "Sharp. Clean. Done. 🖤", body: "Proses [layanan] di GGS Hair Studio, detail dari awal sampai akhir.", cta: "Save buat referensi potongan berikutnya" },
    { pillar: "Ngobras", hook: "Ngobrol santai di kursi barber 💈", body: "Cerita [nama/profesi pelanggan] sambil [layanan].", cta: "Giliran kamu? Booking via link di bio" },
    { pillar: "Promo", hook: "[Layanan] — siap tampil rapi ✂️", body: "Isi layanan: [rincian]. Harga & slot sesuai info admin.", cta: "Reservasi lewat DM / WhatsApp" },
  ],
};

export const hashtags: Record<Brand | "japan", { core: string[]; rotate: string[] }> = {
  beauty: {
    core: ["#GGSBeauty", "#GGSSalon", "#SalonKecantikan", "#MeTime"],
    rotate: ["#NailArt", "#Creambath", "#HairColor", "#KeratinTreatment", "#BodyMassage", "#ManiPedi", "#SalonTreatment", "#FYP"],
  },
  hair: {
    core: ["#GGSHairStudio", "#GroomingIsBetter", "#Barbershop", "#MenGrooming"],
    rotate: ["#PotongRambutPria", "#Perming", "#HairColorMen", "#Highlight", "#PaketGanteng", "#Creambath", "#BarberLife", "#FYP"],
  },
  japan: {
    core: ["#GGSGoesToJapan", "#JapanDiaries", "#BodyLotionToneUp"],
    rotate: ["#Tokyo", "#OwnerStory", "#TravelVlog", "#SelfCare", "#FYP"],
  },
};

export const captionRules = [
  "Hook di baris pertama (maks. 1 kalimat) — muncul sebelum \"…more\".",
  "Pakai 4 hashtag inti + 3–4 rotasi sesuai layanan; total 7–8 hashtag.",
  "Harga, promo, dan manfaat produk hanya dari info salon / label kemasan.",
  "Minggu Jepang: tambahkan hashtag Japan di akun yang sedang posting.",
];
