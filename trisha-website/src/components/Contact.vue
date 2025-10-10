<template>
  <section id="contact" class="content-section">
    <h2>Contact Me</h2>
    <div class="contact-container">
      <div class="contact-info">
        <div class="info-item">
          <i class="fas fa-phone"></i>
          <div class="info-text">
            <p><strong>Phone:</strong></p>
            <p>0927 881 0168</p>
          </div>
        </div>

        <div class="info-item">
          <i class="fas fa-envelope"></i>
          <div class="info-text">
            <p><strong>Email:</strong></p>
            <p>tmvsayson@gmail.com</p>
          </div>
        </div>

        <div class="info-item">
          <i class="fas fa-map-marker-alt"></i>
          <div class="info-text">
            <p><strong>Address:</strong></p>
            <p>San Mateo, Rizal</p>
          </div>
        </div>

        <div class="info-item">
          <i class="fab fa-github"></i>
          <div class="info-text">
            <p><strong>GitHub:</strong></p>
            <p><a href="https://github.com/TrishaMaeSayson" target="_blank">TrishaMaeSayson</a></p>
          </div>
        </div>

        <div class="info-item">
          <i class="fab fa-facebook"></i>
          <div class="info-text">
            <p><strong>Facebook:</strong></p>
            <p><a href="https://www.facebook.com/trishamae.sayson/" target="_blank">Trisha Mae Verdeflor Sayson</a></p>
          </div>
        </div>
      </div>

      <div class="contact-form">
        <h3>What is your feedback on my website?</h3>
        <form @submit.prevent="submitFeedback">
          <textarea 
            v-model="feedbackMessage" 
            placeholder="Type your message here..." 
            required
          ></textarea>
          <button type="submit">
            Send Feedback
          </button>
        </form>
        <p v-if="feedbackSent">
          Thank you for your feedback!
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { supabase } from '../lib/supabaseClient.js';

export default {
  name: "Contact",
  data() {
    return {
      feedbackMessage: '',
      feedbackSent: false
    };
  },
  methods: {
    async submitFeedback() {
      if (!this.feedbackMessage.trim()) return;

      const { error } = await supabase
        .from('feedback') // <-- your table name in Supabase
        .insert([{ message: this.feedbackMessage }]);

      if (error) {
        console.error('Error submitting feedback:', error.message);
        alert('There was an error sending your feedback.');
        return;
      }

      this.feedbackSent = true;
      this.feedbackMessage = '';

      // Hide thank you message after 3 seconds
      setTimeout(() => (this.feedbackSent = false), 3000);
    }
  }
};
</script>
