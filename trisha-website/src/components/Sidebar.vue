<template>
  <nav class="sidebar navbar navbar-expand-lg navbar-dark flex-column p-3">
    <!-- Brand / Profile -->
    <router-link to="/" class="navbar-brand w-100 mb-3 text-center">
      <img src="/images/selfie.jpg" class="profile-pic mb-2" alt="Profile" />
      <h1 class="brand-name">TreseMe</h1>
    </router-link>

    <!-- Hamburger Button (visible on mobile) -->
    <button
      class="navbar-toggler mb-3"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#sidebarNav"
      aria-controls="sidebarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Collapsible Menu -->
    <div class="collapse navbar-collapse flex-column w-100" id="sidebarNav">
      <ul class="navbar-nav w-100 text-center">
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active">
            <i class="fas fa-home"></i> Home
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link" active-class="active">
            <i class="fas fa-user"></i> About
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/education" class="nav-link" active-class="active">
            <i class="fas fa-graduation-cap"></i> Education
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/achievements" class="nav-link" active-class="active">
            <i class="fas fa-award"></i> Achievements
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link" active-class="active">
            <i class="fas fa-envelope"></i> Contact
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/resources" class="nav-link" active-class="active">
            <i class="fas fa-book"></i> Resources
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Sidebar",
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      document.querySelectorAll('.nav-link').forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom)
            link.classList.add('active');
          else
            link.classList.remove('active');
        }
      });
    }
  }
};
</script>
