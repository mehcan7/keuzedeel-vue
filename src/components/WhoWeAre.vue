<template>
  <section>
    <div class="container intro">
      <div class="row">
        <div class="col-12 col-lg-4">
          <h2>We Are BuildIcon</h2>
        </div>
        <div class="col-12 col-lg-5">
          <p>
            Great ideas deserve great builders. We have been turning plans into
            award-winning projects for years.
          </p>
        </div>
        <div class="col-12 col-lg-3">
          <a href="#" class="button">Request a quote</a>
        </div>
      </div>
    </div>

    <div class="cards">
      <div class="container">
        <div class="row">
          <div
            v-for="card in cards"
            :key="card.title"
            class="col-12 col-md-6 col-lg-4"
          >
            <ServiceCard
              :title="card.title"
              :text="card.text"
              :image="card.image"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ServiceCard from "./ServiceCard.vue";

export default {
  name: "WhoWeAre",
  components: {
    ServiceCard,
  },
  data() {
    return {
      cards: [
        {
          title: "Construction",
          text: "We handle every kind of building work. Our certified crew delivers on time and to a high standard.",
          image: require("../assets/service1.jpg"),
        },
        {
          title: "About us",
          text: "BuildIcon puts the client first. We stick to our deadlines and never cut corners on quality.",
          image: require("../assets/service2.jpg"),
        },
        {
          title: "Teamwork",
          text: "Our people work closely together to find the best solution for every project.",
          image: require("../assets/service3.jpg"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.intro {
  padding-top: 40px;
  padding-bottom: 40px;
}

h2 {
  margin: 0 0 10px;
  color: orange;
  font-size: 32px;
}

p {
  margin: 0 0 20px;
  font-weight: bold;
  line-height: 1.6;
}

.cards {
  padding: 50px 0 20px;
  background-color: whitesmoke;
}
</style>
