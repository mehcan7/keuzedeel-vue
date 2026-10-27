<template>
  <section class="py-5">
    <div class="container">
      <h2 class="text-center text-uppercase fw-bold mb-3">Featured Projects</h2>

      <!-- de knoppen doen niks, alle projecten blijven zichtbaar -->
      <div class="text-center mb-4">
        <button
          v-for="filter in filters"
          :key="filter"
          class="btn btn-link fw-bold text-uppercase text-decoration-none"
          :class="filter === 'All' ? 'text-warning' : 'text-secondary'"
        >
          {{ filter }}
        </button>
      </div>

      <!-- g-0 = geen ruimte tussen de plaatjes -->
      <div class="row g-0">
        <!-- v-for maakt een vakje voor elk project uit projects -->
        <div
          v-for="project in projects"
          :key="project.title"
          class="col-md-6 col-lg-4"
        >
          <div class="project position-relative">
            <img :src="project.image" :alt="project.title" class="w-100" />
            <!-- deze laag is onzichtbaar en komt tevoorschijn als je er met de muis op staat -->
            <div
              class="overlay position-absolute top-0 start-0 w-100 h-100 p-4 bg-dark text-white"
            >
              <h3 class="h5">{{ project.title }}</h3>
              <p>{{ project.text }}</p>
              <a
                href="#"
                class="text-warning fw-bold text-uppercase text-decoration-none"
                >Learn more</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FeaturedProjects",
  data() {
    return {
      filters: ["All", "Building", "Consulting", "Interior", "Office"],
      projects: [
        {
          title: "Lakeside Villa",
          text: "A modern family home with a pool and lots of open space.",
          image: require("../assets/project1.jpg"),
        },
        {
          title: "Riverside Office Park",
          text: "Bright office units for growing companies, close to the river.",
          image: require("../assets/project2.jpg"),
        },
        {
          title: "Harbour Apartments",
          text: "Forty apartments with a view over the harbour.",
          image: require("../assets/project3.jpg"),
        },
        {
          title: "City Planning Advice",
          text: "We helped the council plan a new neighbourhood from scratch.",
          image: require("../assets/project4.jpg"),
        },
        {
          title: "Kitchen Renovation",
          text: "An old kitchen turned into a warm and modern living space.",
          image: require("../assets/project5.jpg"),
        },
        {
          title: "Hillside House",
          text: "A quiet house built into the hill with a green roof.",
          image: require("../assets/project6.jpg"),
        },
      ],
    };
  },
};
</script>

<style scoped>
img {
  display: block;
  height: 280px;
  object-fit: cover;
}

/* de overlay ligt precies over het plaatje heen, opacity 0 = onzichtbaar */
.overlay {
  opacity: 0;
  transition: opacity 0.3s;
}

/* hover-effect: muis op het project, dan wordt de overlay zichtbaar */
.project:hover .overlay {
  opacity: 0.9;
}
</style>
