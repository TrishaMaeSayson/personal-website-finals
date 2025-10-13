<template>
  <!-- Sidebar container: use fixed for sticky left column -->
  <nav class="sidebar navbar navbar-expand-lg navbar-dark flex-column p-3">
    <!-- Brand / Profile -->
    <a class="navbar-brand w-100 mb-3 text-center" href="#home">
      <img src="/images/selfie.jpg" class="profile-pic mb-2" alt="Profile" />
      <h1 class="brand-name">TreseMe</h1>
    </a>

    <!-- Hamburger Button for mobile -->
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

    <!-- Collapsible menu -->
    <div class="collapse navbar-collapse flex-column w-100" id="sidebarNav">
      <ul class="navbar-nav w-100 text-center">
        <!-- Added scroll behavior via href with IDs, will use smooth scroll in CSS -->
        <li class="nav-item"><a href="#home" class="nav-link">Home</a></li>
        <li class="nav-item"><a href="#about" class="nav-link">About</a></li>
        <li class="nav-item"><a href="#education" class="nav-link">Education</a></li>
        <li class="nav-item"><a href="#achievement" class="nav-link">Achievements</a></li>
        <li class="nav-item"><a href="#contact" class="nav-link">Contact</a></li>
        <li class="nav-item"><a href="#resources" class="nav-link">Resources</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Sidebar",
  mounted() {
    // Scroll spy for active class
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
