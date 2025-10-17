<template>
  <section id="education" class="content-section">
    <h2>Education</h2>
    <div class="education-container">
      <div class="education-box">
        <div class="school-entry">
          <h3>St. Matthew College</h3>
          <p>Elementary & High School, San Mateo, Rizal<br>
          Last batch of the 4-year high school program.</p>
        </div>
        <div class="school-entry">
          <h3>Centro Escolar University Manila</h3>
          <p>B.S. Psychology, <em>Cum Laude</em><br>
          9 Mendiola St, San Miguel, Manila</p>
        </div>
        <div class="school-entry">
          <h3>Asia Pacific College</h3>
          <p>Associate in Computer Technology (Ongoing)<br>
          3 Humabon, Makati City<br>
          Aspiring Data Analyst</p>
        </div>
      </div>

      <div class="education-photos">
        <div class="photo-square square1 clickable"><img src="/images/matyo.jpg" alt="Matyo" /></div>
        <div class="photo-square square2 clickable"><img src="/images/ceu.jpg" alt="CEU" /></div>
        <div class="photo-square square3 clickable"><img src="/images/apc.jpg" alt="APC" /></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Education",
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

      // Add click events to all education photos
      const photos = document.querySelectorAll('#education .photo-square.clickable img');
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