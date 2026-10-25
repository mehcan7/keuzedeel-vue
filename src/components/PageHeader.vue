<template>
  <header>
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
        <button @click="menuOpen = !menuOpen">Menu</button>
        <ul :class="{ open: menuOpen }">
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
  data() {
    return {
      menuOpen: false,
      links: ["Home", "About", "Services", "Projects", "News", "Contact"],
    };
  },
};
</script>

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
