// JavaScript code

// Fungsi untuk menampilkan waktu saat ini pada footer
function displayCurrentTime() {
  const footer = document.querySelector('footer');
  const currentTime = new Date().toLocaleTimeString();
  footer.textContent = `© ${new Date().getFullYear()} Ulang Tahun Ayu Ningsih | Current Time: ${currentTime}`;
}

// Fungsi untuk menambahkan event listener pada menu navigasi
function addNavigationEventListeners() {
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const sectionId = link.getAttribute('href').substring(1);
      scrollToSection(sectionId);
    });
  });
}

// Fungsi untuk menggulir ke bagian tertentu pada halaman
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
}

// Fungsi untuk menambahkan tautan ke Spotify playlist
function addSpotifyPlaylistLink() {
  const spotifyPlaylistDiv = document.querySelector('.spotify-playlist');
  const playlistLink = document.createElement('a');
  playlistLink.href = 'https://www.spotify.com/your-playlist-link';
  playlistLink.textContent = 'My Spotify Playlist';
  spotifyPlaylistDiv.appendChild(playlistLink);
}

// Fungsi untuk menambahkan tautan ke sosial media pasangan Anda
function addSocialMediaLinks() {
  const socialMediaLinks = document.querySelectorAll('.social-media-links a');
  socialMediaLinks.forEach(link => {
    const socialMedia = link.getAttribute('data-social');
    link.href = `https://www.${socialMedia}.com/your-profile-link`;
  });
}

// Panggil fungsi-fungsi yang diperlukan saat halaman dimuat
window.addEventListener('DOMContentLoaded', () => {
  displayCurrentTime();
  addNavigationEventListeners();
  addSpotifyPlaylistLink();
  addSocialMediaLinks();
});
