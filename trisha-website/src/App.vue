<template>
  <div class="container-fluid">
    <div class="row g-0 flex-nowrap">
      <!-- Sidebar -->
      <div class="col-12 col-md-2 sidebar-col p-0">
        <Sidebar />
      </div>

      <!-- Main content -->
      <div class="col-12 col-md-10 main-content">
        <div class="content-wrapper p-4">
          <Home />
          <About />
          <Education />
          <Achievements />
          <Contact />
          <Resources />
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
