// Menunggu semua konten HTML dimuat sebelum menjalankan script
document.addEventListener("DOMContentLoaded", () => {
  // --- Variabel ---
  const navbar = document.getElementById("navbar");
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const navLinks = document.querySelectorAll(".nav-link");
  const mobileLinks = document.querySelectorAll(".mobile-link");
  const sections = document.querySelectorAll("section");

  // --- Logika Efek Scroll ---
  const handleScroll = () => {
    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    let currentSectionId = "Home";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 150) {
        currentSectionId = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("active");
      }
    });

    mobileLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  // --- Logika Menu Mobile ---
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
    if (mobileMenu.classList.contains("open")) {
      menuToggle.textContent = "X";
      document.body.style.overflow = "hidden";
    } else {
      menuToggle.textContent = "☰";
      document.body.style.overflow = "unset";
    }
  });

  const allLinks = document.querySelectorAll(".mobile-link, .nav-link");
  allLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      if (mobileMenu.classList.contains("open")) {
        mobileMenu.classList.remove("open");
        menuToggle.textContent = "☰";
        document.body.style.overflow = "unset";
      }
    });
  });

  // ======== KODE UNTUK SECTION HOME ========

  AOS.init({
    once: true,
    offset: 10,
    duration: 1000,
    easing: "ease-in-out",
  });

  const typingTextElement = document.getElementById("typing-text");
  const WORDS = ["Frontend Developer", "Information Systems", "Student"];
  const TYPING_SPEED = 100;
  const ERASING_SPEED = 50;
  const PAUSE_DURATION = 2000;

  let wordIndex = 0;
  let charIndex = 0;
  let isTyping = true;

  const handleTyping = () => {
    if (!typingTextElement) return;
    const currentWord = WORDS[wordIndex];

    if (isTyping) {
      if (charIndex < currentWord.length) {
        typingTextElement.textContent += currentWord[charIndex];
        charIndex++;
        setTimeout(handleTyping, TYPING_SPEED);
      } else {
        isTyping = false;
        setTimeout(handleTyping, PAUSE_DURATION);
      }
    } else {
      if (charIndex > 0) {
        typingTextElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(handleTyping, ERASING_SPEED);
      } else {
        isTyping = true;
        wordIndex = (wordIndex + 1) % WORDS.length;
        setTimeout(handleTyping, TYPING_SPEED);
      }
    }
  };

  setTimeout(handleTyping, 1000);

  // ======== KODE STATISTIK & PORTOFOLIO (DIPERBARUI) ========

  // --- 1. DATA PROYEK (DILENGKAPI UNTUK HALAMAN DETAILS) ---
  const projectsData = [
    {
      id: 1,
      image: "asset/images/1.png",
      title: "Website Cimohot",
      description:
        "Website makanan yang responsif dengan fitur keranjang belanja, sistem pembayaran, dan dashboard admin yang komprehensif.",
      // Link Live Demo (Ganti '#' jika sudah ada)
      liveDemo: "#",
      githubLink: "https://github.com/username/cimohot",
      // Data untuk Halaman Detail
      screenshots: [
        "asset/images/1.png",
        "asset/images/detail-cimohot-2.png",
        "asset/images/detail-cimohot-3.png",
      ],
      features: [
        "Keranjang Belanja",
        "Checkout System",
        "Admin Dashboard",
        "Responsive Mobile",
      ],
      technologies: ["HTML", "CSS", "PHP", "MySQL", "JavaScript"],
    },
    {
      id: 2,
      image: "asset/images/6.png",
      title: "Website Anne Coffe",
      description:
        "Anne Coffee adalah website pemesanan minuman kopi yang responsif, menampilkan berbagai varian kopi dengan tampilan menarik.",
      liveDemo: "#",
      githubLink: "#",
      screenshots: ["asset/images/6.png"],
      features: ["Katalog Produk", "Filter Kategori", "UI Modern"],
      technologies: ["React", "Tailwind CSS", "Vite"],
    },
    {
      id: 3,
      image: "asset/images/10.png",
      title: "Dashboard Analytics",
      description:
        "Dashboard interaktif untuk visualisasi data dengan berbagai chart dan grafik yang informatif dan mudah dipahami.",
      liveDemo: "#",
      githubLink: "#",
      screenshots: ["asset/images/10.png"],
      features: ["Real-time Chart", "Dark Mode", "Data Export"],
      technologies: ["Vue.js", "Chart.js", "Node.js"],
    },
    {
      id: 4,
      image: "asset/images/velio.jpg",
      title: "Website PT Velio Mobili",
      description:
        "Velio Mobili adalah website interior dan custom furniture yang menyajikan katalog produk, hasil pekerjaan, serta layanan konsultasi.",
      liveDemo: "#",
      githubLink: "#",
      screenshots: ["asset/images/velio.jpg"],
      features: ["Katalog Furniture", "Portofolio Project", "Form Konsultasi"],
      technologies: ["HTML", "Bootstrap", "JavaScript"],
    },
  ];

  // --- 2. DATA TECH STACK ---
  const techStackData = [
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      name: "HTML",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      name: "CSS",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      name: "JavaScript",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      name: "Tailwind CSS",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chartjs/chartjs-original.svg",
      name: "Chart.js",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
      name: "MySQL",
    },
    {
      icon: "https://devicon-website.vercel.app/api/php/original.svg",
      name: "PHP",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      name: "Bootstrap",
    },
  ];

  // --- 3. UPDATE KARTU STATISTIK ---
  const projectCountEl = document.getElementById("project-count");
  if (projectCountEl) {
    projectCountEl.textContent = projectsData.length;
  }

  // --- 4. MEMUAT KARTU PROYEK (UPDATED: TOMBOL DETAILS BERFUNGSI) ---
  const projectGridContainer = document.getElementById(
    "project-grid-container"
  );

  function renderProjects() {
    if (!projectGridContainer) return;

    projectGridContainer.innerHTML = "";

    projectsData.forEach((project, index) => {
      const aosDelay = (index % 3) * 100 + 100;

      // Perhatikan: Kita pakai <div> sebagai pembungkus, bukan <a>
      // Agar tombol Live Demo dan Details bisa diklik terpisah
      projectGridContainer.innerHTML += `
          <div class="project-card" data-aos="fade-up" data-aos-delay="${aosDelay}">
              <img src="${project.image}" alt="${project.title}" class="project-card-image">
              <div class="project-card-content">
                  <h3 class="project-card-title">${project.title}</h3>
                  <p class="project-card-description">${project.description}</p>
                  
                  

                      <button onclick="viewProjectDetails(${index})" class="project-card-link" style="margin-left: 1rem; background:none; border:none; cursor:pointer; font-family:inherit; font-size:inherit;">
                          Details
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                      </button>
                  </div>
              </div>
          </div>
      `;
    });
  }

  // --- 5. MEMUAT KARTU TECH STACK ---
  const techStackGridContainer = document.getElementById(
    "tech-stack-grid-container"
  );

  function renderTechStack() {
    if (!techStackGridContainer) return;
    techStackGridContainer.innerHTML = "";
    techStackData.forEach((tech, index) => {
      const aosDelay = (index % 5) * 50 + 100;
      techStackGridContainer.innerHTML += `
          <div class="tech-stack-card" data-aos="fade-up" data-aos-delay="${aosDelay}">
              <img src="${tech.icon}" alt="${tech.name} Icon">
              <span>${tech.name}</span>
          </div>
      `;
    });
  }

  // --- 6. LOGIKA TAB PORTOFOLIO ---
  const portfolioTabs = document.querySelectorAll(".portfolio-tab");
  const tabContents = document.querySelectorAll(".tab-content");

  portfolioTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const targetTab = tab.dataset.tab;
      portfolioTabs.forEach((t) => t.classList.remove("active"));
      tabContents.forEach((tc) => tc.classList.remove("active"));
      tab.classList.add("active");
      document.getElementById(`${targetTab}-content`).classList.add("active");
      AOS.refresh();
    });
  });

  renderProjects();
  renderTechStack();

  // ======== KODE UNTUK FORM KONTAK ========
  const contactForm = document.getElementById("contact-form");
  const submitButton = document.getElementById("submit-button");

  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      submitButton.disabled = true;
      submitButton.textContent = "Mengirim...";
      const formData = new FormData(contactForm);
      const submitData = {
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
        _subject: `Pesan Baru dari Website Portofolio ${formData.get("name")}`,
        _captcha: "false",
        _template: "table",
      };
      // GANTI EMAIL DI SINI
      const formSubmitUrl =
        "https://formsubmit.co/GANTI_DENGAN_EMAIL_ANDA@gmail.com";

      try {
        await axios.post(formSubmitUrl, submitData);
        Swal.fire({
          title: "Berhasil!",
          text: "Pesan Anda telah berhasil terkirim!",
          icon: "success",
          confirmButtonColor: "#00CED1",
          timer: 3000,
          timerProgressBar: true,
        });
        contactForm.reset();
      } catch (error) {
        console.error(error);
        Swal.fire({
          title: "Gagal!",
          text: "Terjadi kesalahan. Silakan coba lagi nanti.",
          icon: "error",
          confirmButtonColor: "#00CED1",
        });
      } finally {
        submitButton.disabled = false;
        submitButton.innerHTML = `
            Kirim Pesan
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
        `;
      }
    });
  }
});

