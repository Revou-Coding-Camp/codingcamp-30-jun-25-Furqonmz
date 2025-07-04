function setName() {
    const name = document.getElementById("nameInput").value.trim();
    if (name === "") {
        alert("Nama tidak boleh kosong!");
        return;
    }

    // simpan ke localStorage
    localStorage.setItem("userName", name);

    // tampilkan greeting
    document.getElementById("greeting").textContent = `Hi ${name}, Welcome to Website`;

    // sembunyikan form input
    document.getElementById("nameInputContainer").style.display = "none";
    }

    // kalau sebelumnya sudah tersimpan
    window.onload = function () {
    localStorage.removeItem("userName");
    const savedName = localStorage.getItem("userName");
    if (savedName) {
        document.getElementById("greeting").textContent = `Hi ${savedName}, Welcome to Website`;
        document.getElementById("nameInputContainer").style.display = "none";
    }
    };

    
    const form = document.getElementById("messageForm");
    const timeEl = document.getElementById("time");

    function updateTime() {
      const now = new Date();
      timeEl.innerText = now.toUTCString();
    }
    updateTime(); setInterval(updateTime, 1000);

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const nama = document.getElementById("nama").value;
      const tanggal = document.getElementById("tanggal").value;
      const pesan = document.getElementById("pesan").value;
      const gender = document.querySelector("input[name='gender']:checked");

      if (!nama || !tanggal || !pesan || !gender) {
        alert("Harap isi semua field!");
        return;
      }

      document.getElementById("outNama").innerText = nama;
      document.getElementById("outTanggal").innerText = tanggal;
      document.getElementById("outGender").innerText = gender.value;
      document.getElementById("outPesan").innerText = pesan;

      form.reset(); // Clear form
    });