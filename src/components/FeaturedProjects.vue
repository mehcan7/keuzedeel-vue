<template>
  <section class="projects">
    <div class="container">
      <h2>Featured Projects</h2>

      <div class="filters">
        <button class="active">All</button>
        <button>Building</button>
        <button>Consulting</button>
        <button>Interior</button>
        <button>Office</button>
      </div>

      <div class="row project-grid">
        <div
          v-for="project in projects"
          :key="project.title"
          class="col-12 col-md-6 col-lg-4"
        >
          <div class="project">
            <img :src="project.image" :alt="project.title" />
            <div class="overlay">
              <h3>{{ project.title }}</h3>
              <p>{{ project.text }}</p>
              <a href="#">Learn more</a>
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

<style lang="scss" scoped>
.projects {
  padding: 50px 0;
}

h2 {
  margin: 0 0 20px;
  color: midnightblue;
  text-align: center;
  text-transform: uppercase;
}

.filters {
  margin-bottom: 30px;
  text-align: center;

  button {
    padding: 8px 15px;
    border: none;
    background-color: white;
    color: gray;
    font-size: 13px;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;

    &:hover,
    &.active {
      color: orange;
    }
  }
}

.project-grid {
  margin: 0;

  > div {
    padding: 0;
  }
}

.project {
  position: relative;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: 280px;
    object-fit: cover;
  }
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 25px;
  background-color: midnightblue;
  color: white;
  opacity: 0;
  transition: opacity 0.3s;

  h3 {
    margin: 0 0 10px;
  }

  p {
    margin: 0 0 15px;
    line-height: 1.5;
  }

  a {
    color: orange;
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
  }
}

.project:hover .overlay {
  opacity: 0.9;
}
</style>
