// Menampilkan tanggal hari ini
const tanggal = document.getElementById("tanggal");

const hari = new Date().toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
});

tanggal.textContent = hari;


// Membuat QR Presensi
function buatQR() {

    const qrcode = document.getElementById("qrcode");

    const data = "PRESENSI-KELAS-2026";

    qrcode.innerHTML = `
        <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(data)}"
            alt="QR Presensi"
        >
    `;
}


// Generate identitas mahasiswa
function generateMahasiswa() {

    const nim = document.getElementById("nim").value;
    const hasil = document.getElementById("hasil");

    if (nim.trim() === "") {
        hasil.textContent = "⚠️ NIM belum diisi.";
        return;
    }

    hasil.innerHTML = `
        <strong>Identitas berhasil dibuat</strong><br>
        NIM: ${nim}
    `;
}


// Membuat QR Presensi
function buatQR() {
    const qrcode = document.getElementById("qrcode");

    const data = "PRESENSI-KELAS-HADIRKU-2026";

    qrcode.innerHTML = `
        <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(data)}"
            alt="QR Presensi"
        >
    `;
}

// QR otomatis muncul saat halaman dibuka
window.onload = function () {
    buatQR();
};


// Tombol scanner
function mulaiScan() {

    alert(
        "Fitur kamera akan digunakan untuk membaca QR mahasiswa."
    );
}