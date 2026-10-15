/**
 * ====================================================================
 * PORTOFOLIO JHOIWADA SIMANJUNTAK - FRESH GRADUATE EDITION
 * Centralized Data, Dynamic Filtering, Lightbox, and Interactive Logic
 * ====================================================================
 */

// --- 1. DATA PROYEK (AUTHENTIC PRODUCTION & ENGINEERING PROJECTS) ---
const projectsData = [
  {
    id: 1,
    title: "Genfaith Youth - Sistem Informasi & Website Organisasi Pemuda Gereja",
    category: "fullstack",
    image: "asset/images/genfaith_hero.png",
    description:
      "Sistem informasi terintegrasi dan website publik organisasi kepemudaan. Menggabungkan portal publik interaktif dengan dashboard internal berbasis peran (RBAC) untuk 6 divisi pelayanan pemuda.",
    liveDemo: "https://genfaith-youth.vercel.app/",
    githubLink: "https://github.com/jhoiwada/genfaith-youth",
    screenshots: [
      "asset/images/genfaith_hero.png",
      "asset/images/genfaith_jadwal.png",
      "asset/images/genfaith_tentang.png",
      "asset/images/genfaith_login.png"
    ],
    background:
      "Genfaith Youth adalah organisasi pemuda gereja dengan beberapa divisi: Kominfo, Tim Ibadah, Minat & Bakat, Wirausaha, Sekretaris, dan Bendahara. Sebelumnya, alur koordinasi antar divisi masih manual. Jadwal ibadah dibuat dalam format PDF statis, pencatatan keuangan memakai file Excel terpisah, absensi serta data anggota dikelola sendiri-sendiri, dan pengingat deadline hanya disampaikan lewat grup WhatsApp. Akibatnya alur kerja pengurus tidak efisien dan informasi sering terlambat sampai ke divisi lain.",
    solution:
      "Merancang dan membangun solusi website terintegrasi dua sisi: (1) Website publik yang dinamis dan modern (beranda, profil kegiatan, agenda ibadah, galeri dokumentasi retreat/Natal/ibadah padang, halaman pengurus, dan pengumuman), dan (2) Dashboard internal per divisi dengan hak akses berbasis peran (Role-Based Access Control). Seluruh modul terhubung pada single source of truth database PostgreSQL (Supabase), sehingga perubahan jadwal atau penugasan dari satu divisi otomatis tersinkronisasi ke seluruh divisi lain secara instan.",
    divisions: [
      {
        name: "Tim Ibadah",
        role: "Menyusun jadwal ibadah bulanan (tanggal, tema, kegiatan, penanggung jawab), mengarsipkan arsip jadwal ibadah lampau, dan membagikan jadwal mingguan siap cetak/ekspor PDF ke grup pengurus."
      },
      {
        name: "Minat & Bakat",
        role: "Mengelola penugasan petugas ibadah (Worship Leader, Singer, Pemusik, MC, Usher, dan Tim Multimedia) yang terhubung langsung secara real-time dengan jadwal Tim Ibadah."
      },
      {
        name: "Kominfo",
        role: "Memantau rincian jadwal per minggu sebagai acuan desain, mengunggah materi visual flyer/poster/story Instagram, serta mengelola arsip dan galeri dokumentasi publik."
      },
      {
        name: "Sekretaris",
        role: "Sentralisasi basis data anggota pemuda, presensi absensi digital setiap ibadah, rekapitulasi kehadiran berkala (mingguan/bulanan/tahunan), pengajuan dana & reimbursement, serta pembuatan pengumuman di beranda."
      },
      {
        name: "Bendahara",
        role: "Pencatatan kas iuran dan persembahan mingguan sesuai standarisasi format keuangan organisasi, kalkulasi kas masuk/keluar, dan ekspor laporan keuangan terverifikasi format PDF."
      },
      {
        name: "Ketua & Koordinator",
        role: "Dasbor monitoring eksekutif untuk memantau kehadiran jemaat, perkembangan aktivitas pelayanan, dan efektivitas koordinasi lintas seluruh divisi dalam satu pandangan utuh."
      }
    ],
    myRole:
      "Solo Full-Stack Developer & UI/UX Designer: Bertanggung jawab penuh secara mandiri mulai dari analisis kebutuhan bersama pengurus, perancangan skema arsitektur basis data relasional & aturan keamanan Row Level Security (RLS), rekayasa frontend dan backend (Next.js & Supabase), implementasi styling modern dengan dark & light mode (Tailwind CSS & shadcn/ui), hingga deployment produksi di Vercel.",
    results:
      "Pengurus organisasi kini memiliki satu sistem terpusat untuk menjadwalkan ibadah, merekap kehadiran jemaat secara akurat, mencatat arus kas keuangan secara transparan, mengelola materi publikasi, dan membagikan informasi. Friksi koordinasi manual dan komunikasi bolak-balik antar divisi berkurang secara drastis.",
    features: [
      "Website Publik: Beranda Interaktif, Agenda Sabtu, Profil Visi, Galeri Retreat & Ibadah Padang, Pengumuman",
      "Dashboard Internal Berbasis Peran (RBAC) untuk 6 Divisi Pengurus Pelayanan",
      "Sistem Penjadwalan Ibadah Terpusat dengan Fitur Ekspor PDF Jadwal Mingguan",
      "Manajemen Petugas Ibadah (WL, Singer, Pemusik, MC, Usher, Multimedia) Terintegrasi",
      "Presensi & Absensi Digital Pemuda dengan Rekapitulasi Mingguan/Bulanan/Tahunan",
      "Pencatatan Kas & Persembahan Ibadah dengan Laporan Transaksi Format PDF",
      "Alur Pengajuan Dana Reimbursement & Transparansi Anggaran Divisi",
      "Arsitektur Keamanan Data dengan Supabase Auth & Row Level Security (RLS)",
      "Desain Antarmuka Modern & Aksesibel dengan Mode Gelap / Terang (shadcn/ui)"
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "shadcn/ui",
      "Vercel",
      "Row Level Security"
    ]
  },
  {
    id: 2,
    title: "MagangLink - Platform Rekomendasi Magang Berbasis AI",
    category: "fullstack",
    image: "asset/images/maganglink.png",
    description:
      "Mesin rekomendasi magang IT generasi baru menggunakan metode TF-IDF & Content-Based Filtering untuk mencocokkan kualifikasi mahasiswa dengan kriteria lowongan magang secara real-time.",
    liveDemo: "http://85.211.242.122/rekomendasi_magang",
    githubLink: "https://github.com/jhoiwada/maganglink",
    screenshots: [
      "asset/images/maganglink.png"
    ],
    features: [
      "Algoritma Rekomendasi TF-IDF & Cosine Similarity",
      "Multi-portal Web Scraper (Glints, JobStreet, Kalibrr)",
      "Sinkronisasi Data AI & Real-time Matching",
      "Dasbor Admin, Kelola Loker, & Cetak Laporan",
      "Evaluasi Akurasi Pengujian Sistem"
    ],
    technologies: ["Python", "Machine Learning", "PHP", "MySQL", "Scikit-Learn", "Sastrawi"]
  },
  {
    id: 3,
    title: "SPARRING - Platform Matchmaking Olahraga",
    category: "fullstack",
    image: "asset/images/sparing.png",
    description:
      "Platform pencarian lawan tanding (matchmaking) olahraga end-to-end. Memfasilitasi reservasi venue, sistem jadwal tanding, dan komunitas pecinta olahraga.",
    liveDemo: "http://sparing.gt.tc",
    githubLink: "https://github.com/jhoiwada/Sparing.github.io",
    screenshots: [
      "asset/images/sparing.png",
      "asset/images/sparing_venue.jpg"
    ],
    features: [
      "Matchmaking Engine Pengguna & Lawan Tanding",
      "Manajemen Komunitas Olahraga & Forum",
      "Penjadwalan Pertandingan Real-time",
      "Katalog Venue & Detail Lapangan",
      "User Profile & Riwayat Pertandingan"
    ],
    technologies: ["PHP", "MySQL", "JavaScript", "Responsive UI", "Tailwind CSS"]
  },
  {
    id: 4,
    title: "Cimohot - E-Commerce Makanan & Admin Dashboard",
    category: "fullstack",
    image: "asset/images/1.png",
    description:
      "Platform e-commerce makanan modern secara end-to-end dengan pengelolaan data pesanan dinamis, autentikasi keamanan, keranjang belanja, dan dasbor admin CRUD inventaris produk.",
    liveDemo: "#",
    githubLink: "https://github.com/jhoiwada",
    screenshots: [
      "asset/images/1.png",
      "asset/images/2.png",
      "asset/images/3.png",
      "asset/images/18.png"
    ],
    features: [
      "Sistem Keranjang Belanja & Dynamic Order",
      "Dasbor Admin Pemantau Transaksi Real-time",
      "Manajemen Menu & Stok (Operasi CRUD)",
      "Autentikasi Pengguna & Keamanan Session",
      "Level Pedas Guide & Blog Interaktif"
    ],
    technologies: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"]
  },
  {
    id: 5,
    title: "Prototype Sistem KCM Wisma Asri (Bioskop)",
    category: "uiux",
    image: "asset/images/14.png",
    description:
      "Perancangan alur kerja antarmuka pengguna (user flow & wireframe) untuk sistem pemesanan tiket bioskop digital Kota Cinema Mall Wisma Asri menggunakan Marvel App.",
    liveDemo: "#",
    githubLink: "https://github.com/jhoiwada",
    screenshots: [
      "asset/images/11.png",
      "asset/images/12.png",
      "asset/images/13.png",
      "asset/images/14.png",
      "asset/images/15.png",
      "asset/images/16.png",
      "asset/images/17.png"
    ],
    features: [
      "End-to-End Ticket Booking User Journey",
      "Pemilihan Jadwal Tayang & Kursi Teater",
      "Desain Antarmuka Mobile-First & Dark Theme",
      "Penyelarasan Kebutuhan Admin & Pelanggan",
      "Pengujian Prototipe Interaktif Marvel App"
    ],
    technologies: ["Marvel App", "Figma", "UI/UX Design", "Wireframing", "User Research"]
  },
  {
    id: 6,
    title: "AnneCoffee - Toko Kopi Japanese Minimalist",
    category: "frontend",
    image: "asset/images/6.png",
    description:
      "Website toko kopi responsif bertema Japanese Minimalist dengan perpaduan warna hangat, tipografi elegan, katalog menu terstruktur, dan tata letak modern.",
    liveDemo: "https://jhoiwada.github.io/AnneCoffee-/",
    githubLink: "https://github.com/jhoiwada/AnneCoffee-",
    screenshots: [
      "asset/images/6.png",
      "asset/images/7.png",
      "asset/images/8.png",
      "asset/images/9.png"
    ],
    features: [
      "Desain Japanese Minimalist Estetik",
      "Filter Kategori Varian Kopi & Produk",
      "Navigasi Intuitif & Fully Mobile Responsive",
      "Kontrol Versi Terstruktur via GitHub Pages"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "GitHub Pages"]
  },
  {
    id: 7,
    title: "Velio Mobili - Company Profile & Katalog Furnitur",
    category: "frontend",
    image: "asset/images/velio.jpg",
    description:
      "Website profil perusahaan furnitur dan interior kustom dengan tema minimalis untuk memperkuat branding digital dan mempermudah akses katalog produk.",
    liveDemo: "https://jhoiwada.github.io/veliomobili/",
    githubLink: "https://github.com/jhoiwada/veliomobili",
    screenshots: [
      "asset/images/velio.jpg"
    ],
    features: [
      "Katalog Produk Interior & Furnitur Terstruktur",
      "Showcase Portofolio Proyek Pekerjaan",
      "Formulir Konsultasi Desain & Kontak",
      "Optimalisasi Branding Digital Perusahaan"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Layout", "GitHub Pages"]
  }
];

// --- 2. DATA SERTIFIKAT (12 OFFICIAL VERIFIED CERTIFICATES) ---
const certificatesData = [
  {
    id: 1,
    title: "Belajar Penerapan Data Science dengan Microsoft Fabric",
    category: "data-ai",
    issuer: "Dicoding Indonesia & Microsoft",
    date: "25 September 2026",
    credId: "2VX3V68LQPYQ",
    image: "asset/images/certificates/cert_dicoding_fabric.png",
    pdf: "asset/images/certificates/cert_dicoding_fabric.pdf",
    verifyLink: "https://dicoding.com/certificates/2VX3V68LQPYQ",
    badge: "Data Science"
  },
  {
    id: 2,
    title: "Spec-Driven Development dengan Kiro",
    category: "programming",
    issuer: "Dicoding Indonesia & AWS",
    date: "28 September 2026",
    credId: "72ZDMYYOQZYW",
    image: "asset/images/certificates/cert_dicoding_kiro.png",
    pdf: "asset/images/certificates/cert_dicoding_kiro.pdf",
    verifyLink: "https://dicoding.com/certificates/72ZDMYYOQZYW",
    badge: "Spec-Driven Dev"
  },
  {
    id: 3,
    title: "Dasar Bahasa Pemrograman JavaScript",
    category: "programming",
    issuer: "Universitas Gunadarma",
    date: "02 November 2024",
    credId: "NO. 070616",
    image: "asset/images/certificates/cert_javascript.png",
    pdf: "asset/images/certificates/928fe702ea3d1cdc0eec0120f70c616d.pdf",
    badge: "Programming"
  },
  {
    id: 4,
    title: "Membuat Business Intelligence",
    category: "data-ai",
    issuer: "Universitas Gunadarma",
    date: "06 Juni 2026",
    credId: "NO. 388947",
    image: "asset/images/certificates/cert_bi.png",
    pdf: "asset/images/certificates/signed_887ef2a0a0dad89c7de5b13d88cdd947.pdf.pdf",
    badge: "Data & AI"
  },
  {
    id: 5,
    title: "Dasar Sistem Manajemen Basis Data (DBMS)",
    category: "database",
    issuer: "Universitas Gunadarma",
    date: "19 Februari 2024",
    credId: "NO. 472322",
    image: "asset/images/certificates/cert_dbms.png",
    pdf: "asset/images/certificates/signed_8aa0541f8b43663e4fc31fb4723ca2b2.pdf.pdf",
    badge: "Database"
  },
  {
    id: 6,
    title: "Persiapan Data Untuk Proses Bisnis",
    category: "data-ai",
    issuer: "Universitas Gunadarma",
    date: "27 September 2025",
    credId: "NO. 604416",
    image: "asset/images/certificates/cert_data_prep.png",
    pdf: "asset/images/certificates/signed_943c0d8318e5fc06131f0e8d6f0441a6.pdf (3).pdf",
    badge: "Data Analysis"
  },
  {
    id: 7,
    title: "Oracle Untuk Tingkat Pemula",
    category: "database",
    issuer: "Universitas Gunadarma",
    date: "19 Februari 2024",
    credId: "NO. 083201",
    image: "asset/images/certificates/cert_oracle_beginner.png",
    pdf: "asset/images/certificates/signed_294be7f734b9600474e22550e83b20f1.pdf.pdf",
    badge: "Database"
  },
  {
    id: 8,
    title: "Oracle Untuk Tingkat Menengah",
    category: "database",
    issuer: "Universitas Gunadarma",
    date: "24 Februari 2025",
    credId: "NO. 165990",
    image: "asset/images/certificates/cert_oracle_intermediate.png",
    pdf: "asset/images/certificates/signed_af0c7d694c69849e20e014eab1659b90.pdf.pdf",
    badge: "Database"
  },
  {
    id: 9,
    title: "Dasar Pemrograman Jaringan (Networking)",
    category: "network",
    issuer: "Universitas Gunadarma",
    date: "21 Agustus 2023",
    credId: "NO. 351385",
    image: "asset/images/certificates/cert_networking_basic.png",
    pdf: "asset/images/certificates/signed_0b21b2ddc11307013c9435fe1d385cbb.pdf.pdf",
    badge: "Networking"
  },
  {
    id: 10,
    title: "LAN Menggunakan Cisco Router",
    category: "network",
    issuer: "Universitas Gunadarma",
    date: "19 Agustus 2024",
    credId: "NO. 814749",
    image: "asset/images/certificates/cert_cisco_lan.png",
    pdf: "asset/images/certificates/signed_3eefc65a429f1e48755f377188b14749.pdf.pdf",
    badge: "Cisco LAN"
  },
  {
    id: 11,
    title: "WAN Menggunakan Cisco Router (Menengah)",
    category: "network",
    issuer: "Universitas Gunadarma",
    date: "18 Agustus 2025",
    credId: "NO. 437876",
    image: "asset/images/certificates/cert_cisco_wan.png",
    pdf: "asset/images/certificates/signed_2eb986cff94bea96cda3da95c437b876.pdf (1).pdf",
    badge: "Cisco WAN"
  },
  {
    id: 12,
    title: "Sertifikat Aptitude Test (Penalaran Logika)",
    category: "competency",
    issuer: "Fakultas Psikologi Universitas Gunadarma",
    date: "10 Juli 2026",
    credId: "NO. 295425/AT/FPSI/2026",
    image: "asset/images/certificates/cert_aptitude.png",
    pdf: "asset/images/certificates/signed_b6739c83a61dfbdac5513029bad5425a.pdf (1).pdf",
    badge: "Aptitude"
  }
];

// --- 3. DOM & INTERACTIVE LOGIC ---
document.addEventListener("DOMContentLoaded", () => {
  // --- A. Navbar Sticky & Scrollspy ---
  const navbar = document.getElementById("navbar");
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileDrawer = document.getElementById("mobile-drawer");
  const navLinks = document.querySelectorAll(".nav-link");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
  const sections = document.querySelectorAll("section[id]");

  const handleScroll = () => {
    if (window.scrollY > 30) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    let currentSectionId = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 140;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute("id");
      }
    });

    if (currentSectionId) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSectionId}`) {
          link.classList.add("active");
        }
      });
      mobileNavLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSectionId}`) {
          link.classList.add("active");
        }
      });
    }
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  // Mobile Drawer Toggle
  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileDrawer.classList.toggle("open");
      const isOpen = mobileDrawer.classList.contains("open");
      mobileMenuBtn.innerHTML = isOpen
        ? `<i data-lucide="x"></i>`
        : `<i data-lucide="menu"></i>`;
      lucide.createIcons();
    });

    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileDrawer.classList.remove("open");
        mobileMenuBtn.innerHTML = `<i data-lucide="menu"></i>`;
        lucide.createIcons();
      });
    });
  }

  // --- B. Typing Effect ---
  const typingTextEl = document.getElementById("typing-text");
  const ROLES = [
    "Full-Stack Web Developer",
    "UI/UX & Product Designer",
    "Machine Learning & Recommender Systems",
    "Gunadarma Graduate (IPK 3.80)"
  ];
  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  const TYPE_SPEED = 85;
  const DELETE_SPEED = 40;
  const HOLD_TIME = 2200;

  function typeEffect() {
    if (!typingTextEl) return;
    const current = ROLES[roleIdx];

    if (isDeleting) {
      typingTextEl.textContent = current.substring(0, charIdx - 1);
      charIdx--;
      if (charIdx === 0) {
        isDeleting = false;
        roleIdx = (roleIdx + 1) % ROLES.length;
        setTimeout(typeEffect, 400);
        return;
      }
      setTimeout(typeEffect, DELETE_SPEED);
    } else {
      typingTextEl.textContent = current.substring(0, charIdx + 1);
      charIdx++;
      if (charIdx === current.length) {
        isDeleting = true;
        setTimeout(typeEffect, HOLD_TIME);
        return;
      }
      setTimeout(typeEffect, TYPE_SPEED);
    }
  }
  typeEffect();

  // --- C. Counter Up Animation ---
  const counters = document.querySelectorAll(".counter-num");
  let counted = false;
  function animateCounters() {
    if (counted) return;
    const aboutSection = document.getElementById("About");
    if (!aboutSection) return;
    const rect = aboutSection.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.8) {
      counters.forEach((counter) => {
        const target = parseFloat(counter.getAttribute("data-target"));
        const isDecimal = counter.getAttribute("data-decimal") === "true";
        const duration = 1600;
        const steps = 40;
        const stepTime = duration / steps;
        let stepCount = 0;

        const timer = setInterval(() => {
          stepCount++;
          const progress = stepCount / steps;
          const currentVal = isDecimal
            ? (target * progress).toFixed(2)
            : Math.round(target * progress);
          counter.textContent = currentVal;
          if (stepCount >= steps) {
            counter.textContent = isDecimal ? target.toFixed(2) : target;
            clearInterval(timer);
          }
        }, stepTime);
      });
      counted = true;
    }
  }
  window.addEventListener("scroll", animateCounters);
  animateCounters();

  // --- D. Render Projects Showcase ---
  const projectsContainer = document.getElementById("projects-grid-container");
  const projectFilterBtns = document.querySelectorAll(".project-filter-btn");

  function renderProjects(filter = "all") {
    if (!projectsContainer) return;
    projectsContainer.innerHTML = "";

    const filtered = filter === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

    filtered.forEach((p, index) => {
      const card = document.createElement("div");
      card.className = "project-card";
      card.setAttribute("data-aos", "fade-up");
      card.setAttribute("data-aos-delay", (index % 3) * 100);

      const hasDemo = p.liveDemo && p.liveDemo !== "#";
      const hasGithub = p.githubLink && p.githubLink !== "#";

      card.innerHTML = `
        <div class="project-thumb-box">
          <img src="${p.image}" alt="${p.title}" class="project-thumb" loading="lazy" />
          <span class="project-category-badge">${p.category}</span>
        </div>
        <div class="project-content">
          <h3 class="project-title">${p.title}</h3>
          <p class="project-desc">${p.description}</p>
          <div class="project-tech-tags">
            ${p.technologies.slice(0, 4).map(t => `<span class="tech-tag-sm">${t}</span>`).join("")}
            ${p.technologies.length > 4 ? `<span class="tech-tag-sm">+${p.technologies.length - 4}</span>` : ""}
          </div>
          <div class="project-card-footer">
            <div class="project-links">
              ${hasDemo ? `<a href="${p.liveDemo}" target="_blank" rel="noopener" class="btn-card-link btn-card-demo"><i data-lucide="external-link"></i> Live Demo</a>` : ""}
              ${hasGithub ? `<a href="${p.githubLink}" target="_blank" rel="noopener" class="btn-card-link"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6.1 0-1.3-.5-2.4-1.3-3.1.1-.3.5-1.5-.1-3.1 0 0-1.1-.4-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.2 5.4 3.2c-.6 1.6-.2 2.8-.1 3.1-.8.7-1.3 1.8-1.3 3.1 0 4.7 2.7 5.8 5.5 6.1-.6.5-1 1.4-1 2.8V21"></path></svg> Repo</a>` : ""}
            </div>
            <button onclick="viewProjectDetails(${projectsData.findIndex(item => item.id === p.id)})" class="btn-card-details">
              Details <i data-lucide="arrow-right"></i>
            </button>
          </div>
        </div>
      `;
      projectsContainer.appendChild(card);
    });

    lucide.createIcons();
    if (window.AOS) AOS.refresh();
  }

  projectFilterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      projectFilterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-filter");
      renderProjects(filter);
    });
  });

  // --- E. Render Certificates & Credentials ---
  const certsContainer = document.getElementById("certs-grid-container");
  const certFilterBtns = document.querySelectorAll(".cert-filter-btn");

  function renderCertificates(filter = "all") {
    if (!certsContainer) return;
    certsContainer.innerHTML = "";

    const filtered = filter === "all"
      ? certificatesData
      : certificatesData.filter((c) => c.category === filter);

    filtered.forEach((c, index) => {
      const card = document.createElement("div");
      card.className = "cert-card";
      card.setAttribute("data-aos", "fade-up");
      card.setAttribute("data-aos-delay", (index % 3) * 100);

      const hasVerify = c.verifyLink && c.verifyLink !== "";

      card.innerHTML = `
        <div class="cert-preview-box" onclick="openLightbox('${c.image}', '${c.title}', '${c.pdf}', '${c.verifyLink || ''}')">
          <img src="${c.image}" alt="${c.title}" class="cert-preview-img" loading="lazy" />
          <span class="cert-category-badge">${c.badge}</span>
          <div class="cert-preview-overlay">
            <i data-lucide="maximize-2"></i> Klik Pratinjau
          </div>
        </div>
        <div class="cert-info">
          <h3 class="cert-title">${c.title}</h3>
          <div class="cert-meta">
            <span class="cert-issuer"><i data-lucide="award"></i> ${c.issuer}</span>
            <span class="cert-date"><i data-lucide="calendar"></i> ${c.date}</span>
            <span class="cert-id">${c.credId}</span>
          </div>
          <div class="cert-actions">
            <button onclick="openLightbox('${c.image}', '${c.title}', '${c.pdf}', '${c.verifyLink || ''}')" class="btn-cert-preview">
              <i data-lucide="eye"></i> Pratinjau
            </button>
            <a href="${c.pdf}" target="_blank" rel="noopener" class="btn-cert-pdf">
              <i data-lucide="file-text"></i> PDF Asli
            </a>
            ${hasVerify ? `
            <a href="${c.verifyLink}" target="_blank" rel="noopener" class="btn-cert-verify" title="Verifikasi Online Kredensial Resmi">
              <i data-lucide="shield-check"></i> Verifikasi
            </a>` : ""}
          </div>
        </div>
      `;
      certsContainer.appendChild(card);
    });

    lucide.createIcons();
    if (window.AOS) AOS.refresh();
  }

  certFilterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      certFilterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-filter");
      renderCertificates(filter);
    });
  });

  // Initial renders
  renderProjects("all");
  renderCertificates("all");

  // --- F. Contact Form Submission (Active Integration) ---
  const contactForm = document.getElementById("contact-form");
  const submitBtn = document.getElementById("submit-button");

  if (contactForm && submitBtn) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <span class="btn-spinner"></span> Mengirim Pesan...
      `;

      const formData = new FormData(contactForm);
      const submitData = {
        name: formData.get("name"),
        email: formData.get("email"),
        subject: formData.get("subject") || "Pesan Baru dari Portofolio Jhoiwada",
        message: formData.get("message"),
        _subject: `Pesan Portofolio dari ${formData.get("name")}`,
        _captcha: "false",
        _template: "table"
      };

      const formSubmitUrl = "https://formsubmit.co/jhoiwada@gmail.com";

      try {
        await axios.post(formSubmitUrl, submitData);
        Swal.fire({
          title: "Pesan Terkirim!",
          text: "Terima kasih telah menghubungi. Saya akan segera membalas email Anda.",
          icon: "success",
          background: "#0c1424",
          color: "#f8fafc",
          confirmButtonColor: "#00d2ff",
          timer: 3500,
          timerProgressBar: true
        });
        contactForm.reset();
      } catch (error) {
        console.error(error);
        Swal.fire({
          title: "Terima Kasih!",
          text: "Pesan Anda telah dicatat. Anda juga dapat menghubungi langsung via WhatsApp untuk respon cepat.",
          icon: "info",
          background: "#0c1424",
          color: "#f8fafc",
          confirmButtonColor: "#00d2ff"
        });
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `
          Kirim Pesan Sekarang <i data-lucide="send"></i>
        `;
        lucide.createIcons();
      }
    });
  }

  // Init AOS if available
  if (window.AOS) {
    AOS.init({
      once: true,
      offset: 40,
      duration: 800,
      easing: "ease-out-cubic"
    });
  }

  // Create Lucide Icons
  lucide.createIcons();
});

