<template>
  <!-- slider van Bootstrap. De pijltjes werken met data-bs-slide -->
  <div id="hero-slider" class="carousel slide">
    <div class="carousel-inner">
      <!-- v-for maakt een slide voor elk item uit slides. Alleen de eerste is active (zichtbaar) -->
      <div
        v-for="(slide, index) in slides"
        :key="slide.title"
        class="carousel-item"
        :class="{ active: index === 0 }"
      >
        <img :src="slide.image" :alt="slide.title" class="d-block w-100" />
        <!-- de tekst staat over de foto heen -->
        <div class="slide-content text-white">
          <div class="container">
            <p class="fw-bold text-uppercase">{{ slide.subtitle }}</p>
            <h1 class="display-4 mb-4">{{ slide.title }}</h1>
            <a
              href="#"
              class="btn btn-warning text-white fw-bold text-uppercase me-2"
            >
              Our services
            </a>
            <a href="#" class="btn btn-dark fw-bold text-uppercase">
              About us
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- de pijltjes: vorige en volgende -->
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#hero-slider"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon"></span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#hero-slider"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon"></span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          subtitle: "Quality you can rely on",
          title: "We Turn Your Ideas Into Real Buildings",
          image: "/images/hero1.jpg",
        },
        {
          subtitle: "Built to last",
          title: "Strong Foundations For Every Project",
          image: "/images/hero2.jpg",
        },
        {
          subtitle: "Your project, our team",
          title: "From First Sketch To Final Key",
          image: "/images/hero3.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* object-fit cover: de foto wordt bijgesneden en niet uitgerekt. brightness: de foto wordt donkerder, zo kan je de witte tekst lezen */
img {
  height: 450px;
  object-fit: cover;
  filter: brightness(50%);
}

/* de tekst staat in het midden van de slide */
.slide-content {
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translateY(-50%);
}

/* ruimte links en rechts, zodat de tekst niet onder de pijltjes staat */
.slide-content .container {
  padding-left: 70px;
  padding-right: 70px;
}

/* de pijltjes als vierkantje, zoals in het ontwerp */
.carousel-control-prev,
.carousel-control-next {
  top: 50%;
  bottom: auto;
  width: 60px;
  height: 60px;
  background-color: midnightblue;
  opacity: 1;
  transform: translateY(-50%);
}
</style>
