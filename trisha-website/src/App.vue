<template>
  <div class="container-fluid">
    <div class="row g-0">
      <!-- Sidebar -->
      <div class="col-md-2">
        <Sidebar />
      </div>

      <!-- Main content -->
      <div class="col-md-10 p-4">
        <div class="row">
          <div class="col-2"></div>

          <div class="col-8">
            <Home />
            <About />
            <Education />
            <Achievements />
            <Contact />
            <Resources />
          </div>

          <div class="col-2"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Education from './components/Education.vue'
import Achievements from './components/Achievements.vue'
import Contact from './components/Contact.vue'
import Resources from './components/Resources.vue'

export default {
  name: 'App',
  components: {
    Sidebar,
    Home,
    About,
    Education,
    Achievements,
    Contact,
    Resources
  }
}
</script>

<style></style>
