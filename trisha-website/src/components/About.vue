<template>
  <section id="about" class="content-section">
    <h2>About Me</h2>
    <div class="paragraph-box">
      <p>I'm a returning student from San Mateo, Rizal...</p>
      <p>I enjoy a wide range of hobbies including piano, drawing, anime, and badminton.</p>
      <p>I’m proud of being self-aware and dedicated to personal growth...</p>
      <p>This website is part of my WEBPROG course requirement.</p>
    </div>

    <div class="about-content">
      <div class="about-left">
        <div class="about-info">
          <table>
            <tr><td><strong>Full Name:</strong></td><td>Trisha Mae Verdeflor Sayson</td></tr>
            <tr><td><strong>Birthday:</strong></td><td>March 10, 1999</td></tr>
            <tr><td><strong>Age:</strong></td><td>26</td></tr>
            <tr><td><strong>Address:</strong></td><td>San Mateo, Rizal</td></tr>
          </table>
        </div>

        <div class="about-links">
          <a href="https://myanimelist.net/profile/Psysonsy" target="_blank"><img src="/images/MAL.png" alt="MAL" /></a>
          <a href="https://www.deviantart.com/yellow-sonsy" target="_blank"><img src="/images/deviant.png" alt="DeviantArt" /></a>
          <a href="https://archiveofourown.org/users/Psysonsy/profile" target="_blank"><img src="/images/A03.png" alt="AO3" /></a>
        </div>
      </div>

      <div class="about-right">
        <div class="music-container">
          <div class="music-art">
            <img src="/images/drawing.jpg" class="drawing" alt="Sketch" />
          </div>
          <div class="music-controls">
            <button id="aboutPlayBtn" class="play-btn"><i class="fas fa-play"></i></button>
            <div class="music-visualizer">
              <span></span><span></span><span></span><span></span><span></span>
            </div>
          </div>
          <audio id="piano" src="/music.ogg" preload="metadata"></audio>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
  mounted() {
    const audio = document.getElementById('piano');
    const btn = document.getElementById('aboutPlayBtn');
    const icon = btn.querySelector('i');
    const bars = document.querySelectorAll('.music-visualizer span');

    if (!audio || !btn || bars.length === 0) return;

    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const src = ctx.createMediaElementSource(audio);
    const analyser = ctx.createAnalyser();
    analyser.fftSize = 64;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    src.connect(analyser);
    analyser.connect(ctx.destination);

    let animationId = null;

    const animateBars = () => {
      animationId = requestAnimationFrame(animateBars);
      analyser.getByteFrequencyData(dataArray);
      bars.forEach((bar, i) => {
        const height = (dataArray[i] / 255) * 30 + 4;
        bar.style.height = `${height}px`;
      });
    };

    const resetBars = () => {
      cancelAnimationFrame(animationId);
      bars.forEach(bar => bar.classList.remove('active'));
      btn.classList.remove('playing');
    };

    btn.addEventListener('click', () => {
      if (audio.paused) {
        ctx.resume();
        audio.play().catch(err => console.warn('Play failed:', err));
        icon.classList.replace('fa-play', 'fa-pause');
        btn.setAttribute('aria-pressed', 'true');
        bars.forEach(bar => bar.classList.add('active'));
        btn.classList.add('playing');
        animateBars();
      } else {
        audio.pause();
        icon.classList.replace('fa-pause', 'fa-play');
        btn.setAttribute('aria-pressed', 'false');
        resetBars();
      }
    });

    audio.addEventListener('ended', () => {
      icon.classList.replace('fa-pause', 'fa-play');
      btn.setAttribute('aria-pressed', 'false');
      resetBars();
    });

    resetBars();
  }
};
</script>
