import type { ReactNode } from "react";
import { PILLARS, TARGET, SLOTS, days, schedBeauty, schedHair, weekRanges, shortName } from "@/lib/schedule";
import logoBeauty from "@/assets/ggs-beauty-logo.jpg";
import logoHair from "@/assets/ggs-hair-studio-logo.png";
import salonBeauty from "@/assets/salon_beauty.jpg";
import salonHair from "@/assets/salon_hair.jpg";
import salonClosing from "@/assets/salon_closing.jpg";

const HEAD = { fontFamily: "'Trebuchet MS', sans-serif" };
const BODY = { fontFamily: "Calibri, sans-serif" };

function Stage({ children, dark }: { children: ReactNode; dark?: boolean }) {
  return (
    <div
      className={`relative h-[720px] w-[1280px] shrink-0 overflow-hidden ${dark ? "bg-ggs-dark" : "bg-white"}`}
      style={BODY}
    >
      {children}
    </div>
  );
}

function Footer({ n, dark }: { n: number; dark?: boolean }) {
  return (
    <div className={`absolute right-12 bottom-6 text-[13px] ${dark ? "text-white/40" : "text-ggs-gray"}`}>
      Jadwal Konten GGS • {n}
    </div>
  );
}

function RoundLogo({ src, size = 96 }: { src: string; size?: number }) {
  return (
    <img
      src={src}
      alt="logo"
      className="rounded-full object-cover ring-2 ring-white/20"
      style={{ width: size, height: size }}
    />
  );
}

function Kicker({ children, color }: { children: ReactNode; color: "pink" | "gold" }) {
  return (
    <div
      className={`text-[15px] font-bold tracking-[0.25em] ${color === "pink" ? "text-ggs-pink" : "text-ggs-gold"}`}
      style={BODY}
    >
      {children}
    </div>
  );
}

// ---- 1. Cover ----
function CoverSlide() {
  return (
    <Stage dark>
      <div className="absolute top-0 left-0 h-full w-[18px] bg-ggs-pink" />
      <div className="absolute top-0 right-0 h-full w-[18px] bg-ggs-gold" />
      <div className="absolute top-[130px] left-[90px] text-[17px] tracking-[0.3em] text-ggs-gold">
        RENCANA KONTEN 4 MINGGU • 4 NOV – 1 DES 2026
      </div>
      <h1 className="absolute top-[180px] left-[90px] text-[86px] leading-none font-bold text-white" style={HEAD}>
        Jadwal Konten
      </h1>
      <div className="absolute top-[320px] left-[90px] text-[40px]" style={HEAD}>
        <span className="font-bold text-ggs-pink">GGS Beauty</span>
        <span className="text-white/40"> × </span>
        <span className="font-bold text-ggs-gold">GGS Hair Studio</span>
      </div>
      <div className="absolute top-[410px] left-[90px] text-[18px] text-white/50">
        3 konten per hari • Maksimal 2 video • 2 akun, 1 strategi
      </div>
      <div className="absolute top-[540px] left-[90px] flex items-center gap-10">
        <div className="flex items-center gap-4">
          <RoundLogo src={logoBeauty} size={90} />
          <span className="text-[14px] tracking-[0.2em] text-ggs-pink">GGS BEAUTY</span>
        </div>
        <div className="flex items-center gap-4">
          <RoundLogo src={logoHair} size={90} />
          <span className="text-[14px] tracking-[0.2em] text-ggs-gold">GGS HAIR STUDIO</span>
        </div>
      </div>
      <div className="absolute right-[90px] bottom-[50px] text-[14px] text-white/40">November 2026</div>
    </Stage>
  );
}

