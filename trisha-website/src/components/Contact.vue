<template>
  <section id="contact" class="content-section">
    <h2>Contact Me</h2>
    <div class="contact-container">
      <div class="contact-info">
        <div class="info-item"><i class="fas fa-phone"></i><p>0927 881 0168</p></div>
        <div class="info-item"><i class="fas fa-envelope"></i><p>tmvsayson@gmail.com</p></div>
        <div class="info-item"><i class="fas fa-map-marker-alt"></i><p>San Mateo, Rizal</p></div>
        <div class="info-item"><i class="fab fa-github"></i><p><a href="https://github.com/TrishaMaeSayson" target="_blank">GitHub</a></p></div>
        <div class="info-item"><i class="fab fa-facebook"></i><p><a href="https://www.facebook.com/trishamae.sayson/" target="_blank">Facebook</a></p></div>
      </div>

      <div class="contact-form">
        <h3>What is your feedback on my website?</h3>
        <form id="feedbackForm">
          <textarea id="feedbackMessage" placeholder="Type your message here..." required></textarea>
          <button type="submit">Send Feedback</button>
        </form>
        <p id="feedbackResponse" class="hidden">Thank you for your feedback!</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact",
  mounted() {
    const form = document.getElementById("feedbackForm");
    const response = document.getElementById("feedbackResponse");

    form.addEventListener("submit", e => {
      e.preventDefault();
      const message = document.getElementById("feedbackMessage").value.trim();
      if (message) {
        response.classList.remove("hidden");
        form.reset();
        setTimeout(() => response.classList.add("hidden"), 3000);
      }
    });
  }
};
</script>
