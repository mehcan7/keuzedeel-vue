<template>
  <!-- één kaartje (Bootstrap card). title, text en image komen van WhoWeAre (props) -->
  <div class="card h-100">
    <img :src="image" :alt="title" class="card-img-top" />
    <div class="card-body">
      <h3 class="card-title h5 text-uppercase">{{ title }}</h3>
      <p class="card-text">{{ text }}</p>
      <a href="#" class="btn btn-warning text-white fw-bold text-uppercase">
        Learn more
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceCard",
  // props: gegevens die dit component van buiten krijgt
  props: ["title", "text", "image"],
};
</script>

<style scoped>
/* object-fit cover: de foto wordt bijgesneden en niet uitgerekt */
img {
  height: 200px;
  object-fit: cover;
}

h3 {
  color: midnightblue;
}
</style>
