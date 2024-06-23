document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("search-form");
  const input = document.getElementById("search-input");
  const resultsDiv = document.getElementById("results");
  const loadingDiv = document.getElementById("loading");
  const container = document.getElementById("container");

  const words = ["Tunggu sebentar, sedang menerawang khodam anda....."];

  let masterTL = gsap.timeline({ repeat: 1 });

  const randomData = [
    "Manusia Harimau",
    "Squidward",
    "Biji Kopi",
    "Kosong :(",
    "Royco Sapi",
    "Abe",
    "Kabel Tipe C",
    "Opah",
    "Naga Indosiar",
    "Singa Introvert",
    "Macan Whiskas",
    "Gudang Garam",
    "Korban Hts",
    "Palu Thor",
    "Mio Mirza",
  ];

  const images = {
    "Manusia Harimau": "assets/manusia-harimau.jpeg",
    "Squidward": "assets/squidward.jpeg",
    "Biji Kopi": "assets/biji-kopi.jpeg",
    "Royco Sapi": "assets/royco-sapi.jpeg",
    "Abe": "assets/abe-cekut.jpeg",
    "Kabel Tipe C": "assets/tipe-c.jpeg",
    "Opah": "assets/opah.jpeg",
    "Naga Indosiar": "assets/naga-indosiar.jpeg",
    "Singa Introvert": "assets/singa-introvert.jpeg",
    "Macan Whiskas": "assets/macan-wiskas.jpeg",
    "Gudang Garam": "assets/gudang-garam.jpeg",
    "Korban Hts": "assets/korban-hts.jpeg",
    "Palu Thor": "assets/palu-thor.jpeg",
    "Mio Mirza": "assets/mio-mirza.jpeg",
  };

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const query = input.value.trim();

    if (query) {
      showLoading();
      setTimeout(() => {
        displayResults(query);
        container.style.display = "none";
        resultsDiv.style.display = "block";
        hideLoading();
      }, 5000);
    }
  });

  function showLoading() {
    words.forEach((word) => {
      let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1.5 });
      tl.to(loadingDiv, { duration: 1, delay: 0.5, text: word });
      masterTL.add(tl);
    });
    loadingDiv.style.display = "block";
    resultsDiv.style.display = "none";
    container.style.display = "none";
  }

  function hideLoading() {
    loadingDiv.style.display = "none";
    resultsDiv.style.display = "block";
  }

  function displayResults(query) {
    const randomItem = randomData[Math.floor(Math.random() * randomData.length)];
    const imageUrl = images[randomItem];
    resultsDiv.innerHTML = `
      <h5>Khodam ${query} adalah </h5>
      <h1>${randomItem}</h1>
      <img src="${imageUrl}" alt="${randomItem}" width="300"/>
      <br/><br/>
      <a href="" id="btn">Cek Nama Lain</a>
      <br/><br/>
      <button class="btn share-btn" id="facebook-share">Share on Facebook</button>
      <button class="btn share-btn" id="twitter-share">Share on Twitter</button>
      <button class="btn share-btn" id="whatsapp-share">Share on WhatsApp</button>
    `;
    addShareEventListeners(query, randomItem, imageUrl, window.location.href);
  }

  function addShareEventListeners(name, khodam, imageUrl, shareUrl) {
    const shareText = `Khodam untuk ${name} adalah ${khodam}`;
    
    document.getElementById('facebook-share').addEventListener('click', () => {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}&picture=${encodeURIComponent(imageUrl)}`, '_blank');
    });

    document.getElementById('whatsapp-share').addEventListener('click', () => {
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + shareUrl)}&media=${encodeURIComponent(imageUrl)}`, '_blank');
    });

    document.getElementById('twitter-share').addEventListener('click', () => {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText + ' ' + shareUrl)}&url=${encodeURIComponent(imageUrl)}`, '_blank');
    });
  }

  let isNightMode = false;

  function nightmode() {
    const mode1 = document.getElementById("mode-1");
    const mode2 = document.getElementById("mode-2");
    const circle = document.getElementById("circle");
    const searchContainer = document.getElementById("search-container");
    const btn = document.getElementById("btn");
    const loadingText = document.getElementById("loading");
    const footer = document.getElementById("footer");
    const footerLink = document.getElementById("footer-link");
    const results = document.getElementById("results");

    isNightMode = !isNightMode;

    if (isNightMode) {
      document.body.style.backgroundColor = "#121212";
      document.body.style.color = "#ffffff";
      circle.style.backgroundColor = "#333";
      searchContainer.style.backgroundColor = "#333";
      searchContainer.style.color = "#ffffff";
      btn.style.backgroundColor = "#555";
      btn.style.color = "#ffffff";
      loadingText.style.color = "#ffffff";
      footer.style.backgroundColor = "#333";
      footer.style.color = "#ffffff";
      footerLink.style.color = "#ffffff";
      results.style.color = "#ffffff";

      mode1.style.display = "none";
      mode2.style.display = "block";
    } else {
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "#000000";
      circle.style.backgroundColor = "#f0f0f0";
      searchContainer.style.backgroundColor = "#f0f0f0";
      searchContainer.style.color = "#000000";
      btn.style.backgroundColor = "#007bff";
      btn.style.color = "#ffffff";
      loadingText.style.color = "#000000";
      footer.style.backgroundColor = "#f0f0f0";
      footer.style.color = "#000000";
      footerLink.style.color = "#0000ff";
      results.style.color = "#000000";

      mode1.style.display = "block";
      mode2.style.display = "none";
    }
  }

  window.nightmode = nightmode;
});
