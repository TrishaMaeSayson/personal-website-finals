<template>
  <section id="home" class="content-section active">
    <div class="home-text text-start">
      <h2>Hi, I'm <span class="highlight-name">Trish</span></h2>
      <p id="typing-text">
        The only 3 things that you can control are your <br />
        <span id="thoughts" class="word-thoughts"></span>
        <span id="feelings" class="word-feelings"></span>
        <span id="actions" class="word-actions"></span>
      </p>
    </div>
    <div class="photo-frame">
      <div class="photo-background">
        <div class="rect rect1"></div>
        <div class="rect rect2"></div>
        <div class="rect rect3"></div>
      </div>
      <img src="images/selfie.jpg" class="profile-pic" alt="Profile" />
    </div>
  </section>
</template>

<script>
export default { name: "Home" };
</script>
