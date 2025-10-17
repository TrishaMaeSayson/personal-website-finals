<template>
  <section id="contact" class="content-section">
    <h2>Contact Me</h2>

    <div class="contact-container">
      <!-- Left Side - Info -->
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

      <!-- Right Side - Feedback Form -->
      <div class="contact-form">
        <h3>What is your feedback on my website?</h3>
        <form @submit.prevent="submitFeedback">
          <input
            v-model="feedbackName"
            type="text"
            placeholder="Your name"
            required
          />
          <textarea
            v-model="feedbackMessage"
            placeholder="Type your message here..."
            required
          ></textarea>
          <button type="submit">Send Feedback</button>
        </form>
        <p v-if="feedbackSent">Thank you for your feedback!</p>
      </div>
    </div>

    <!-- Messages Section -->
    <div class="messages-container">
      <h3>Messages</h3>
      <div class="messages-list">
        <div
          v-for="item in feedbackList"
          :key="item.id"
          class="message-item"
        >
          <p class="message-text">{{ item.message }}</p>
          <small class="message-meta">
            — {{ item.name || "Anonymous" }}, {{ formatDate(item.created_at) }}
          </small>
        </div>
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
      feedbackName: '',
      feedbackMessage: '',
      feedbackSent: false,
      feedbackList: [],
    };
  },
  async mounted() {
    await this.loadFeedback();
  },
  methods: {
    async loadFeedback() {
      const { data, error } = await supabase
        .from('feedback')
        .select('*')
        .order('created_at', { ascending: false }); // latest first

      if (!error) this.feedbackList = data;
    },

    async submitFeedback() {
      // ✅ Prevent submission if name or message is empty
      if (!this.feedbackName.trim() || !this.feedbackMessage.trim()) {
        alert("Please enter both your name and your feedback before submitting.");
        return;
      }

      const { error } = await supabase
        .from('feedback')
        .insert([
          { name: this.feedbackName, message: this.feedbackMessage },
        ]);

      if (error) {
        console.error('Error submitting feedback:', error.message);
        alert('There was an error sending your feedback.');
        return;
      }

      this.feedbackSent = true;
      this.feedbackMessage = '';
      this.feedbackName = '';

      await this.loadFeedback(); // refresh messages

      setTimeout(() => (this.feedbackSent = false), 3000);
    },

    formatDate(date) {
      return new Date(date).toLocaleString();
    },
  },
};
</script>

