import type { Brand } from "./content-plan";
import { briefs, scheduledBrief } from "./content-plan";
import { PODCAST_DAYS, schedBeauty, schedHair, days } from "./schedule";

// ---- Acuan GGS Talk (podcast Ngopi Sore) ----
// Owner ngobrol santai dan ngalir — tidak ada naskah. Yang disiapkan cuma
// acuan pertanyaan: daftar ini pemantik, boleh dilewati kalau obrolan sudah jalan.

export const talkMeta = {
  duration: "25 menit",
  air: "Jumat 16:00",
  output: "1 episode penuh jadi 2 klip Reels + 1 quote card",
};

export type TalkQuestionGroup = { group: string; items: string[] };

// Pertanyaan pemantik per akun — dipakai owner, bukan dibaca dari naskah.
export const talkQuestions: Record<Brand, TalkQuestionGroup[]> = {
  beauty: [
    {
      group: "Buka obrolan",
      items: [
        "Ceritain dong, pelanggan pertama GGS itu siapa?",
        "Layanan mana yang paling kamu suka kerjain, dan kenapa?",
        "Hari paling berantakan di salon gimana ceritanya?",
      ],
    },
    {
      group: "Kalau udah nyantai",
      items: [
        "Apa yang paling sering disalahpahami orang soal salon?",
        "Treatment yang orang kira cuma buat yang punya uang, padahal nggak?",
        "Pernah nggak nolak layanan yang lagi tren? Alasannya apa?",
        "Customer mana yang paling kamu inget, dan kenapa?",
        "Menurut kamu, cantik itu bikin tenang atau bikin repot?",
        "Kalau lagi budget terbatas, mulai dari mana yang paling worth it?",
      ],
    },
    {
      group: "Biar nutupnya ngena",
      items: [
        "Satu hal yang kamu pengen orang Garut tahu soal GGS?",
        "Pertanyaan apa yang belum pernah ditanyain ke kamu?",
      ],
    },
  ],
  hair: [
    {
      group: "Buka obrolan",
      items: [
        "GGS Hair Studio ini mulai dari mana sih?",
        "Model potongan apa yang paling sering kamu ambil buat sendiri?",
        "Minggu ini cowok Garut paling banyak request apa?",
      ],
    },
    {
      group: "Kalau udah nyantai",
      items: [
        "Apa yang bikin cowok males rawat rambut, padahal gampang?",
        "Pernah nolak request model yang nggak cocok sama bentuk rambut? Gimana jelasinnya?",
        "Bedanya potong di sini sama di tempat lain, jujur, di mana?",
        "Cerita pelanggan mana yang paling bikin kamu ngakak di kursi barber?",
        "Rapi itu buat diri sendiri atau buat dilihat orang?",
        "Cowok yang cuma punya waktu 15 menit, kamu kasih apa?",
      ],
    },
    {
      group: "Biar nutupnya ngena",
      items: [
        "Satu hal yang kamu pengen orang Garut tahu soal GGS Hair Studio?",
        "Pertanyaan apa yang belum pernah ditanyain ke barber?",
      ],
    },
  ],
};

// Cara mainnya — biar obrolan tetap natural, bukan wawancara kaku.
export const talkRules = [
  "Anggap ngobrol sama temen — nggak ada naskah yang dibaca.",
  "Kejar jawaban tamu, jangan lompat ke pertanyaan berikutnya.",
  "Boleh ngelantur; bagian yang nggak perlu dipotong di editing.",
  "Satu pertanyaan satu cerita — jangan nembak tiga sekaligus.",
  "Diam sebentar itu wajar, nggak perlu buru-buru diisi.",
  "Harga & manfaat hanya dari info salon, tanpa klaim medis.",
  "Sebut Garut natural di tengah obrolan, bukan dihafal.",
];

// Alur longgar 25 menit — pegangan waktu, bukan urutan yang wajib.
export type TalkSegment = { t: string; name: string; note: string };

export const talkFlow: TalkSegment[] = [
  { t: "0–2 mnt", name: "Buka", note: "Ngobrol dulu, baru rekam." },
  { t: "2–9 mnt", name: "Cerita tamu", note: "Tamu cerita, host nanya." },
  { t: "9–17 mnt", name: "Tanya jawab", note: "Pertanyaan dari penonton." },
  { t: "17–23 mnt", name: "Tips", note: "2–3 hal buat dicoba di rumah." },
  { t: "23–25 mnt", name: "Nutup", note: "Ajak booking + episode depan." },
];

// Bahan turunan setelah episode selesai.
export const talkClips = [
  "Klip 1 — jawaban paling jujur (15–30 detik).",
  "Klip 2 — momen lucu atau reaksi tak terduga.",
  "Quote card — satu kalimat tamu + nama dan perannya.",
];

export type TalkEpisode = { day: number; air: string; topic: string; service: string; guest: string };

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

function build(brand: Brand): TalkEpisode[] {
  return PODCAST_DAYS.map((day, i) => {
    const brief = scheduledBrief(brand, SCHED[brand], day, 1);
    const topic = brief?.topic ?? briefs[brand].talk[i]?.topic ?? "Topik menyusul";
    const service = brief?.service ?? briefs[brand].talk[i]?.service ?? "";
    return { day, air: days[day] ?? "", topic, service, guest: guestFor(brand, service) };
  });
}

// Episode yang benar-benar tayang bulan ini: Jumat 6, 13, dan 27 November.
export const talkEpisodes: Record<Brand, TalkEpisode[]> = {
  beauty: build("beauty"),
  hair: build("hair"),
};
