<template>
  <div class="card">
    <img :src="image" :alt="title" />
    <div class="text">
      <h3>{{ title }}</h3>
      <p>{{ text }}</p>
      <a href="#" class="button">Learn more</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceCard",
  props: ["title", "text", "image"],
};
</script>

<style scoped>
.card {
  margin-bottom: 30px;
  background-color: white;
}

img {
  display: block;
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.text {
  padding: 25px;
}

h3 {
  color: midnightblue;
  text-transform: uppercase;
}
</style>
