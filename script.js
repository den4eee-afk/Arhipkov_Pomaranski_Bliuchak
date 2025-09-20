const gamesData = [
  { name: "GTA VI", released: "2025-10-15", image: "https://i.imgur.com/zXgW4ZT.jpeg", trailer: "https://www.youtube.com/embed/VQRLujxTm3c" },
  { name: "The Witcher 4", released: "2026-03-22", image: "https://i.imgur.com/RYyqM3s.jpeg", trailer: "https://www.youtube.com/embed/9dP4bB8F-FM" },
  { name: "Cyberpunk 2077", released: "2025-12-01", image: "https://i.imgur.com/pAJzHY2.jpeg", trailer: "https://www.youtube.com/embed/cb1H0Fx6sYs" },
  { name: "Assassin's Creed Infinity", released: "2026-06-10", image: "https://i.imgur.com/6k7bQwP.jpeg", trailer: "https://www.youtube.com/embed/2XbFqdB6p9M" },
  { name: "Half-Life 3", released: "2027-01-20", image: "https://i.imgur.com/4Z2Qw5T.jpeg", trailer: "https://www.youtube.com/embed/3j8ecF8Wt4E" },
  { name: "Elden Ring 2", released: "2026-11-05", image: "https://i.imgur.com/8vQw5kT.jpeg", trailer: "https://www.youtube.com/embed/4bF8kQw5T9E" },
  { name: "Red Dead Redemption 3", released: "2027-09-15", image: "https://i.imgur.com/7kQw5T8.jpeg", trailer: "https://www.youtube.com/embed/5kQw5T8F9E" }
];

const gamesContainer = document.getElementById("games");
const searchInput = document.getElementById("search");
const modal = document.getElementById("modal");
const modalVideo = document.getElementById("modal-video");
const modalClose = document.getElementById("modal-close");

function displayGames(games) {
  gamesContainer.innerHTML = "";
  games.forEach(game => {
    const card = document.createElement("div");
    card.classList.add("game-card");
    card.innerHTML = `
      <img src="${game.image}" alt="${game.name}">
      <h3>${game.name}</h3>
      <p>Дата релізу: ${game.released}</p>
      <button class="trailer-btn">Переглянути трейлер</button>
    `;
    const trailerBtn = card.querySelector(".trailer-btn");
    trailerBtn.addEventListener("click", () => {
      let url = game.trailer;
      if (url && url.includes("youtube.com")) {
        url += (url.includes("?") ? "&" : "?") + "autoplay=1";
      }
      modalVideo.src = url || "";
      modal.classList.add("show");
      modal.style.display = "flex";
    });
    gamesContainer.appendChild(card);
  });
}

modalClose.addEventListener("click", () => {
  modal.classList.remove("show");
  setTimeout(() => {
    modal.style.display = "none";
    modalVideo.src = "";
  }, 300);
});

window.addEventListener("click", e => {
  if (e.target === modal) {
    modal.classList.remove("show");
    setTimeout(() => {
      modal.style.display = "none";
      modalVideo.src = "";
    }, 300);
  }
});

displayGames(gamesData);

searchInput.addEventListener("input", () => {
  const val = searchInput.value.toLowerCase();
  const filtered = gamesData.filter(g => g.name.toLowerCase().includes(val));
  displayGames(filtered);
});