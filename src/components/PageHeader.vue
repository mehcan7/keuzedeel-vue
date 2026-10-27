<template>
  <header>
    <!-- bovenste deel. Bootstrap grid: col-md-6 = 2 kolommen op tablet, col-lg-3 = 4 kolommen op desktop -->
    <div class="container py-3">
      <div class="row align-items-center text-center text-lg-start">
        <div class="col-md-6 col-lg-3 mb-3 mb-lg-0">
          <img class="logo" src="/images/buildicon-logo.png" alt="BuildIcon" />
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

    <!-- menu van Bootstrap. Op mobiel is er een knop (navbar-toggler) die het menu open en dicht klapt -->
    <nav class="navbar navbar-expand-md navbar-dark bg-warning">
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-menu"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="main-menu" class="collapse navbar-collapse">
          <ul class="navbar-nav">
            <!-- v-for maakt een menu-item voor elk woord uit menuItems -->
            <li v-for="menuItem in menuItems" :key="menuItem" class="nav-item">
              <a
                href="#"
                class="nav-link text-white fw-bold text-uppercase px-3"
                :class="{ active: menuItem === 'Home' }"
                >{{ menuItem }}</a
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
  // data() zijn de gegevens van dit component
  data() {
    return {
      menuItems: ["Home", "About", "Services", "Projects", "News", "Contact"],
    };
  },
};
</script>

<!-- scoped: deze stijl geldt alleen voor dit component -->
<style scoped>
.logo {
  width: 200px;
}

strong {
  color: midnightblue;
}

/* witte rand om de menu-knop, zodat je hem ziet op het gele balkje */
.navbar-toggler {
  border-color: white;
}

.nav-link:hover,
.nav-link.active {
  background-color: midnightblue;
}
</style>
