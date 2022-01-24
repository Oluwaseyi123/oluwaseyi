<template>
  <div class="portfolios-container">
    <h1>Featured Projects</h1>
    <div class="portfolios">
      <the-portfolio
        v-for="portfolio in portfolios"
        :key="portfolio"
        :portfolio="portfolio"
      />
    </div>
    <app-button class="btn">
      <router-link to="/portfolio">View More</router-link>
    </app-button>
  </div>
</template>

<script>
import ThePortfolio from "./ThePortfolio.vue";
export default {
  components: { ThePortfolio },

  data() {
    return {
      portfolios: [
        {
          name: "Bookly",
          desc: "A webapp I built to keep track of every book I read. ",
          src: require("../assets/images/portfolio/bookly.png"),
          tech: "HTML | SCSS | VueJs",
          website: "https://bookly-init.netlify.app/",
          github: "https://github.com/Oluwaseyi123/bookly/tree/dev",
          vid: require("../assets/images/portfolio/bookly.mp4"),
        },
        {
          name: "World Countries",
          desc: "A repository of all the countries in the world. Contains basic information about every country in the world",
          src: require("../assets/images/portfolio/countries.png"),
          tech: "HTML | SCSS | VueJs",
          website: "https://optimistic-yonath-074b89.netlify.app/",
          github: "https://github.com/Oluwaseyi123/countries",
          vid: require("../assets/images/portfolio/countriess.mp4"),
        },
        {
          name: "Shortly",
          desc: "A link shortening web app. I built this using the Rebrandly API.",
          src: require("../assets/images/portfolio/shortly.svg"),
          tech: "HTML | CSS | Vanilla Javascript",
          website: "https://seyi-shortly.netlify.app/",
          github: "https://github.com/Oluwaseyi123/shortly",
          vid: require("../assets/images/portfolio/shortly.mp4"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: var(--white-color);
}
h1 {
  text-align: center;
  color: var(--white-color);
  margin-bottom: 2em;
}
.portfolios-container {
  content-visibility: auto;
}

.btn {
  a {
    font-family: var(--comic-family);

    z-index: 100;
  }
}

@media screen and (min-width: 765px) {
  .portfolios-container {
    margin: 0 auto;
    max-width: 1200px;
    padding: 0px 30px;
  }
}
</style>