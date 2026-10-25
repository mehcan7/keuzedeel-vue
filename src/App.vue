<template>
  <PageHeader />
</template>

<script>
import PageHeader from "./components/PageHeader.vue";

export default {
  name: "App",
  components: {
    PageHeader,
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
