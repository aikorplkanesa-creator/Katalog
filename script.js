
// ========================================
// A.A. MOTORS — PREMIUM CAR COLLECTION
// File: script.js
// ========================================

// GANTI dengan nomor WhatsApp tujuan pesanan.
// Gunakan kode negara 62 tanpa tanda +.
// Contoh format: 6281234567890
const WHATSAPP_NUMBER = "6285717222930";


// ========================================
// DATA MOBIL
// ========================================

const CATALOG = [
    {
        id: "BMW-M2",
        name: "BMW-M2",
        brand: "BMW",
        year: "2015",
        category: "SPORT COUPE",
        image: "BMW-M2.png",
        description:
            "BMW M2 adalah mobil sport coupe dengan mesin 3.0L 6-silinder twin-turbo bertenaga sekitar 480 hp, transmisi manual atau otomatis, dan penggerak roda belakang (RWD). Kelebihannya adalah akselerasi kuat dan handling sporty, sedangkan kekurangannya biaya perawatan mahal dan konsumsi BBM relatif boros.",
        advantages: [
            "Performa mesin bertenaga dan akselerasi cepat",
            "Bodi kompak sehingga lincah saat bermanuver",
            "Handling responsif dan menyenangkan untuk dikendarai",
            "Desain sporty dan agresif"
        ],
        disadvantages: [
            "Konsumsi BBM relatif boros",
            "Biaya perawatan dan suku cadang mahal",
            "Ruang penumpang belakang terbatas",
            "Suspensi cenderung keras untuk penggunaan sehari-hari"
        ]
    },
    {
        id: "BMW-M4",
        name: "BMW-M4",
        brand: "BMW",
        year: "2014",
        category: "SPORT COUPE",
        image: "BMW-M4.png",
        description:
            "BMW M4 adalah mobil sport coupe dengan mesin 3.0L 6-silinder twin-turbo bertenaga hingga 530 hp pada varian Competition M xDrive. Mobil ini menggunakan transmisi otomatis 8-percepatan dan penggerak empat roda (AWD), dengan akselerasi 0-100 km/jam sekitar 3,5 detik. Kelebihannya adalah performa tinggi, handling presisi, dan desain sporty, sedangkan kekurangannya biaya perawatan mahal dan konsumsi BBM relatif boros",
        advantages: [
            "Mesin sangat bertenaga dengan akselerasi cepat.",
            "Stabil dan memiliki handling yang presisi.",
            "Desain sporty, modern, dan mewah.",
            "Nyaman untuk perjalanan jauh dibandingkan sebagian mobil sport lainnya."
        ],
        disadvantages: [
            "Harga mobil relatif mahal.",
            "BBM relatif boros",
            "Biaya perawatan mahal"
        ]
    },
    {
        id: "BMW-F30",
        name: "BMW-F30",
        brand: "BMW",
        year: "2011-2019",
        category: "SPORT Sedan",
        image: "BMW-F30.png",
        description:
            "BMW F30 adalah sport sedan dari BMW Seri 3 yang diproduksi sekitar 2011–2019. Mobil ini memiliki empat pintu, desain elegan dan sporty, serta tersedia dalam beberapa varian mesin. Kelebihannya adalah handling yang responsif, kenyamanan berkendara, dan desain yang menarik. Kekurangannya adalah biaya perawatan relatif mahal, suku cadang bisa mahal, dan konsumsi BBM bergantung pada varian serta cara berkendara.",
        advantages: [
            "Desain sedan elegan dan sporty.",
            "Handling responsif dan nyaman dikendarai.",
            "Memiliki empat pintu sehingga lebih praktis untuk keluarga.",
            "Tersedia dalam berbagai pilihan mesin dan varian."
        ],
        disadvantages: [
            "Biaya perawatan relatif tinggi",
            "Konsumsi BBM berbeda-beda tergantung varian dan kondisi mobil",
            "Harga suku cadang bisa mahal"
        ]
    },

    {
        id: "CIVIC-TYPE R",
        name: "CIVIC-TYPE R",
        brand: "Honda",
        year: "1997",
        category: "Hot Hatch / Sport Compact",
        image: "CIVIC-TYPE R.png",
        description:
            "Honda Civic Type R adalah mobil berperforma tinggi yang memiliki desain agresif, mesin turbo bertenaga, dan handling presisi. Mobil ini dirancang untuk memberikan pengalaman berkendara sporty dengan performa yang cocok untuk jalan raya maupun lintasan balap.",
        advantages: [
            "Desain sporty",
            "Kabin modern",
            "Karakter berkendara dinamis"
        ],
        disadvantages: [
            "Harga tergantung varian",
            "Biaya perawatan perlu diperhitungkan",
            "Kenyamanan bergantung pada kondisi jalan"
        ]
    },
    {
        id: "Honda BR-V",
        name: "Honda BR-V",
        brand: "Honda",
        year: "2015",
        category: "LSUV",
        image: "Honda BR-V.png",
        description:
            "Honda BR-V adalah SUV keluarga dengan desain modern, tiga baris tempat duduk, dan kabin yang praktis. Mobil ini dirancang untuk menunjang aktivitas sehari-hari maupun perjalanan bersama keluarga.",
        advantages: [
            "Dapat menampung hingga tujuh penumpang.",
            "Kabin praktis untuk keluarga.",
            "Ground clearance cocok untuk berbagai kondisi jalan."
        ],
        disadvantages: [
            "Performa tidak berfokus pada kecepatan seperti mobil sport.",
            "Baris ketiga lebih terbatas untuk penumpang dewasa dalam perjalanan jauh.",
            "Konsumsi BBM bergantung pada kondisi berkendara."
        ]
    },
    {
        id: "Honda NSX  Tribute",
        name: "Honda NSX  Tribute",
        brand: "Honda",
        year: "1990–2005",
        category: "Sport Coupe",
        image: "Honda NSX  Tribute.png",
        description:
            "Honda NSX adalah mobil sport premium dengan desain aerodinamis, posisi mesin di tengah, dan performa tinggi. Mobil ini dikenal karena perpaduan antara kecepatan, keseimbangan, dan teknologi. Istilah NSX Tribute dapat merujuk pada kendaraan modifikasi yang terinspirasi dari desain NSX.",
        advantages: [
            "Desain eksotis dan sporty.",
            "Performa tinggi pada model NSX.",
            "Memiliki karakter mobil sport premium."
        ],
        disadvantages: [
            "Harga dan perawatan dapat mahal",
            "Suku cadang tertentu sulit ditemukan.",
            "Kepraktisan dan ruang bagasi terbatas."
        ]
    },

    {
        id: "swift",
        name: "swift",
        brand: "Suzuki",
        year: "2004",
        category: "Hatchback",
        image: "swift.png",
        description:
            "Suzuki Swift adalah mobil hatchback kompak dengan desain sporty, bodi praktis, dan handling lincah. Ukurannya yang ringkas membuat mobil ini cocok digunakan di perkotaan, terutama untuk pengemudi yang menginginkan mobil praktis dengan tampilan modern.",
        advantages: [
            "Desain sporty dan modern.",
            "Ukuran kompak, mudah diparkir.",
            "Relatif irit bahan bakar"
        ],
        disadvantages: [
            "Ruang kabin dan bagasi relatif terbatas.",
            "Kurang nyaman jika membawa banyak barang atau penumpang.",
            "Performa mesin standar bukan untuk kecepatan tinggi."
        ]
    },
    {
        id: "Baleno",
        name: "Baleno",
        brand: "Suzuki",
        year: "1995",
        category: "Hatchback",
        image: "Baleno.png",
        description:
            "Suzuki Baleno adalah hatchback yang menggabungkan desain modern, kabin cukup luas, dan kepraktisan untuk penggunaan sehari-hari. Mobil ini cocok untuk pengemudi yang menginginkan kendaraan perkotaan dengan kenyamanan dan efisiensi.",
        advantages: [
            "Kapasitas hingga tujuh penumpang pada varian terkait",
            "Tampilan bergaya SUV",
            "Fleksibel untuk keluarga"
        ],
        disadvantages: [
            "Dimensi lebih besar dari city car",
            "Konsumsi bahan bakar bergantung pada penggunaan",
            "Ruang bagasi berubah saat semua kursi digunakan"
        ]
    },
    {
        id: "ignis",
        name: "ignis",
        brand: "Suzuki",
        year: "2016-2025",
        category: "Family MPV",
        image: "ignis.png",
        description:
            "Suzuki Ignis adalah mobil kompak bergaya crossover dengan desain unik dan posisi berkendara yang relatif tinggi untuk kelasnya. Ukurannya yang kecil membuatnya praktis untuk jalan perkotaan dan area parkir terbatas.",
        advantages: [
            "Kapasitas penumpang keluarga",
            "Kabin fleksibel",
            "Cocok untuk penggunaan harian"
        ],
        disadvantages: [
            "Ruang bagasi terbatas saat kursi penuh",
            "Performa bergantung pada kebutuhan pengguna",
            "Fitur berbeda menurut varian"
        ]
    },

    {
        id: "Eclipse",
        name: "Eclipse",
        brand: "Mitsubishi",
        year: "1989–2011",
        category: "Sport Compact Coupe",
        image: "Eclipse.png",
        description:
            "Mitsubishi Eclipse merupakan mobil sport kompak yang dikembangkan untuk menghadirkan perpaduan gaya sporty dan performa. Generasi awal memiliki pilihan mesin turbo dan sistem penggerak roda depan atau empat roda pada varian tertentu. Generasi berikutnya menawarkan desain lebih modern serta pilihan mesin yang berbeda. Produksinya berakhir pada 2011.",
        advantages: [
    "Desain sport coupe yang sporty dan ikonik",
    "Handling responsif dan menyenangkan",
    "Tersedia varian mesin turbo bertenaga",
    "Cocok untuk penggemar mobil sport dan modifikasi"
],
disadvantages: [
    "Usia kendaraan relatif tua",
    "Suku cadang tertentu sulit ditemukan",
    "Biaya perawatan bergantung pada kondisi mobil",
    "Ruang kabin dan bagasi terbatas"
]
    },
    {
        id: "DESTINATOR",
        name: "DESTINATOR",
        brand: "DESTINATOR",
        year: "2025",
        category: "Premium Family SUV (SUV keluarga)",
        image: "DESTINATOR.png",
        description:
            "Mitsubishi Destinator adalah SUV keluarga modern dengan desain gagah, kabin tiga baris untuk tujuh penumpang, serta mesin 1.5L turbo yang menghasilkan tenaga hingga 163 PS dan torsi 250 Nm. Mobil ini dirancang untuk memberikan kenyamanan, performa responsif, dan teknologi modern untuk perjalanan sehari-hari maupun jarak jauh.",
    advantages: [
    "Kabin luas dengan kapasitas hingga 7 penumpang",
    "Mesin 1.5L turbo bertenaga dan responsif",
    "Desain eksterior modern dan gagah",
    "Ground clearance tinggi untuk berbagai kondisi jalan",
    "Fitur keselamatan dan kenyamanan modern"
        ],
    disadvantages: [
    "Dimensi bodi cukup besar saat parkir",
    "Ruang bagasi terbatas saat semua kursi digunakan",
    "Konsumsi BBM bergantung pada gaya berkendara",
    "Fitur berbeda menurut varian",
    "Kurang cocok untuk medan off-road berat"
        ]
    },
    {
        id: "EVO9",
        name: "EVO9",
        brand: "Mitsubishi",
        year: "2005–2007",
        category: "Sport Sedan / Rally-Inspired Performance Sedan",
        image: "EVO9.png",
        description:
            "Mitsubishi Lancer Evolution IX (EVO 9) adalah sport sedan berperforma tinggi dengan mesin turbo bertenaga, sistem penggerak empat roda (AWD), dan desain agresif yang terinspirasi dari mobil reli. Mobil ini dikenal memiliki akselerasi cepat, handling responsif, dan performa yang tangguh.",
        advantages: [
            "Mesin turbo bertenaga dengan respons akselerasi cepat.",
            "Karakter kendaraan Sistem AWD membantu meningkatkan traksi dan kestabilan.",
            "Cocok untuk kebutuhan Handling responsif untuk berkendara sporty."
        ],
        disadvantages: [
            "Konsumsi BBM relatif boros.",
            "Biaya perawatan dan suku cadang bisa mahal.",
            "Usia kendaraan membuat kondisi mesin dan komponen perlu diperiksa."
        ]
    }
];


