<template>
  <section class="py-5">
    <div class="container">
      <h2 class="text-center text-uppercase fw-bold mb-3">Featured Projects</h2>

      <!-- de knoppen doen niks, alle projecten blijven zichtbaar -->
      <div class="text-center mb-4">
        <button
          v-for="category in categories"
          :key="category"
          class="btn btn-link fw-bold text-uppercase text-decoration-none"
          :class="category === 'All' ? 'text-warning' : 'text-secondary'"
        >
          {{ category }}
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
          <div class="project-box">
            <img :src="project.image" :alt="project.title" />
            <!-- deze laag is onzichtbaar en komt tevoorschijn als je er met de muis op staat -->
            <div class="hover-info">
              <h3 class="h5">{{ project.title }}</h3>
              <p>{{ project.description }}</p>
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
  data() {
    return {
      categories: ["All", "Building", "Consulting", "Interior", "Office"],
      projects: [
        {
          title: "Lakeside Villa",
          description:
            "A modern family home with a pool and lots of open space.",
          image: "/images/project1.jpg",
        },
        {
          title: "Riverside Office Park",
          description:
            "Bright office units for growing companies, close to the river.",
          image: "/images/project2.jpg",
        },
        {
          title: "Harbour Apartments",
          description: "Forty apartments with a view over the harbour.",
          image: "/images/project3.jpg",
        },
        {
          title: "City Planning Advice",
          description:
            "We helped the council plan a new neighbourhood from scratch.",
          image: "/images/project4.jpg",
        },
        {
          title: "Kitchen Renovation",
          description:
            "An old kitchen turned into a warm and modern living space.",
          image: "/images/project5.jpg",
        },
        {
          title: "Hillside House",
          description: "A quiet house built into the hill with a green roof.",
          image: "/images/project6.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* relative: de laag met de tekst (absolute) blijft binnen dit vak */
.project-box {
  position: relative;
}

img {
  display: block;
  width: 100%;
  height: 280px;
  object-fit: cover;
}

/* de laag ligt precies over het plaatje heen. opacity 0 = onzichtbaar */
.hover-info {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 25px;
  background-color: midnightblue;
  color: white;
  opacity: 0;
  transition: opacity 0.3s;
}

/* hover-effect: muis op het project, dan wordt de laag zichtbaar */
.project-box:hover .hover-info {
  opacity: 0.9;
}
</style>
