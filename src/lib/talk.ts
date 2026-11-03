import type { Brand } from "./content-plan";
import { briefs, scheduledBrief } from "./content-plan";
import { PODCAST_DAYS, schedBeauty, schedHair, days } from "./schedule";

// ---- Acuan produksi GGS Talk (podcast Ngopi Sore) ----
// Rundown-nya sama untuk dua akun; topik, tamu, dan nada bicara mengikuti akun.

export const talkMeta = {
  duration: "25 menit",
  air: "Jumat 16:00",
  output: "1 episode penuh jadi 2 klip Reels + 1 quote card",
};

export type TalkSegment = { t: string; name: string; note: string };

// Rundown 25 menit — dipakai host dua akun.
export const talkRundown: TalkSegment[] = [
  { t: "00:00–02:00", name: "Pembuka", note: "Hook 3 detik, sebut Garut, perkenalan tamu." },
  { t: "02:00–09:00", name: "Cerita tamu", note: "Tamu cerita proses & alasan layanan ini ada." },
  { t: "09:00–17:00", name: "Tanya jawab", note: "Lempar pertanyaan penonton; jawab jujur." },
  { t: "17:00–23:00", name: "Tips praktis", note: "3 langkah yang bisa dicoba di rumah." },
  { t: "23:00–25:00", name: "Penutup", note: "CTA booking + pertanyaan episode depan." },
];

// Bank pertanyaan host — [layanan] diisi dari topik episode.
export const talkQuestions: Record<Brand, string[]> = {
  beauty: [
    "Kapan terakhir kali kamu punya waktu buat diri sendiri?",
    "Apa yang bikin kamu ragu coba [layanan]?",
    "Pengalaman salon mana yang paling kamu ingat?",
    "Self care itu mahal atau memang perlu?",
    "Kesalahan perawatan yang paling sering kamu lakuin?",
    "Satu layanan yang wajib dicoba semua orang: apa?",
  ],
  hair: [
    "Berapa sering kamu potong rambut, dan kenapa segitu?",
    "Pernah nyesel sama model potongan? Yang mana?",
    "Cowok perlu hair care, atau cuma potong doang?",
    "Apa yang bikin cowok malas ke barber?",
    "Kalau hasil nggak sesuai request, diam atau komplain?",
    "Model apa yang cocok buat cowok Garut?",
  ],
};

// Aturan main host — dipakai dua akun.
export const talkRules = [
  "Satu episode satu topik — jangan bahas semua layanan.",
  "Tamu bicara 60%, host 40%.",
  "Harga dan manfaat hanya dari info salon, tanpa klaim medis.",
  "Tandai 3 kalimat terbaik saat rekaman untuk jadi klip.",
  "Sebut Garut minimal sekali supaya ketemu pelanggan sekitar.",
];

// Bahan turunan setelah episode selesai.
export const talkClips = [
  "Klip 1 — jawaban paling jujur (15–30 detik).",
  "Klip 2 — momen lucu atau reaksi tak terduga.",
  "Quote card — satu kalimat tamu + nama dan perannya.",
];

// Sudut pembahasan tiap episode — aman dipakai untuk topik apa pun.
const FOCUS = [
  "Asal-usul layanan & siapa yang paling cocok.",
  "Mitos vs fakta seputar treatment ini.",
  "Rawat di rumah: apa yang benar-benar perlu.",
];

export type TalkEpisode = { day: number; air: string; topic: string; service: string; guest: string; focus: string };

// Nama tamu diambil dari layanan yang dibahas, jadi tidak perlu dikarang.
function guestFor(brand: Brand, service: string) {
  if (/kuku|nail|press|mani|pedi|cat eye/i.test(service)) return "Nail artist";
  if (/totok|wajah|masker|facial/i.test(service)) return "Terapis wajah";
  if (/massage|pijat|reflexy|lulur|scrub|body/i.test(service)) return "Terapis tubuh";
  if (/warna|colouring|coloring|highlight|bleach|loreal/i.test(service)) return "Stylist warna";
  if (/keratin|smoothing|creambath|potong|cut|tonik|perming|paket/i.test(service))
    return brand === "hair" ? "Barber" : "Stylist rambut";
  return brand === "hair" ? "Barber" : "Tim GGS Beauty";
}

const SCHED: Record<Brand, string[][]> = { beauty: schedBeauty, hair: schedHair };

// Episode yang benar-benar tayang bulan ini: Jumat 6, 13, dan 27 November.
export const talkEpisodes: Record<Brand, TalkEpisode[]> = (["beauty", "hair"] as Brand[]).map((brand) =>
  PODCAST_DAYS.map((day, i) => {
    const brief = scheduledBrief(brand, SCHED[brand], day, 1);
    const topic = brief?.topic ?? briefs[brand].talk[i]?.topic ?? "Topik menyusul";
    const service = brief?.service ?? briefs[brand].talk[i]?.service ?? "";
    return {
      day,
      air: days[day] ?? "",
      topic,
      service,
      guest: guestFor(brand, service),
      focus: FOCUS[i] ?? FOCUS[2]!,
    };
  }),
).reduce<Record<Brand, TalkEpisode[]>>((acc, list, i) => {
  acc[i === 0 ? "beauty" : "hair"] = list;
  return acc;
}, { beauty: [], hair: [] });