// ========================================
// ELEMENT HTML
// ========================================

const cartButton = document.getElementById("cartButton");
const cartCount = document.getElementById("cartCount");
const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");
const closeCartButton = document.getElementById("closeCartButton");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const clearCartButton = document.getElementById("clearCartButton");
const checkoutButton = document.getElementById("checkoutButton");

const detailModal = document.getElementById("detailModal");
const detailContent = document.getElementById("detailContent");
const closeDetailButton = document.getElementById("closeDetailButton");

const checkoutModal = document.getElementById("checkoutModal");
const closeCheckoutButton = document.getElementById("closeCheckoutButton");
const whatsappButton = document.getElementById("whatsappButton");
const cancelOrderButton = document.getElementById("cancelOrderButton");

const searchInput = document.getElementById("searchInput");


// ========================================
// STATE / KERANJANG
// ========================================

const STORAGE_KEY = "aaMotorsCart";

function loadCart() {
    try {
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));

        if (!Array.isArray(saved)) {
            return [];
        }

        // Hanya gunakan ID mobil yang tersedia di katalog.
        return [...new Set(saved)].filter(id =>
            CATALOG.some(car => car.id === id)
        );
    } catch {
        return [];
    }
}

let cart = loadCart();

function saveCart() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch (error) {
        console.warn("Keranjang tidak dapat disimpan.", error);
    }
}


