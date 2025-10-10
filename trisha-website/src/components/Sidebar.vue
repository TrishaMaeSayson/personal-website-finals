<template>
  <div class="profile-section text-center w-100 py-4">
    <img src="images/selfie.jpg" class="profile-pic mb-2" alt="Profile" />
    <h1>TreseMe</h1>

    <ul class="nav flex-column mt-4">
      <li class="nav-item"><a href="#home" class="nav-link"><i class="fas fa-home"></i> Home</a></li>
      <li class="nav-item"><a href="#about" class="nav-link"><i class="fas fa-user"></i> About</a></li>
      <li class="nav-item"><a href="#education" class="nav-link"><i class="fas fa-graduation-cap"></i> Education</a></li>
      <li class="nav-item"><a href="#achievement" class="nav-link"><i class="fas fa-award"></i> Achievements</a></li>
      <li class="nav-item"><a href="#contact" class="nav-link"><i class="fas fa-envelope"></i> Contact</a></li>
      <li class="nav-item"><a href="#resources" class="nav-link"><i class="fas fa-book"></i> Resources</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>
