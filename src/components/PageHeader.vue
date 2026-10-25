<template>
  <header>
    <!-- bovenste deel: 4 kolommen naast elkaar op desktop, 2 op tablet -->
    <div class="container">
      <div class="row top">
        <div class="col-md-6 col-lg-3">
          <img src="../assets/buildicon-logo.png" alt="BuildIcon" />
        </div>
        <div class="col-md-6 col-lg-3">
          <small>Support and sales</small>
          <strong>+31 20 123 4567</strong>
        </div>
        <div class="col-md-6 col-lg-3">
          <small>Opening hours</small>
          <strong>Mon-Sat: 08:00-18:00</strong>
        </div>
        <div class="col-md-6 col-lg-3">
          <a href="#" class="button button-dark">Request a quote</a>
        </div>
      </div>
    </div>

    <nav>
      <div class="container">
        <!-- de menu-knop zie je alleen op mobiel, klik zet menuOpen aan of uit -->
        <button @click="menuOpen = !menuOpen">Menu</button>
        <!-- class open staat er alleen als menuOpen true is -->
        <ul :class="{ open: menuOpen }">
          <!-- v-for maakt voor elk woord uit links een li -->
          <li v-for="link in links" :key="link">
            <a href="#" :class="{ active: link === 'Home' }">{{ link }}</a>
          </li>
        </ul>
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
      menuOpen: false,
      links: ["Home", "About", "Services", "Projects", "News", "Contact"],
    };
  },
};
</script>

<!-- scoped: deze stijl geldt alleen voor dit component -->
<style scoped>
.top {
  align-items: center;
  padding: 20px 0;
  text-align: center;
}

img {
  width: 200px;
  max-width: 100%;
}

/* display block zet small en strong onder elkaar */
small {
  display: block;
  font-size: 12px;
  text-transform: uppercase;
}

strong {
  display: block;
  color: midnightblue;
}

nav {
  background-color: orange;
}

button {
  width: 100%;
  padding: 15px;
  border: none;
  background-color: orange;
  color: white;
  font-size: 16px;
  font-weight: bold;
}

/* op mobiel is het menu eerst verborgen */
ul {
  display: none;
  margin: 0;
  padding: 0;
  list-style: none;
}

ul.open {
  display: block;
}

li a {
  display: block;
  padding: 15px 20px;
  color: white;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
}

li a:hover,
li a.active {
  background-color: midnightblue;
}

/* tablet en groter: knop weg, menu altijd naast elkaar */
@media (min-width: 768px) {
  button {
    display: none;
  }

  ul {
    display: flex;
  }
}

@media (min-width: 992px) {
  .top {
    text-align: left;
  }
}
</style>