// ========================================
// HELPER
// ========================================

function getCar(id) {
    return CATALOG.find(car => car.id === id);
}

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, character => {
        const entities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };

        return entities[character];
    });
}

function updateBodyScroll() {
    const hasOpenLayer =
        cartDrawer.classList.contains("open") ||
        detailModal.classList.contains("show") ||
        checkoutModal.classList.contains("show");

    document.body.classList.toggle("no-scroll", hasOpenLayer);
}

function openModal(modal) {
    modal.classList.add("show");
    updateBodyScroll();
}

function closeModal(modal) {
    modal.classList.remove("show");
    updateBodyScroll();
}


// ========================================
// CART DRAWER
// ========================================

function openCart() {
    cartDrawer.classList.add("open");
    cartOverlay.classList.add("show");
    updateBodyScroll();
}

function closeCart() {
    cartDrawer.classList.remove("open");
    cartOverlay.classList.remove("show");
    updateBodyScroll();
}

cartButton.addEventListener("click", openCart);
closeCartButton.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);


// ========================================
// TAMBAH DAN HAPUS MOBIL
// ========================================

function addToCart(id) {
    const car = getCar(id);

    if (!car) {
        return;
    }

    if (cart.includes(id)) {
        showToast(`${car.name} sudah ada di keranjang.`);
        openCart();
        return;
    }

    cart.push(id);
    saveCart();
    renderCart();

    showToast(`${car.name} ditambahkan ke keranjang.`);
}

