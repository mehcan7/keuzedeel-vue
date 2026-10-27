<template>
  <!-- de pagina bestaat uit 4 stukken, van boven naar beneden -->
  <PageHeader />
  <HeroBanner />
  <WhoWeAre />
  <FeaturedProjects />
</template>

<script>
// eerst importeren, dan aanmelden onder components, dan kan je ze in de template gebruiken
import PageHeader from "./components/PageHeader.vue";
import HeroBanner from "./components/HeroBanner.vue";
import WhoWeAre from "./components/WhoWeAre.vue";
import FeaturedProjects from "./components/FeaturedProjects.vue";

export default {
  name: "App",
  components: {
    PageHeader,
    HeroBanner,
    WhoWeAre,
    FeaturedProjects,
  },
};
</script>
