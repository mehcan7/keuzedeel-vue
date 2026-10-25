<template>
  <section class="hero">
    <div class="container">
      <p>Quality you can rely on</p>
      <h1>We Turn Your Ideas Into Real Buildings</h1>
      <a href="#" class="button">Our services</a>
      <a href="#" class="button button-dark">About us</a>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroBanner",
};
</script>

<style scoped>
.hero {
  padding: 80px 0;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../assets/hero.jpg");
  background-size: cover;
  background-position: center;
  color: white;
}

p {
  font-weight: bold;
  text-transform: uppercase;
}

h1 {
  max-width: 500px;
  margin: 0 0 30px;
  font-size: 32px;
}

.button {
  margin-right: 10px;
}

@media (min-width: 768px) {
  .hero {
    padding: 140px 0;
  }

  h1 {
    font-size: 48px;
  }
}
</style>
