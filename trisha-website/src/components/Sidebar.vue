<template>
  <div>
    <!-- Burger Menu Button (Mobile/Tablet Only) -->
    <button 
      class="burger-btn" 
      @click="toggleSidebar"
      :class="{ 'active': isSidebarOpen }"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>

    <!-- Overlay (Mobile/Tablet Only) -->
    <div 
      class="sidebar-overlay" 
      :class="{ 'active': isSidebarOpen }"
      @click="closeSidebar"
    ></div>

    <!-- Sidebar -->
    <div class="sidebar-wrapper" :class="{ 'open': isSidebarOpen }">
      <div class="profile-section text-center w-100 py-4">
        <img src="/images/selfie.jpg" class="profile-pic mb-2" alt="Profile" />
        <h1>TreseMe</h1>

        <ul class="nav flex-column mt-4">
          <li class="nav-item">
            <a href="#home" class="nav-link" @click="handleNavClick">
              <i class="fas fa-home"></i> Home
            </a>
          </li>
          <li class="nav-item">
            <a href="#about" class="nav-link" @click="handleNavClick">
              <i class="fas fa-user"></i> About
            </a>
          </li>
          <li class="nav-item">
            <a href="#education" class="nav-link" @click="handleNavClick">
              <i class="fas fa-graduation-cap"></i> Education
            </a>
          </li>
          <li class="nav-item">
            <a href="#achievement" class="nav-link" @click="handleNavClick">
              <i class="fas fa-award"></i> Achievements
            </a>
          </li>
          <li class="nav-item">
            <a href="#contact" class="nav-link" @click="handleNavClick">
              <i class="fas fa-envelope"></i> Contact
            </a>
          </li>
          <li class="nav-item">
            <a href="#resources" class="nav-link" @click="handleNavClick">
              <i class="fas fa-book"></i> Resources
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      isSidebarOpen: false
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
      if (this.isSidebarOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    },
    closeSidebar() {
      this.isSidebarOpen = false;
      document.body.style.overflow = '';
    },
    handleNavClick() {
      if (window.innerWidth < 768) {
        this.closeSidebar();
      }
    },
    handleScroll() {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      document.querySelectorAll('.nav-link').forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom)
            link.classList.add('active');
          else link.classList.remove('active');
        }
      });
    }
  }
};
</script>