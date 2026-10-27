<template>
  <!-- de pagina bestaat uit 4 stukken, van boven naar beneden -->
  <PageHeader />
  <HeroSlider />
  <WhoWeAre />
  <FeaturedProjects />
</template>

<script>
// eerst importeren, dan aanmelden onder components, dan kan je ze in de template gebruiken
import PageHeader from "./components/PageHeader.vue";
import HeroSlider from "./components/HeroSlider.vue";
import WhoWeAre from "./components/WhoWeAre.vue";
import FeaturedProjects from "./components/FeaturedProjects.vue";

export default {
  components: {
    PageHeader,
    HeroSlider,
    WhoWeAre,
    FeaturedProjects,
  },
};
</script>