function removeFromCart(id) {
    cart = cart.filter(carId => carId !== id);

    saveCart();
    renderCart();
}

function clearCart() {
    cart = [];
    saveCart();
    renderCart();
}

clearCartButton.addEventListener("click", () => {
    if (cart.length === 0) {
        showToast("Keranjang sudah kosong.");
        return;
    }

    const confirmed = window.confirm(
        "Kosongkan semua mobil dari keranjang?"
    );

    if (confirmed) {
        clearCart();
        showToast("Keranjang berhasil dikosongkan.");
    }
});


// ========================================
// TAMPILKAN KERANJANG
// ========================================

function renderCart() {
    const count = cart.length;

    cartCount.textContent = count;
    cartTotal.textContent = `${count} mobil`;

    if (count === 0) {
        cartItems.innerHTML = `
            <p class="empty-message">
                Keranjangmu masih kosong.
                <br>
                Pilih mobil favoritmu dari katalog.
            </p>
        `;

        return;
    }

    cartItems.innerHTML = cart.map(id => {
        const car = getCar(id);

        if (!car) {
            return "";
        }

        return `
            <div class="cart-item">
                <img
                    src="${escapeHTML(car.image)}"
                    alt="${escapeHTML(car.name)}"
                    loading="lazy"
                >

                <div class="cart-item-info">
                    <h3>${escapeHTML(car.name)}</h3>
                    <p>
                        ${escapeHTML(car.brand)}
                        ·
                        ${escapeHTML(car.year)}
                    </p>
                    <p>${escapeHTML(car.category)}</p>
                </div>

                <button
                    type="button"
                    class="remove-cart-item"
                    data-remove-cart="${escapeHTML(car.id)}"
                    aria-label="Hapus ${escapeHTML(car.name)}"
                >
                    Hapus
                </button>
            </div>
        `;
    }).join("");
}