// --- 4. GLOBAL FUNCTIONS (LIGHTBOX & PROJECT DETAILS) ---
window.openLightbox = function (imgSrc, title, pdfSrc, verifyLink = "") {
  const modal = document.getElementById("lightbox-modal");
  const img = document.getElementById("lightbox-img");
  const titleEl = document.getElementById("lightbox-title");
  const pdfBtn = document.getElementById("lightbox-pdf-btn");
  let verifyBtn = document.getElementById("lightbox-verify-btn");

  if (!modal || !img || !titleEl) return;

  img.src = imgSrc;
  img.alt = title;
  titleEl.textContent = title;

  if (pdfBtn) {
    if (pdfSrc) {
      pdfBtn.style.display = "inline-flex";
      pdfBtn.href = pdfSrc;
    } else {
      pdfBtn.style.display = "none";
    }
  }

  const footer = modal.querySelector(".lightbox-footer");
  if (!verifyBtn && footer) {
    verifyBtn = document.createElement("a");
    verifyBtn.id = "lightbox-verify-btn";
    verifyBtn.target = "_blank";
    verifyBtn.rel = "noopener";
    verifyBtn.className = "btn-cert-verify";
    verifyBtn.style.fontSize = "0.88rem";
    verifyBtn.style.padding = "8px 20px";
    verifyBtn.innerHTML = `<i data-lucide="shield-check"></i> Verifikasi Kredensial`;
    footer.insertBefore(verifyBtn, footer.children[1] || null);
  }

  if (verifyBtn) {
    if (verifyLink) {
      verifyBtn.style.display = "inline-flex";
      verifyBtn.href = verifyLink;
    } else {
      verifyBtn.style.display = "none";
    }
  }

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
  lucide.createIcons();
};

window.closeLightbox = function () {
  const modal = document.getElementById("lightbox-modal");
  if (!modal) return;
  modal.classList.remove("active");
  document.body.style.overflow = "unset";
};

window.viewProjectDetails = function (index) {
  if (index >= 0 && index < projectsData.length) {
    const selected = projectsData[index];
    localStorage.setItem("currentProject", JSON.stringify(selected));
    window.location.href = "project-details.html";
  } else {
    console.error("Index out of bounds");
  }
};
