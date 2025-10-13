<template>
  <nav class="sidebar navbar navbar-expand-lg flex-lg-column p-3">
    <!-- Brand / Profile -->
    <a class="navbar-brand w-100 mb-2" href="#home">
      <img src="/images/selfie.jpg" class="profile-pic mb-2" alt="Profile" />
      <h1>TreseMe</h1>
    </a>

    <!-- Hamburger Button -->
    <button
      class="navbar-toggler"
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
    <div class="collapse navbar-collapse flex-column mt-3 w-100 show" id="sidebarNav">
      <ul class="navbar-nav w-100 text-center">
        <li class="nav-item"><a href="#home" class="nav-link"><i class="fas fa-home"></i> Home</a></li>
        <li class="nav-item"><a href="#about" class="nav-link"><i class="fas fa-user"></i> About</a></li>
        <li class="nav-item"><a href="#education" class="nav-link"><i class="fas fa-graduation-cap"></i> Education</a></li>
        <li class="nav-item"><a href="#achievement" class="nav-link"><i class="fas fa-award"></i> Achievements</a></li>
        <li class="nav-item"><a href="#contact" class="nav-link"><i class="fas fa-envelope"></i> Contact</a></li>
        <li class="nav-item"><a href="#resources" class="nav-link"><i class="fas fa-book"></i> Resources</a></li>
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
