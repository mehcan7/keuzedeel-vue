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

<!-- deze stijl geldt voor de hele site (niet scoped) -->
<style>
/* padding en border tellen mee in de breedte, dat rekent makkelijker */
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  color: dimgray;
}

/* de oranje knop, gebruikt in de header, hero en kaartjes */
.button {
  display: inline-block;
  padding: 12px 25px;
  background-color: orange;
  color: white;
  font-size: 13px;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
}

/* zet je erbij als je de knop donker wilt: class="button button-dark" */
.button-dark {
  background-color: midnightblue;
}
</style>
