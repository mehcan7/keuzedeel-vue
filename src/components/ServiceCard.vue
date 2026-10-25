<template>
  <div class="card">
    <img :src="image" :alt="title" />
    <div class="card-text">
      <h3>{{ title }}</h3>
      <p>{{ text }}</p>
      <a href="#" class="button">Learn more</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceCard",
  props: {
    title: String,
    text: String,
    image: String,
  },
};
</script>

<style lang="scss" scoped>
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

.card-text {
  padding: 25px;
}

h3 {
  margin: 0 0 15px;
  color: midnightblue;
  text-transform: uppercase;
}

p {
  margin: 0 0 20px;
  line-height: 1.6;
}
</style>
