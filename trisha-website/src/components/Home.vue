<template>
  <section id="home" class="content-section active">
    <div class="home-text text-start">
      <h2>Hi, I'm <span class="highlight-name">Trish</span></h2>
      <div class="typing-container">
        <p id="typing-text">
          <span class="static-text">The only 3 things that you can control are your</span>
          <span class="dynamic-words">
            <span id="thoughts" class="word-thoughts"></span><span id="feelings" class="word-feelings"></span><span id="actions" class="word-actions"></span>
          </span>
        </p>
      </div>
    </div>
    <div class="photo-frame">
      <div class="photo-background">
        <div class="rect rect1"></div>
        <div class="rect rect2"></div>
        <div class="rect rect3"></div>
      </div>
      <img src="/images/selfie.jpg" class="profile-pic" alt="Profile" />
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    const text1 = "The only 3 things that you can control are your ";
    const words = {
      thoughts: "thoughts, ",
      feelings: "feelings, ",
      actions: "& actions."
    };

    const staticText = document.querySelector('.static-text');
    const spans = {
      thoughts: document.getElementById("thoughts"),
      feelings: document.getElementById("feelings"),
      actions: document.getElementById("actions")
    };

    let i = 0;
    let phase = "line1";

    const type = () => {
      if (phase === "line1") {
        staticText.textContent = text1.substring(0, i);
        i++;
        if (i <= text1.length) setTimeout(type, 40);
        else { phase = "thoughts"; i = 0; setTimeout(type, 500); }
      } else if (phase === "thoughts") {
        spans.thoughts.textContent = words.thoughts.substring(0, i);
        i++;
        if (i <= words.thoughts.length) setTimeout(type, 80);
        else { phase = "feelings"; i = 0; setTimeout(type, 400); }
      } else if (phase === "feelings") {
        spans.feelings.textContent = words.feelings.substring(0, i);
        i++;
        if (i <= words.feelings.length) setTimeout(type, 80);
        else { phase = "actions"; i = 0; setTimeout(type, 400); }
      } else if (phase === "actions") {
        spans.actions.textContent = words.actions.substring(0, i);
        i++;
        if (i <= words.actions.length) setTimeout(type, 80);
        else setTimeout(restart, 2500);
      }
    };

    const restart = () => {
      staticText.textContent = "";
      spans.thoughts.textContent = "";
      spans.feelings.textContent = "";
      spans.actions.textContent = "";
      i = 0; phase = "line1"; setTimeout(type, 800);
    };

    type();

    // IMAGE MODAL FUNCTIONALITY
    this.setupImageModal();
  },
  methods: {
    setupImageModal() {
      // Create modal element
      const modal = document.createElement('div');
      modal.className = 'image-modal';
      modal.innerHTML = `
        <span class="image-modal-close">&times;</span>
        <img src="" alt="Enlarged view">
      `;
      document.body.appendChild(modal);

      const modalImg = modal.querySelector('img');
      const closeBtn = modal.querySelector('.image-modal-close');

      // Add click event to profile pic
      const profilePic = document.querySelector('#home .profile-pic');
      if (profilePic) {
        profilePic.style.cursor = 'pointer';
        profilePic.addEventListener('click', () => {
          modalImg.src = profilePic.src;
          modal.classList.add('active');
        });
      }

      // Close modal on click
      modal.addEventListener('click', () => {
        modal.classList.remove('active');
      });

      closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        modal.classList.remove('active');
      });
    }
  },
  beforeUnmount() {
    // Clean up modal
    const modal = document.querySelector('.image-modal');
    if (modal) modal.remove();
  }
};
</script>