<template>
  <section id="achievement" class="content-section">
    <h2>Achievements</h2>
    <div class="achievements-box">
      <div class="achievement-details">
        <p>Undergraduate <span class="highlight">Research Paper</span> Presentation at 17th EdukCircle International Convention on Psychological Communication 2019</p>
        <p>Registered <span class="highlight">Psychometrician</span> Professional Regulation Commission License No.0022517</p>
        <p>Market <span class="highlight">Training</span> at Philippine Survey and Research Center</p>
        <p>Attended <span class="highlight">FHA Singapore 2023</span> with International Market Brand</p>
        <p>Attended <span class="highlight">THAIFEX ANUGA ASIA 2024</span> with International Market Brand</p>
        <p>The <span class="highlight">Data Analyst</span> Course Certificate at Udemy</p>
        <p>IBM SkillsBuild Digital Credential for <span class="highlight">Web Development</span> Essentials</p>
      </div>
    </div>
    <div class="achievement-photos">
      <div class="photo-square clickable"><img src="/images/laude.jpg" alt="Laude" /></div>
      <div class="photo-square clickable"><img src="/images/Edukcircle.jpg" alt="EdukCircle" /></div>
      <div class="photo-square clickable"><img src="/images/license.png" alt="License" /></div>
      <div class="photo-square clickable"><img src="/images/mr.jpg" alt="Market" /></div>
      <div class="photo-square clickable"><img src="/images/fha.jpg" alt="IMB SG" /></div>
      <div class="photo-square clickable"><img src="/images/thaifex.jpg" alt="IMB Thai" /></div>
      <div class="photo-square clickable"><img src="/images/data.png" alt="Data" /></div>
      <div class="photo-square clickable"><img src="/images/web.png" alt="IBM" /></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Achievements",
  mounted() {
    this.setupImageModal();
  },
  methods: {
    setupImageModal() {
      // Create modal if it doesn't exist
      let modal = document.querySelector('.image-modal');
      if (!modal) {
        modal = document.createElement('div');
        modal.className = 'image-modal';
        modal.innerHTML = `
          <span class="image-modal-close">&times;</span>
          <img src="" alt="Enlarged view">
        `;
        document.body.appendChild(modal);
      }

      const modalImg = modal.querySelector('img');
      const closeBtn = modal.querySelector('.image-modal-close');

      // Add click events to all achievement photos
      const photos = document.querySelectorAll('#achievement .photo-square.clickable img');
      photos.forEach(photo => {
        photo.parentElement.style.cursor = 'pointer';
        photo.addEventListener('click', () => {
          modalImg.src = photo.src;
          modal.classList.add('active');
        });
      });

      // Close modal
      modal.addEventListener('click', () => {
        modal.classList.remove('active');
      });

      closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        modal.classList.remove('active');
      });
    }
  }
};
</script>