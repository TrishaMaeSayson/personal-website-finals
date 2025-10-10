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
        <form id="feedbackForm">
          <textarea 
            v-model="feedbackMessage" 
            placeholder="Type your message here..." 
            required
          ></textarea>
          <button type="submit" :disabled="isSending">
            {{ isSending ? 'Sending...' : 'Sent Feedback' }}
          </button>
        </form>
        <p v-if="feedbackResponse" class="feedback-message">
          {{ feedbackResponse }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from '../supabase' // 👈 adjust path if needed

const feedbackMessage = ref('')
const feedbackResponse = ref('')
const isSending = ref(false)

async function sendFeedback() {
  if (!feedbackMessage.value.trim()) {
    feedbackResponse.value = 'Please enter a message before sending.'
    return
  }

  isSending.value = true
  feedbackResponse.value = ''

  const { error } = await supabase
    .from('feedback')
    .insert([{ message: feedbackMessage.value.trim() }])

  if (error) {
    console.error(error)
    feedbackResponse.value = 'Something went wrong. Please try again.'
  } else {
    feedbackResponse.value = 'Thank you for your feedback!'
    feedbackMessage.value = ''
  }

  isSending.value = false
  setTimeout(() => (feedbackResponse.value = ''), 3000)
}
</script>