// ---- 2. Overview stats ----
function StatsSlide() {
  const stats = [
    { n: "168", l: "konten total (84 per akun)", c: "text-ggs-pink" },
    { n: "3", l: "konten per hari untuk tiap akun", c: "text-ggs-gold" },
    { n: "2", l: "video maksimal per hari — selalu di-mix", c: "text-ggs-pink" },
    { n: "28", l: "hari tayang, 4 Nov – 1 Des 2026", c: "text-ggs-gold" },
  ];
  return (
    <Stage>
      <div className="absolute top-[64px] left-[76px]">
        <Kicker color="pink">01 — RINGKASAN</Kicker>
      </div>
      <h2 className="absolute top-[104px] left-[76px] text-[52px] font-bold text-ggs-ink" style={HEAD}>
        Sekilas Rencana
      </h2>
      <div className="absolute top-[230px] left-[76px] flex gap-[56px]">
        {stats.map((s) => (
          <div key={s.n + s.l} className="w-[240px]">
            <div className={`text-[96px] leading-none font-bold ${s.c}`} style={HEAD}>
              {s.n}
            </div>
            <div className="mt-4 text-[16px] leading-snug text-ggs-gray">{s.l}</div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-[110px] left-[76px] flex w-[1128px] items-center border-l-[10px] border-ggs-pink bg-ggs-pink-soft px-8 py-6">
        <p className="text-[16px] leading-relaxed text-ggs-ink">
          Dua akun, dua kepribadian: GGS Beauty tampil lembut putih-pink, GGS Hair Studio tegas hitam-gold. Jadwal
          keduanya disusun terpisah dan tidak saling menyalin.
        </p>
      </div>
      <Footer n={2} />
    </Stage>
  );
}

// ---- 3. Pillars ----
function PillarsSlide() {
  return (
    <Stage>
      <div className="absolute top-[64px] left-[76px]">
        <Kicker color="pink">02 — PILAR KONTEN</Kicker>
      </div>
      <h2 className="absolute top-[104px] left-[76px] text-[52px] font-bold text-ggs-ink" style={HEAD}>
        5 Pilar Konten
      </h2>
      <div className="absolute top-[210px] left-[76px] flex flex-col gap-[22px]">
        {PILLARS.map((p, i) => (
          <div key={p.key} className="flex w-[1128px] items-center gap-6">
            <div
              className={`flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-full text-[20px] font-bold text-white ${p.video ? "bg-ggs-gold" : "bg-ggs-pink"}`}
              style={HEAD}
            >
              0{i + 1}
            </div>
            <div className="w-[420px] text-[22px] font-bold text-ggs-ink" style={HEAD}>
              {p.full}
            </div>
            <div className="flex-1 text-[15px] text-ggs-gray">{p.desc}</div>
            <div
              className={`w-[120px] rounded-full py-1.5 text-center text-[11px] font-bold tracking-widest ${
                p.video ? "bg-ggs-gold-soft text-ggs-gold" : "bg-ggs-pink-soft text-ggs-pink"
              }`}
            >
              {p.video ? "VIDEO" : "NON-VIDEO"}
            </div>
          </div>
        ))}
      </div>
      <Footer n={3} />
    </Stage>
  );
}

// ---- 4. Rhythm ----
function RhythmSlide() {
  const times = [
    { t: "11:00", d: "Konten pagi — video ringan atau promo", dark: false },
    { t: "16:00", d: "GGS Talk — Ngopi Sore, selalu di jam ini", dark: true },
    { t: "19:30", d: "Prime time — video utama atau Ngobras", dark: false },
  ];
  const rules = [
    "Maksimal 2 video per hari — setiap hari pasti ada konten non-video (GGS Talk atau Promo).",
    "Si Elis tampil lebih jarang (12x) supaya komedinya tetap segar dan tidak kejenuhan.",
  ];
  return (
    <Stage>
      <div className="absolute top-[64px] left-[76px]">
        <Kicker color="pink">03 — RITME TAYANG</Kicker>
      </div>
      <h2 className="absolute top-[104px] left-[76px] text-[52px] font-bold text-ggs-ink" style={HEAD}>
        Satu Hari, Tiga Slot Tayang
      </h2>
      <div className="absolute top-[220px] left-[76px] flex gap-[28px]">
        {times.map((it) => (
          <div
            key={it.t}
            className={`h-[220px] w-[357px] rounded-xl p-8 shadow-lg ${it.dark ? "bg-ggs-pink" : "bg-neutral-100"}`}
          >
            <div className={`text-[56px] leading-none font-bold ${it.dark ? "text-white" : "text-ggs-ink"}`} style={HEAD}>
              {it.t}
            </div>
            <div className={`mt-5 text-[15px] ${it.dark ? "text-white/85" : "text-ggs-gray"}`}>{it.d}</div>
          </div>
        ))}
      </div>
      <div className="absolute top-[500px] left-[76px] flex flex-col gap-5">
        {rules.map((r, i) => (
          <div key={r} className="flex items-center gap-4">
            <div className={`h-[18px] w-[18px] shrink-0 ${i === 0 ? "bg-ggs-pink" : "bg-ggs-gold"}`} />
            <div className="text-[17px] text-ggs-ink">{r}</div>
          </div>
        ))}
      </div>
      <Footer n={4} />
    </Stage>
  );
}

// ---- 5. Section Beauty ----
function SectionBeauty() {
  return (
    <Stage>
      <img src={salonBeauty} alt="GGS Beauty" className="absolute top-0 left-0 h-full w-[580px] object-cover" />
      <div className="absolute top-[200px] left-[660px]">
        <Kicker color="pink">BAGIAN 01</Kicker>
      </div>
      <h2 className="absolute top-[250px] left-[660px] text-[64px] font-bold text-ggs-ink" style={HEAD}>
        GGS Beauty
      </h2>
      <p className="absolute top-[380px] left-[660px] text-[18px] leading-relaxed text-ggs-gray">
        84 konten • putih-pink • 4 minggu
        <br />
        Jadwal mingguan di halaman berikutnya.
      </p>
      <div className="absolute bottom-[80px] left-[660px]">
        <RoundLogo src={logoBeauty} size={100} />
      </div>
    </Stage>
  );
}

// ---- Week table ----
function WeekTable({ sched, start, light }: { sched: string[][]; start: number; light: boolean }) {
  const headerCls = light ? "bg-ggs-pink text-white" : "bg-ggs-gold text-ggs-ink";
  const dayCls = light ? "bg-ggs-pink-soft text-ggs-pink" : "bg-ggs-dark-card text-ggs-gold";
  const cellCls = light ? "bg-white text-ggs-ink" : "bg-[#15151A] text-white/90";
  const borderCls = light ? "border-neutral-200" : "border-white/10";
  return (
    <table className={`w-full border-collapse text-[15px] ${borderCls}`}>
      <thead>
        <tr>
          {["Hari", ...SLOTS].map((h) => (
            <th key={h} className={`border ${borderCls} ${headerCls} px-3 py-2.5 text-center text-[16px] font-bold`}>
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sched.slice(start, start + 7).map((cells, d) => (
          <tr key={d}>
            <td className={`border ${borderCls} ${dayCls} px-3 py-2.5 text-left text-[14px] font-bold`}>
              {days[start + d]}
            </td>
            {cells.map((k, s) => (
              <td key={s} className={`border ${borderCls} ${cellCls} px-3 py-2.5 text-center`}>
                {shortName(k)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function WeekSlide({ w, brand }: { w: number; brand: "beauty" | "hair" }) {
  const light = brand === "beauty";
  return (
    <Stage dark={!light}>
      <div className="absolute top-[56px] left-[64px]">
        <Kicker color={light ? "pink" : "gold"}>
          JADWAL MINGGUAN • {light ? "GGS BEAUTY" : "GGS HAIR STUDIO"}
        </Kicker>
      </div>
      <h2
        className={`absolute top-[96px] left-[64px] text-[42px] font-bold ${light ? "text-ggs-ink" : "text-white"}`}
        style={HEAD}
      >
        Minggu {w + 1}
      </h2>
      <div className={`absolute top-[112px] right-[64px] text-[17px] ${light ? "text-ggs-gray" : "text-white/50"}`}>
        {weekRanges[w]}
      </div>
      <div className="absolute top-[170px] left-[64px] w-[1152px]">
        <WeekTable sched={light ? schedBeauty : schedHair} start={w * 7} light={light} />
      </div>
      <div className={`absolute bottom-[26px] left-[64px] text-[12px] ${light ? "text-ggs-gray" : "text-white/40"}`}>
        Ngopi Sore selalu jam 16:00 • maksimal 2 video per hari
      </div>
    </Stage>
  );
}

// ---- 10. Section Hair ----
function SectionHair() {
  return (
    <Stage dark>
      <img src={salonHair} alt="GGS Hair Studio" className="absolute top-0 right-0 h-full w-[580px] object-cover" />
      <div className="absolute top-[200px] left-[90px]">
        <Kicker color="gold">BAGIAN 02</Kicker>
      </div>
      <h2 className="absolute top-[250px] left-[90px] text-[56px] font-bold text-white" style={HEAD}>
        GGS Hair Studio
      </h2>
      <p className="absolute top-[375px] left-[90px] text-[18px] leading-relaxed text-white/50">
        84 konten • hitam-gold • 4 minggu
        <br />
        Jadwal mingguan di halaman berikutnya.
      </p>
      <div className="absolute bottom-[80px] left-[90px]">
        <RoundLogo src={logoHair} size={100} />
      </div>
    </Stage>
  );
}

// ---- 15. Distribution ----
function DistributionSlide() {
  const max = 20;
  return (
    <Stage>
      <div className="absolute top-[64px] left-[76px]">
        <Kicker color="pink">07 — DISTRIBUSI</Kicker>
      </div>
      <h2 className="absolute top-[104px] left-[76px] text-[52px] font-bold text-ggs-ink" style={HEAD}>
        Distribusi Konten per Akun
      </h2>
      <div className="absolute top-[210px] left-[76px] flex h-[360px] w-[760px] items-end gap-10 border-b-2 border-neutral-200 pb-0">
        {PILLARS.map((p) => (
          <div key={p.key} className="flex flex-1 flex-col items-center gap-3">
            <div className="flex h-[300px] items-end gap-2">
              {(["beauty", "hair"] as const).map((b) => (
                <div key={b} className="flex w-[42px] flex-col items-center">
                  <span className="mb-1 text-[12px] font-bold text-ggs-ink">{TARGET[p.key]}</span>
                  <div
                    className={`w-full rounded-t ${b === "beauty" ? "bg-ggs-pink" : "bg-ggs-gold"}`}
                    style={{ height: `${(TARGET[p.key] / max) * 280}px` }}
                  />
                </div>
              ))}
            </div>
            <span className="text-[13px] text-ggs-gray">{p.name}</span>
          </div>
        ))}
      </div>
      <div className="absolute top-[600px] left-[76px] flex gap-6 text-[13px] text-ggs-gray">
        <span className="flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-sm bg-ggs-pink" /> GGS Beauty
        </span>
        <span className="flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-sm bg-ggs-gold" /> GGS Hair Studio
        </span>
      </div>
      <div className="absolute top-[220px] right-[76px] w-[280px]">
        <div className="text-[84px] leading-none font-bold text-ggs-pink" style={HEAD}>
          84
        </div>
        <div className="mt-3 text-[15px] text-ggs-gray">konten per akun dalam 28 hari</div>
        <div className="mt-8 rounded-xl bg-ggs-gold-soft p-5 text-[14px] leading-relaxed text-ggs-ink">
          Si Elis sengaja 12x — jeda antar komedi menjaga kesegaran konten.
        </div>
      </div>
      <Footer n={18} />
    </Stage>
  );
}

// ---- 20. Closing ----
function ClosingSlide() {
  return (
    <Stage dark>
      <img src={salonClosing} alt="GGS" className="absolute top-0 right-0 h-full w-[610px] object-cover" />
      <h2 className="absolute top-[240px] left-[90px] text-[64px] font-bold text-white" style={HEAD}>
        Terima Kasih
      </h2>
      <div className="absolute top-[365px] left-[90px] text-[24px] text-ggs-gold italic">Grooming is Better</div>
      <div className="absolute bottom-[70px] left-[90px] text-[15px] text-white/40">
        Jadwal Konten GGS • 4 Nov – 1 Des 2026
      </div>
    </Stage>
  );
}

// ---- 7-8. Content ideas per service ----
type IdeasRow = { pillar: string; color: "pink" | "gold"; ideas: string[] };

const BEAUTY_IDEAS: IdeasRow[] = [
  {
    pillar: "GGS Talk — Ngopi Sore",
    color: "pink",
    ideas: [
      "Rahasia kuku awet 2 minggu — bahas perawatan nail art",
      "Creambath L'Oréal vs CBD: kapan harus ganti produk?",
      "Totok wajah 45 menit: self-care akhir pekan yang murah",
    ],
  },
  {
    pillar: "Si Elis",
    color: "gold",
    ideas: [
      "Elis salah pilih warna pas colouring — harus bleach padahal takut",
      "Elis pura-pura tahan nyeri pas full body massage 90 menit",
      "Elis kalah sabar nunggu kuku full cat eye + chrome",
    ],
  },
  {
    pillar: "Cinematic Treatment",
    color: "pink",
    ideas: [
      "Before–after keratin smoothing, slow motion",
      "Proses nail art full cat eye diperagakan dari dekat",
      "Sesi lulur + masker badan, suasana ruang spa",
    ],
  },
  {
    pillar: "Ngobras bareng Konsumen",
    color: "gold",
    ideas: [
      "Pelanggan review paket Body Massage + Reflexy sambil direlaksasi",
      "Ngobrol santai bareng pelanggan yang lagi menipedi",
      "Cerita pelanggan: perjuangan colouring + bleaching 6 jam",
    ],
  },
  {
    pillar: "Promo",
    color: "pink",
    ideas: [
      "Paket bundling mulai 140 rb — tampilkan menu lengkapnya",
      "Menipedi 120 rb — promo hari tertentu",
      "Jualan produk: Body Lotion Malam & Clay Matte",
    ],
  },
];

const HAIR_IDEAS: IdeasRow[] = [
  {
    pillar: "GGS Talk — Ngopi Sore",
    color: "gold",
    ideas: [
      "Bedanya hair mask dan creambath — jawab satu babak",
      "Kapan rambut butuh keratin? Sign-nya kering & bercabang",
      "Pijat kepala 15 menit, penyelamat paling ampuh di sore hari",
    ],
  },
  {
    pillar: "Si Elis",
    color: "pink",
    ideas: [
      "Elis minta potongan ala artis, hasilnya gagal total",
      "Elis bengong menahan kejut saat bleaching rambut",
      "Elis vs jenggot yang keras kepala",
    ],
  },
  {
    pillar: "Cinematic Treatment",
    color: "gold",
    ideas: [
      "Slow-motion proses potong rambut di kursi barbershop",
      "Timelapse highlight bleaching, dari cokelat ke blonde",
      "Ritual paket GPS: potong + creambath + tonik",
    ],
  },
  {
    pillar: "Ngobras bareng Konsumen",
    color: "pink",
    ideas: [
      "Pelanggan cerita sebelum–sesudah potong rambut",
      "Ngobrol bareng pelanggan keratin smoothing",
      "Reaksi pertama pelanggan lihat hasil pewarnaan",
    ],
  },
  {
    pillar: "Promo",
    color: "gold",
    ideas: [
      "Paket G 45 rb — potong + pijat bahu, tampilkan harga besar",
      "Paket GPS 100 rb — lengkap dari potong sampai facial",
      "Keratin smoothing mulai 300 rb, rambut lurus alami",
    ],
  },
];

function ContentIdeasSlide({
  brand,
  num,
}: {
  brand: "beauty" | "hair";
  num: number;
}) {
  const isBeauty = brand === "beauty";
  const rows = isBeauty ? BEAUTY_IDEAS : HAIR_IDEAS;
  return (
    <Stage>
      <div className="absolute top-[46px] left-[64px]">
        <Kicker color={isBeauty ? "pink" : "gold"}>
          {isBeauty ? "04" : "05"} — IDE KONTEN SPESIFIK • {isBeauty ? "GGS BEAUTY" : "GGS HAIR STUDIO"}
        </Kicker>
      </div>
      <h2
        className={`absolute top-[80px] left-[64px] text-[40px] font-bold ${isBeauty ? "text-ggs-ink" : "text-ggs-ink"}`}
        style={HEAD}
      >
        Konten Ditarik Langsung dari Layanan
      </h2>
      <div className="absolute top-[152px] left-[64px] flex w-[1152px] flex-col gap-[14px]">
        {rows.map((r) => (
          <div key={r.pillar} className="flex items-start gap-5">
            <div
              className={`w-[230px] shrink-0 text-[16px] font-bold ${r.color === "pink" ? "text-ggs-pink" : "text-ggs-gold"}`}
              style={HEAD}
            >
              {r.pillar}
            </div>
            <div className="flex flex-1 flex-col gap-1.5">
              {r.ideas.map((idea, i) => (
                <div key={idea} className="flex items-center gap-2.5">
                  <span
                    className={`h-[8px] w-[8px] shrink-0 rounded-full ${r.color === "pink" ? "bg-ggs-pink" : "bg-ggs-gold"}`}
                  />
                  <span className="text-[15px] text-ggs-ink">{idea}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer n={num} />
    </Stage>
  );
}

// ---- 9. Production flow ----
function FlowSlide() {
  const steps = [
    {
      n: "01",
      t: "Brief tiap Senin",
      d: "Pilih layanan unggulan minggu ini dari jadwal, siapkan naskah Si Elis.",
    },
    {
      n: "02",
      t: "Syuting batch",
      d: "2 sesi syuting per minggu per akun — semua video minggu itu direkam sekaligus.",
    },
    {
      n: "03",
      t: "Editing H-1",
      d: "Video dirapikan dan caption + hashtag siap sehari sebelum tayang.",
    },
    {
      n: "04",
      t: "Tayang sesuai slot",
      d: "11:00, 16:00 (GGS Talk), 19:30 — caption selalu membawa CTA booking.",
    },
    {
      n: "05",
      t: "Evaluasi mingguan",
      d: "Catat video terbaik, gandakan pola konten serupa untuk minggu depan.",
    },
  ];
  return (
    <Stage>
      <div className="absolute top-[64px] left-[76px]">
        <Kicker color="pink">06 — ALUR PRODUKSI</Kicker>
      </div>
      <h2 className="absolute top-[104px] left-[76px] text-[52px] font-bold text-ggs-ink" style={HEAD}>
        Dari Brief Sampai Tayang
      </h2>
      <div className="absolute top-[240px] left-[76px] flex items-start">
        {steps.map((s, i) => (
          <div key={s.n} className="relative flex w-[240px] flex-col gap-4">
            <div
              className={`flex h-[64px] w-[64px] items-center justify-center rounded-full text-[20px] font-bold text-white ${i % 2 === 0 ? "bg-ggs-pink" : "bg-ggs-gold"}`}
              style={HEAD}
            >
              {s.n}
            </div>
            <div className="text-[20px] font-bold text-ggs-ink" style={HEAD}>
              {s.t}
            </div>
            <div className="pr-4 text-[14px] leading-relaxed text-ggs-gray">{s.d}</div>
            {i < steps.length - 1 && (
              <div className="absolute top-[28px] left-[72px] h-[2px] w-[174px] bg-neutral-200" />
            )}
          </div>
        ))}
      </div>
      <div className="absolute bottom-[120px] left-[76px] flex w-[1128px] items-center border-l-[10px] border-ggs-gold bg-ggs-gold-soft px-8 py-6">
        <p className="text-[16px] leading-relaxed text-ggs-ink">
          Konsisten lebih penting daripada sempurna: konten tayang setiap hari sesuai jadwal, bukan saat mood datang.
        </p>
      </div>
      <Footer n={7} />
    </Stage>
  );
}

export const slides: { id: string; el: () => ReactNode }[] = [
  { id: "cover", el: CoverSlide },
  { id: "stats", el: StatsSlide },
  { id: "pillars", el: PillarsSlide },
  { id: "rhythm", el: RhythmSlide },
  { id: "ideas-beauty", el: () => <ContentIdeasSlide brand="beauty" num={5} /> },
  { id: "ideas-hair", el: () => <ContentIdeasSlide brand="hair" num={6} /> },
  { id: "flow", el: FlowSlide },
  { id: "section-beauty", el: SectionBeauty },
  ...[0, 1, 2, 3].map((w) => ({ id: `beauty-w${w + 1}`, el: () => <WeekSlide w={w} brand="beauty" /> })),
  { id: "section-hair", el: SectionHair },
  ...[0, 1, 2, 3].map((w) => ({ id: `hair-w${w + 1}`, el: () => <WeekSlide w={w} brand="hair" /> })),
  { id: "distribution", el: DistributionSlide },
  { id: "closing", el: ClosingSlide },
];