// ======== FUNGSI GLOBAL UNTUK PINDAH HALAMAN (DITARUH DI LUAR) ========
// Ini fungsi agar tombol "Details" bisa bekerja
window.viewProjectDetails = function (index) {
  // Kita perlu mengakses data projectsData.
  // Karena variable projectsData ada di dalam scope DOMContentLoaded,
  // kita perlu mendefinisikan ulang atau mengambilnya dari sumber yang sama.
  // CARA MUDAH: Kita copy paste data di sini atau buat global variable.
  // Untuk amannya, kita gunakan DOM selector untuk mengambil index atau menaruh logic ini di dalam scope tapi di-attach ke window.

  // Solusi Cepat: Mengambil data dari elemen HTML yang sudah dirender sebenarnya agak susah.
  // Jadi kita definisikan ulang data singkat di sini atau akses variable yang sudah ada.

  // *PENTING*: Agar simple, data projectsData di atas sebaiknya dibuat global atau fungsi ini dimasukkan ke dalam event listener.
  // Tapi karena keterbatasan struktur, saya akan membuat trik sederhana:
  // Fungsi ini akan membaca data yang saya tulis ulang sedikit di bawah ini untuk keperluan navigasi.

  const projectsData = [
    {
      id: 1,
      image: "asset/images/1.png",
      title: "Website Cimohot",
      description:
        "Website makanan yang responsif dengan fitur keranjang belanja, sistem pembayaran, dan dashboard admin yang komprehensif.",
      liveDemo: "#",
      githubLink: "https://github.com/username/cimohot",
      screenshots: [
        "asset/images/1.png",
        "asset/images/detail-cimohot-2.png",
        "asset/images/detail-cimohot-3.png",
      ],
      features: [
        "Keranjang Belanja",
        "Checkout System",
        "Admin Dashboard",
        "Responsive Mobile",
      ],
      technologies: ["HTML", "CSS", "PHP", "MySQL", "JavaScript"],
    },
    {
      id: 2,
      image: "asset/images/6.png",
      title: "Website Anne Coffe",
      description:
        "Anne Coffee adalah website pemesanan minuman kopi yang responsif.",
      liveDemo: "#",
      githubLink: "#",
      screenshots: ["asset/images/6.png"],
      features: ["Katalog Produk", "Filter Kategori", "UI Modern"],
      technologies: ["React", "Tailwind CSS", "Vite"],
    },
    {
      id: 3,
      image: "asset/images/10.png",
      title: "Dashboard Analytics",
      description:
        "Dashboard interaktif untuk visualisasi data dengan berbagai chart.",
      liveDemo: "#",
      githubLink: "#",
      screenshots: ["asset/images/10.png"],
      features: ["Real-time Chart", "Dark Mode", "Data Export"],
      technologies: ["Vue.js", "Chart.js", "Node.js"],
    },
    {
      id: 4,
      image: "asset/images/velio.jpg",
      title: "Website PT Velio Mobili",
      description: "Velio Mobili adalah website interior dan custom furniture.",
      liveDemo: "#",
      githubLink: "#",
      screenshots: ["asset/images/velio.jpg"],
      features: ["Katalog Furniture", "Portofolio Project", "Form Konsultasi"],
      technologies: ["HTML", "Bootstrap", "JavaScript"],
    },
  ];

  const selectedProject = projectsData[index];
  localStorage.setItem("currentProject", JSON.stringify(selectedProject));
  window.location.href = "project-details.html";
};
