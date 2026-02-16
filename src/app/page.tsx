// app/page.tsx
export default function Page() {
  // =======================
  // EDIT DI SINI SAJA
  // =======================
  const WA_NUMBER = "6283147432334"; // WA Business kamu (format 62, tanpa +)
  const BRAND = "Digital Graphs-On";
  const STORE_NAME = "Toko Graphs-On";
  const ADDRESS =
    "Jl. Kihajardewantara No. 10, Keresek, Cibatu, Kab. Garut (sebrang UPT Puskesmas Cibatu)";
  const NOTE_SMALL =
    "Contoh di atas hanya merupakan feed contoh, hasil akhir menyesuaikan produk kamu (warna, ukuran, style).";

  // Ganti file gambar kamu di folder: /public/assets/
  const ASSETS = {
    before: "/assets/before.jpg",
    after: [
      "/assets/after-1.jpg",
      "/assets/after-2.jpg",
      "/assets/after-3.jpg",
      "/assets/after-4.jpg",
    ],
    detail: ["/assets/detail-1.jpg", "/assets/detail-2.jpg"],
    feed: "/assets/feed.jpg",
  };

  const PACKAGES = [
    {
      id: "A",
      name: "Paket A",
      price: 149000,
      bestDeal: false,
      bullets: [
        "2 Produk → 8 Foto Model Realistis (menyesuaikan keinginan)",
        "1 Video 10 Detik (Reels)",
        "2 Desain Feed + Caption + Hashtag",
      ],
    },
    {
      id: "B",
      name: "Paket B",
      price: 249000,
      bestDeal: false,
      bullets: [
        "3 Produk → 12 Foto Model Realistis (menyesuaikan keinginan)",
        "1 Video 10 Detik (Reels)",
        "2 Desain Feed + Caption + Hashtag",
      ],
    },
    {
      id: "C",
      name: "Paket C",
      price: 299000,
      bestDeal: true, // BEST DEAL DI SINI
      bullets: [
        "3 Produk → 12 Foto Model Realistis (menyesuaikan keinginan)",
        "1 Video 10 Detik (Reels)",
        "3 Desain Feed + Caption + Hashtag",
        "Panduan Iklan Meta (basic) + contoh copy iklan",
      ],
    },
    {
      id: "D",
      name: "Paket D",
      price: 549000,
      bestDeal: false,
      bullets: [
        "4 Produk → 16 Foto Model Realistis (menyesuaikan keinginan)",
        "2 Video 10 Detik (Reels)",
        "3 Desain Feed + Caption + Hashtag",
        "Panduan Iklan Meta (basic) + contoh copy iklan",
      ],
    },
  ];

  // Add-on kecil (opsional) — kamu bisa ubah harganya bebas
  const ADDONS = [
    { name: "Tambah 3 Foto Model", price: 39000 },
    { name: "Tambah 1 Video 10 Detik", price: 69000 },
    { name: "Resize semua format (1:1, 4:5, 9:16)", price: 29000 },
  ];

  // Aturan main (biar aman & gak boncos revisi)
  const POLICY = {
    time: "Estimasi selesai 24–48 jam (sesuai batch).",
    revision: "Revisi: 1x revisi minor. Ganti konsep total / ganti produk = add-on.",
    safety:
      "Catatan: Visual AI untuk materi promosi. Detail produk mengacu pada foto asli.",
    guarantee:
      "Jaminan deliverable: jumlah output (foto/video/desain) sesuai paket akan dipenuhi—tanpa janji omzet/hasil penjualan.",
  };
  // =======================
  // SELESAI EDIT
  // =======================

  const formatIDR = (n: number) => new Intl.NumberFormat("id-ID").format(n);

  function waLink(pkgId?: string, pkgName?: string, pkgPrice?: number) {
    const lines = [
      "Halo, saya mau order Paket Konten Jualan Siap Posting.",
      pkgName ? `Paket: ${pkgName} (${pkgId})` : "",
      pkgPrice ? `Harga Paket: Rp${formatIDR(pkgPrice)}` : "",
      "",
      "Nama produk: ...",
      "Jenis produk: ... (baju/skincare/makanan/dll)",
      "Platform: Shopee / IG / TikTok",
      "Warna/ukuran (jika ada): ...",
      "Style yang diinginkan: Studio clean / Lifestyle rumah / Outdoor",
      "Harga jual produk (opsional): ...",
      "Deadline: ...",
      "",
      "Saya kirim foto produk sekarang ya.",
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join("\n"));
    return `https://wa.me/${WA_NUMBER}?text=${text}`;
  }

  const bestDeal = PACKAGES.find((p) => p.bestDeal) ?? PACKAGES[0];
  const MAIN_WA = waLink(bestDeal.id, `${bestDeal.name} (BEST DEAL)`, bestDeal.price);

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="mx-auto w-full max-w-[420px] px-4 pb-12 pt-6">
        {/* HEADER */}
        <div className="text-center">
          <div className="text-xl font-extrabold text-red-600">Dari 1 Foto Produk</div>
          <div className="text-lg font-semibold">
            Jadi Paket Konten Jualan Siap Posting
          </div>

          <p className="mx-auto mt-3 max-w-[360px] text-sm text-neutral-700">
            Cocok untuk pemula, reseller, atau seller yang ingin tampilan produk lebih
            menarik tanpa ribet mikir konten.
          </p>

          <div className="mt-6 text-sm font-extrabold text-red-600">
            APA YANG KALIAN DAPATKAN?
          </div>
          <div className="mt-1 text-sm font-semibold">
            Output siap upload untuk Shopee/TikTok/IG
            <br />
            Tanpa ribet mikir konten, desain, dll
          </div>

          <div className="mt-4 text-sm text-neutral-800">yang didapatkan:</div>

          {/* LIST OUTPUT */}
          <ul className="mx-auto mt-3 w-full max-w-[360px] space-y-2 text-left text-sm">
            {[
              "Foto Model Realistis (3–5 scene)",
              "Video 10 Detik (reels-ready)",
              "Desain Feed + Caption + Hashtag",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <span className="mt-[2px] inline-flex h-4 w-4 items-center justify-center rounded bg-green-600 text-xs font-bold text-white">
                  ✓
                </span>
                <span className="font-semibold">{t}</span>
              </li>
            ))}
          </ul>

          {/* WHY ORDER */}
          <div className="mt-6 text-sm font-bold">Kenapa Harus Order:</div>
          <ul className="mx-auto mt-3 w-full max-w-[360px] space-y-2 text-left text-sm">
            {[
              "Tidak perlu fotografer",
              "Tidak perlu bayar model mahal",
              "Tidak perlu setting apa pun",
              "Kamu tinggal kirim foto, kami yang kerjakan",
              "Tampilan produk naik kelas (lebih profesional)",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <span className="mt-[2px] inline-flex h-4 w-4 items-center justify-center rounded bg-green-600 text-xs font-bold text-white">
                  ✓
                </span>
                <span>{t}</span>
              </li>
            ))}
          </ul>

          {/* POLICY BOX */}
          <div className="mt-6 rounded border bg-neutral-50 p-3 text-left text-xs text-neutral-700">
            <div className="font-bold">Info penting:</div>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>{POLICY.time}</li>
              <li>{POLICY.revision}</li>
              <li>{POLICY.safety}</li>
              <li className="font-semibold">{POLICY.guarantee}</li>
            </ul>
          </div>
        </div>

        {/* RED BAR */}
        <div className="mt-8 rounded bg-red-600 py-3 text-center text-sm font-extrabold text-white">
          CONTOH BEFORE - AFTER 👇👇
        </div>

        {/* BEFORE */}
        <div className="mt-5 text-center text-sm font-semibold">
          Hasil jepretan foto produk kamu
        </div>
        <div className="mt-3 flex justify-center">
          <img
            src={ASSETS.before}
            alt="Before"
            className="h-auto w-[260px] rounded border object-cover"
          />
        </div>

        {/* AFTER */}
        <div className="mt-4 text-center text-sm font-semibold">
          HASILNYA SEPERTI INI:
        </div>
        <div className="mt-3 grid grid-cols-2 gap-3">
          {ASSETS.after.map((src) => (
            <img
              key={src}
              src={src}
              alt="After"
              className="aspect-square w-full rounded border object-cover"
            />
          ))}
        </div>

        {/* DETAIL */}
        <div className="mt-7 text-center text-lg font-extrabold text-red-600">
          DETAIL TAJAM
        </div>
        <div className="mt-3 grid grid-cols-2 gap-3">
          {ASSETS.detail.map((src) => (
            <img
              key={src}
              src={src}
              alt="Detail"
              className="aspect-square w-full rounded border object-cover"
            />
          ))}
        </div>

        {/* FEED */}
        <div className="mt-7 text-center text-sm font-extrabold text-red-600">
          CONTOH FEED SIAP UPLOAD
        </div>
        <div className="mt-3 flex justify-center">
          <img
            src={ASSETS.feed}
            alt="Feed"
            className="h-auto w-[300px] rounded border object-cover"
          />
        </div>

        <div className="mt-3 text-center text-sm font-bold">Keterangan:</div>
        <p className="mt-1 text-center text-[11px] leading-relaxed text-neutral-600">
          {NOTE_SMALL}
        </p>

        {/* BLUE BAR */}
        <div className="mt-7 rounded bg-blue-700 py-3 text-center text-sm font-extrabold text-white">
          Pilihan Paket dan Cara Order
        </div>

        {/* PACKAGES */}
        <div className="mt-4 space-y-4 text-sm">
          {PACKAGES.map((p) => (
            <div
              key={p.id}
              className={`rounded border p-3 ${
                p.bestDeal ? "border-green-600 bg-green-50" : "bg-white"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="font-extrabold">
                      • {p.name}{" "}
                      {p.bestDeal ? (
                        <span className="rounded bg-green-600 px-2 py-[2px] text-xs font-extrabold text-white">
                          BEST DEAL
                        </span>
                      ) : null}
                    </div>
                  </div>
                  <div className="mt-1 text-xs text-neutral-600">
                    Cocok untuk seller yang mau hasil lengkap & siap posting.
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-extrabold text-red-600">
                    Rp{formatIDR(p.price)}
                  </div>
                </div>
              </div>

              <ul className="mt-2 space-y-1 pl-1 text-[13px] text-neutral-800">
                {p.bullets.map((b) => (
                  <li key={b}>- {b}</li>
                ))}
              </ul>

              <div className="mt-3 flex gap-2">
                <a
                  href={waLink(p.id, p.bestDeal ? `${p.name} (BEST DEAL)` : p.name, p.price)}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex-1 rounded px-3 py-2 text-center text-sm font-extrabold shadow ${
                    p.bestDeal
                      ? "bg-green-500 text-black"
                      : "bg-neutral-900 text-white"
                  }`}
                >
                  Order via WA
                </a>
              </div>

              {p.bestDeal ? (
                <div className="mt-2 text-[11px] text-neutral-700">
                  🔥 Rekomendasi: paling “worth it” karena dapat 3 desain + panduan iklan basic.
                </div>
              ) : null}
            </div>
          ))}
        </div>

        {/* ADD-ON */}
        <div className="mt-6 rounded border bg-white p-3">
          <div className="text-sm font-extrabold text-red-600">ADD-ON (OPSIONAL)</div>
          <div className="mt-1 text-xs text-neutral-600">
            Kalau mau hasil lebih banyak, tinggal tambah:
          </div>
          <ul className="mt-2 space-y-1 text-sm text-neutral-800">
            {ADDONS.map((a) => (
              <li key={a.name} className="flex items-center justify-between gap-2">
                <span>- {a.name}</span>
                <span className="font-extrabold text-red-600">
                  Rp{formatIDR(a.price)}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-2 text-[11px] text-neutral-600">
            (Add-on dibayar hanya kalau kamu setuju & butuh tambahan.)
          </div>
        </div>

        {/* MAIN CTA BUTTON (Paket C) */}
        <div className="mt-6 flex justify-center">
          <a
            href={MAIN_WA}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded bg-green-500 px-6 py-3 text-sm font-extrabold text-black shadow"
          >
            <span className="text-lg">🟢</span>
            GAS-PESAN SEKARANG (PAKET C - BEST DEAL)
          </a>
        </div>

        {/* HOW TO ORDER */}
        <div className="mt-6 text-center text-sm font-extrabold">Cara Order</div>
        <ol className="mx-auto mt-3 max-w-[360px] list-decimal space-y-1 pl-5 text-sm text-neutral-800">
          <li>Klik tombol “Gas-Pesan Sekarang” (atau pilih paket A/B/C/D).</li>
          <li>Kamu diarahkan ke WhatsApp.</li>
          <li>Kirim detail singkat + foto produk (langsung kirim di chat).</li>
          <li>Kamu bayar sesuai paket (transfer/VA sesuai kesepakatan).</li>
          <li>Kami proses sesuai batch.</li>
          <li className="font-extrabold text-red-600">
            File dikirim, siap upload dan siap posting.
          </li>
        </ol>

        {/* FOOTER */}
        <div className="mt-8 text-center text-xs text-neutral-700">
          <div className="font-bold">Copy Right | Editing Digital {BRAND}</div>
          <div className="mt-1 text-[11px] text-neutral-600">
            Semua contoh di atas hanya contoh garapan.
          </div>

          <div className="mt-5 text-sm font-extrabold">{STORE_NAME}</div>
          <div className="mt-1 text-[11px] text-neutral-600">{ADDRESS}</div>

          <div className="mt-4 text-[11px] text-neutral-500">
            Tips: Ganti gambar di <span className="font-semibold">/public/assets</span>{" "}
            dan edit copy/harga di bagian <span className="font-semibold">EDIT DI SINI SAJA</span>.
          </div>
        </div>
      </div>
    </main>
  );
}
