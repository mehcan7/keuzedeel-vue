<template>
  <!-- Bootstrap slider (carousel). De pijltjes werken door data-bs-slide -->
  <div id="heroSlider" class="carousel slide">
    <div class="carousel-inner">
      <!-- v-for maakt een slide voor elke foto uit slides. Alleen de eerste krijgt "active" -->
      <div
        v-for="(slide, index) in slides"
        :key="slide.title"
        class="carousel-item"
        :class="{ active: index === 0 }"
      >
        <img :src="slide.image" :alt="slide.title" class="d-block w-100" />
        <!-- de tekst ligt over de foto heen -->
        <div class="slide-text text-white">
          <div class="container">
            <p class="fw-bold text-uppercase">{{ slide.label }}</p>
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

    <!-- de pijltjes: terug en verder -->
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#heroSlider"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#heroSlider"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "HeroBanner",
  data() {
    return {
      slides: [
        {
          label: "Quality you can rely on",
          title: "We Turn Your Ideas Into Real Buildings",
          image: require("../assets/hero.jpg"),
        },
        {
          label: "Built to last",
          title: "Strong Foundations For Every Project",
          image: require("../assets/hero2.jpg"),
        },
        {
          label: "Your project, our team",
          title: "From First Sketch To Final Key",
          image: require("../assets/hero3.jpg"),
        },
      ],
    };
  },
};
</script>

<style scoped>
/* cover: de foto vult het hele vak. brightness: de foto wordt donkerder, zo blijft de witte tekst leesbaar */
img {
  height: 450px;
  object-fit: cover;
  filter: brightness(50%);
}

/* de tekst staat in het midden van de slide */
.slide-text {
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translateY(-50%);
}

/* ruimte links en rechts, zodat de tekst niet onder de pijltjes staat */
.slide-text .container {
  padding-left: 70px;
  padding-right: 70px;
}

h1 {
  max-width: 600px;
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
