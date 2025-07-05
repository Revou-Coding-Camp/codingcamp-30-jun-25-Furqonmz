function setName() {
    const name = document.getElementById("nameInput").value.trim();
    if (name === "") {
        alert("Nama tidak boleh kosong!");
        return;
    }

    localStorage.setItem("userName", name);
    document.getElementById("greeting").textContent = `Hi ${name}, Welcome to Website`;
    document.getElementById("nameInputContainer").style.display = "none";
    }

    window.onload = function () {
    localStorage.removeItem("userName");
    const savedName = localStorage.getItem("userName");
    if (savedName) {
        document.getElementById("greeting").textContent = `Hi ${savedName}, Welcome to Website`;
        document.getElementById("nameInputContainer").style.display = "none";
    }
    };

    window.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("messageForm");
    const timeEl = document.getElementById("time");

    function updateTime() {
      const now = new Date();
      const gmt7 = new Date(now.getTime() + (7 * 60 * 60 * 1000));
      timeEl.innerText = gmt7.toUTCString().replace("GMT", "GMT+7");
    }

    updateTime();
    setInterval(updateTime, 1000);

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

      form.reset();
    });
  });


  const data = {
    alat: {
      title: "Alat Ukur Berat dan Tinggi Bayi",
      image: "img/alat.jpg",
      description: "Ini adalah portofolio dari sistem alat ukur bayi digital yang dirancang untuk memantau pertumbuhan dan perkembangan bayi secara akurat dan efisien. Memanfaatkan sensor loadcell dan ultrasonik sehingga mengukur berat dan tinggi sekaligus"
    },
    website: {
      title: "Website Alat Ukur Berat dan Tinggi Bayi",
      image: "img/website_alat.png",
      description: "Ini adalah portofolio dari website alat yang dirancang. Petugas kesehatan dapat memantau data berat dan tinggi dari pengukuran yang dilakukan pada website ini"
    },
  };

  function showContent(city) {
    const content = data[city];
    document.getElementById("contentTitle").textContent = content.title;
    document.getElementById("contentImage").src = content.image;
    document.getElementById("contentDescription").textContent = content.description;
    document.getElementById("portfolioContent").classList.remove("hidden");
  }