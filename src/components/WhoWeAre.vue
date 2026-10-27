<template>
  <section>
    <!-- bovenste balk met titel, tekst en knop -->
    <div class="container py-5">
      <div class="row align-items-center">
        <div class="col-lg-4">
          <h2 class="text-warning fw-bold">We Are BuildIcon</h2>
        </div>
        <div class="col-lg-5">
          <p class="fw-bold">
            Great ideas deserve great builders. We have been turning plans into
            award-winning projects for years.
          </p>
        </div>
        <div class="col-lg-3">
          <a href="#" class="btn btn-warning text-white fw-bold text-uppercase">
            Request a quote
          </a>
        </div>
      </div>
    </div>

    <!-- de 3 kaartjes: 1 onder elkaar op mobiel, 2 op tablet, 3 op desktop. g-4 = ruimte ertussen -->
    <div class="bg-light py-5">
      <div class="container">
        <div class="row g-4">
          <!-- v-for maakt een kolom voor elk kaartje uit serviceCards -->
          <div
            v-for="serviceCard in serviceCards"
            :key="serviceCard.title"
            class="col-md-6 col-lg-4"
          >
            <!-- de dubbele punt (:) geeft de waarde van de variabele door aan het kaartje -->
            <ServiceCard
              :title="serviceCard.title"
              :description="serviceCard.description"
              :image="serviceCard.image"
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
  components: {
    ServiceCard,
  },
  data() {
    return {
      serviceCards: [
        {
          title: "Construction",
          description:
            "We handle every kind of building work. Our certified crew delivers on time and to a high standard.",
          image: "/images/service1.jpg",
        },
        {
          title: "About us",
          description:
            "BuildIcon puts the client first. We stick to our deadlines and never cut corners on quality.",
          image: "/images/service2.jpg",
        },
        {
          title: "Teamwork",
          description:
            "Our people work closely together to find the best solution for every project.",
          image: "/images/service3.jpg",
        },
      ],
    };
  },
};
</script>