// ========================================
// DETAIL MOBIL
// ========================================

function showDetails(id) {
    const car = getCar(id);

    if (!car) {
        return;
    }

    const advantages = car.advantages
        .map(item => `<li>${escapeHTML(item)}</li>`)
        .join("");

    const disadvantages = car.disadvantages
        .map(item => `<li>${escapeHTML(item)}</li>`)
        .join("");

    detailContent.innerHTML = `
        <img
            src="${escapeHTML(car.image)}"
            alt="${escapeHTML(car.name)}"
            class="detail-image"
        >

        <span class="eyebrow">
            ${escapeHTML(car.brand.toUpperCase())}
            ·
            ${escapeHTML(car.category.toUpperCase())}
        </span>

        <h2 class="detail-title">
            ${escapeHTML(car.name)}
        </h2>

        <p class="detail-description">
            ${escapeHTML(car.description)}
        </p>

        <div class="detail-year">
            <strong>Tahun model:</strong>
            ${escapeHTML(car.year)}
            <br>
            <small>
                Spesifikasi dan tahun aktual perlu disesuaikan
                dengan unit yang ditawarkan.
            </small>
        </div>

        <div class="detail-lists">
            <div class="detail-list">
                <h3>✓ Kelebihan</h3>
                <ul>${advantages}</ul>
            </div>

            <div class="detail-list">
                <h3>− Kekurangan</h3>
                <ul>${disadvantages}</ul>
            </div>
        </div>

        <button
            type="button"
            class="primary-button detail-add-button"
            data-add-cart="${escapeHTML(car.id)}"
        >
            + Tambahkan ke keranjang
        </button>
    `;

    openModal(detailModal);
}

closeDetailButton.addEventListener("click", () => {
    closeModal(detailModal);
});

detailModal.addEventListener("click", event => {
    if (event.target === detailModal) {
        closeModal(detailModal);
    }
});


// ========================================
// EVENT DELEGATION
// Tombol katalog dan keranjang
// ========================================

document.addEventListener("click", event => {
    const addButton = event.target.closest("[data-add-cart]");

    if (addButton) {
        const id = addButton.dataset.addCart;
        const wasDetailButton =
            Boolean(addButton.closest("#detailContent"));

        addToCart(id);

        if (wasDetailButton) {
            closeModal(detailModal);
        }

        return;
    }

    const detailButton = event.target.closest("[data-detail]");

    if (detailButton) {
        showDetails(detailButton.dataset.detail);
        return;
    }

    const removeButton = event.target.closest("[data-remove-cart]");

    if (removeButton) {
        removeFromCart(removeButton.dataset.removeCart);
        showToast("Mobil dihapus dari keranjang.");
    }
});


// ========================================
// PENCARIAN MOBIL
// ========================================

function filterCars() {
    const query = searchInput.value.trim().toLowerCase();

    document.querySelectorAll(".car-card").forEach(card => {
        const id = card.dataset.carId;
        const car = getCar(id);

        if (!car) {
            card.classList.add("is-hidden");
            return;
        }

        const searchableText = [
            car.name,
            car.brand,
            car.category,
            car.year,
            car.description
        ].join(" ").toLowerCase();

        const matches = searchableText.includes(query);

        card.classList.toggle("is-hidden", !matches);
    });

    document.querySelectorAll(".catalog-section").forEach(section => {
        const visibleCars = section.querySelectorAll(
            ".car-card:not(.is-hidden)"
        );

        let message = section.querySelector(".no-results");

        if (visibleCars.length === 0 && query !== "") {
            if (!message) {
                message = document.createElement("p");
                message.className = "no-results";
                message.textContent = "Mobil tidak ditemukan.";
                section.querySelector(".car-grid").appendChild(message);
            }
        } else if (message) {
            message.remove();
        }
    });
}

