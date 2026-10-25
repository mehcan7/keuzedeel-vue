<template>
  <PageHeader />
  <HeroBanner />
  <WhoWeAre />
  <FeaturedProjects />
</template>

<script>
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

<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  color: dimgray;
}

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

.button-dark {
  background-color: midnightblue;
}
</style>
