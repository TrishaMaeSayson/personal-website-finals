<template>
  <div class="container-fluid">
    <div class="row g-0 flex-nowrap">
      <!-- Sidebar -->
      <div class="col-12 col-md-2 sidebar-col">
        <Sidebar />
      </div>

      <!-- Main content -->
      <div class="col-12 col-md-10 main-content">
        <div class="p-4">
          <!-- Router will load the page component here -->
          <router-view />
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