searchInput.addEventListener("input", filterCars);


// ========================================
// CHECKOUT
// ========================================

checkoutButton.addEventListener("click", () => {
    if (cart.length === 0) {
        showToast("Pilih mobil terlebih dahulu.");
        return;
    }

    closeCart();
    openModal(checkoutModal);
});

closeCheckoutButton.addEventListener("click", () => {
    closeModal(checkoutModal);
});

checkoutModal.addEventListener("click", event => {
    if (event.target === checkoutModal) {
        closeModal(checkoutModal);
    }
});


// ========================================
// PESAN MELALUI WHATSAPP
// ========================================

whatsappButton.addEventListener("click", () => {
    if (cart.length === 0) {
        closeModal(checkoutModal);
        showToast("Keranjangmu masih kosong.");
        return;
    }

    if (
        !/^\d{8,15}$/.test(WHATSAPP_NUMBER) ||
        WHATSAPP_NUMBER === "6281234567890"
    ) {
        showToast(
            "Atur WHATSAPP_NUMBER di script.js dengan nomor tujuan yang benar."
        );
        return;
    }

    const selectedCars = cart
        .map((id, index) => {
            const car = getCar(id);

            if (!car) {
                return null;
            }

            return `${index + 1}. ${car.name} (${car.brand}, ${car.year})`;
        })
        .filter(Boolean);

    const message = [
        "Halo A.A. CARS, saya ingin menanyakan mobil berikut:",
        "",
        ...selectedCars,
        "",
        `Jumlah mobil pilihan: ${selectedCars.length}`,
        "",
        "Mohon informasi harga, ketersediaan, dan detail unit. Terima kasih."
    ].join("\n");

    const whatsappURL =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
});


// ========================================
// BATALKAN PESANAN
// ========================================

cancelOrderButton.addEventListener("click", () => {
    const confirmed = window.confirm(
        "Batalkan pesanan dan kosongkan keranjang?"
    );

    if (!confirmed) {
        return;
    }

    clearCart();
    closeModal(checkoutModal);
    showToast("Pesanan dibatalkan.");
});




const navLinks = document.querySelectorAll(".nav-links a");

function updateActiveNavigation() {
    const currentHash = window.location.hash || "#home";

    navLinks.forEach(link => {
        const isActive = link.getAttribute("href") === currentHash;
        link.classList.toggle("active", isActive);
    });
}

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.forEach(item => item.classList.remove("active"));
        link.classList.add("active");
    });
});

window.addEventListener("hashchange", updateActiveNavigation);


// ========================================
// NOTIFIKASI SEDERHANA
// ========================================

let toastTimeout;

function showToast(message) {
    let toast = document.getElementById("aaToast");

    if (!toast) {
        toast = document.createElement("div");
        toast.id = "aaToast";

        Object.assign(toast.style, {
            position: "fixed",
            bottom: "25px",
            left: "50%",
            zIndex: "200",
            maxWidth: "90%",
            padding: "13px 19px",
            borderRadius: "12px",
            background: "#292720",
            color: "#fffefa",
            boxShadow: "0 10px 30px rgba(0,0,0,.18)",
            fontSize: "12px",
            textAlign: "center",
            opacity: "0",
            transform: "translate(-50%, 10px)",
            transition: "opacity .2s, transform .2s",
            pointerEvents: "none"
        });

        document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.style.opacity = "1";
    toast.style.transform = "translate(-50%, 0)";

    clearTimeout(toastTimeout);

    toastTimeout = setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translate(-50%, 10px)";
    }, 2800);
}


// ========================================
// TUTUP DENGAN TOMBOL ESC
// ========================================

document.addEventListener("keydown", event => {
    if (event.key !== "Escape") {
        return;
    }

    closeCart();
    closeModal(detailModal);
    closeModal(checkoutModal);
});


// ========================================
// INISIALISASI
// ========================================

renderCart();
updateActiveNavigation();
filterCars();
