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
          <a href="https://myanimelist.net/profile/Psysonsy" target="_blank"><img src="images/MAL.png" alt="MAL" /></a>
          <a href="https://www.deviantart.com/yellow-sonsy" target="_blank"><img src="images/deviant.png" alt="DeviantArt" /></a>
          <a href="https://archiveofourown.org/users/Psysonsy/profile" target="_blank"><img src="images/A03.png" alt="AO3" /></a>
        </div>
      </div>

      <div class="about-right">
        <div class="music-container">
          <div class="music-art">
            <img src="images/drawing.jpg" class="drawing" alt="Sketch" />
          </div>
          <div class="music-controls">
            <button id="aboutPlayBtn" class="play-btn"><i class="fas fa-play"></i></button>
            <div class="music-visualizer">
              <span></span><span></span><span></span><span></span><span></span>
            </div>
          </div>
          <audio id="piano" src="music.ogg" preload="metadata"></audio>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default { name: "About" };
</script>
