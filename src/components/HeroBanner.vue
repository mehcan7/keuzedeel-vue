<template>
  <section class="hero text-white">
    <div class="container">
      <p class="fw-bold text-uppercase">Quality you can rely on</p>
      <h1 class="display-4 mb-4">We Turn Your Ideas Into Real Buildings</h1>
      <a
        href="#"
        class="btn btn-warning text-white fw-bold text-uppercase me-2"
      >
        Our services
      </a>
      <a href="#" class="btn btn-dark fw-bold text-uppercase">About us</a>
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
  /* eerst een zwarte laag (50% doorzichtig), daaronder de foto. Zo blijft de witte tekst leesbaar */
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../assets/hero.jpg");
  /* cover: de foto vult het hele vak */
  background-size: cover;
  background-position: center;
}

h1 {
  max-width: 600px;
}

/* op tablet en groter meer ruimte */
@media (min-width: 768px) {
  .hero {
    padding: 140px 0;
  }
}
</style>
