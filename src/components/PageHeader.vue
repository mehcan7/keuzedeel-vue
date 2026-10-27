<template>
  <header>
    <!-- bovenste deel. Bootstrap grid: 2 kolommen op tablet (col-md-6), 4 op desktop (col-lg-3) -->
    <div class="container py-3">
      <div class="row align-items-center text-center text-lg-start">
        <div class="col-md-6 col-lg-3 mb-3 mb-lg-0">
          <img src="../assets/buildicon-logo.png" alt="BuildIcon" />
        </div>
        <div class="col-md-6 col-lg-3 mb-3 mb-lg-0">
          <small class="d-block text-uppercase text-secondary">
            Support and sales
          </small>
          <strong>+31 20 123 4567</strong>
        </div>
        <div class="col-md-6 col-lg-3 mb-3 mb-lg-0">
          <small class="d-block text-uppercase text-secondary">
            Opening hours
          </small>
          <strong>Mon-Sat: 08:00-18:00</strong>
        </div>
        <div class="col-md-6 col-lg-3">
          <a href="#" class="btn btn-dark fw-bold text-uppercase">
            Request a quote
          </a>
        </div>
      </div>
    </div>

    <!-- Bootstrap menu: op mobiel een knop (navbar-toggler) die het menu laat openklappen -->
    <nav class="navbar navbar-expand-md navbar-dark bg-warning">
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="menu" class="collapse navbar-collapse">
          <ul class="navbar-nav">
            <!-- v-for maakt voor elk woord uit links een menu-item -->
            <li v-for="link in links" :key="link" class="nav-item">
              <a
                href="#"
                class="nav-link text-white fw-bold text-uppercase px-3"
                :class="{ active: link === 'Home' }"
                >{{ link }}</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "PageHeader",
  // data() zijn de gegevens van dit component
  data() {
    return {
      links: ["Home", "About", "Services", "Projects", "News", "Contact"],
    };
  },
};
</script>

<!-- scoped: deze stijl geldt alleen voor dit component -->
<style scoped>
img {
  width: 200px;
  max-width: 100%;
}

strong {
  color: midnightblue;
}

.nav-link:hover,
.nav-link.active {
  background-color: midnightblue;
}
</style>
