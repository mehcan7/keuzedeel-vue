<template>
  <header>
    <div class="container">
      <div class="row top-row">
        <div class="col-12 col-md-6 col-lg-3">
          <img
            class="logo"
            src="../assets/buildicon-logo.png"
            alt="BuildIcon"
          />
        </div>
        <div class="col-12 col-md-6 col-lg-3 info">
          <p class="small-text">Support and sales</p>
          <p class="big-text">+31 20 123 4567</p>
        </div>
        <div class="col-12 col-md-6 col-lg-3 info">
          <p class="small-text">Opening hours</p>
          <p class="big-text">Mon-Sat: 08:00-18:00</p>
        </div>
        <div class="col-12 col-md-6 col-lg-3 info">
          <a href="#" class="button button-dark">Request a quote</a>
        </div>
      </div>
    </div>

    <nav class="nav-bar">
      <div class="container">
        <button class="menu-button" @click="menuOpen = !menuOpen">Menu</button>
        <ul :class="{ open: menuOpen }">
          <li v-for="link in links" :key="link">
            <a
              href="#"
              :class="{ active: link === activeLink }"
              @click.prevent="chooseLink(link)"
              >{{ link }}</a
            >
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
      activeLink: "Home",
      links: ["Home", "About", "Services", "Projects", "News", "Contact"],
    };
  },
  methods: {
    chooseLink(link) {
      this.activeLink = link;
      this.menuOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.top-row {
  align-items: center;
  padding: 20px 0;
  text-align: center;
}

.logo {
  width: 200px;
  max-width: 100%;
}

.info {
  margin: 10px 0;
}

.small-text {
  margin: 0;
  font-size: 12px;
  text-transform: uppercase;
  color: gray;
}

.big-text {
  margin: 0;
  font-weight: bold;
  color: midnightblue;
}

.nav-bar {
  background-color: orange;
}

.menu-button {
  display: block;
  width: 100%;
  padding: 15px;
  border: none;
  background-color: orange;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
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
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;

  &:hover,
  &.active {
    background-color: midnightblue;
  }
}

@media (min-width: 768px) {
  .menu-button {
    display: none;
  }

  ul {
    display: flex;
  }
}

@media (min-width: 992px) {
  .top-row {
    text-align: left;
  }
}
</style>
