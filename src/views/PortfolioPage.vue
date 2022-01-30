<template>
  <the-header />
  <div class="about">
    <div class="portfolio-container">
      <single-portfolio
        v-for="portfolio in portfolios"
        :key="portfolio"
        :portfolio="portfolio"
      />
    </div>
  </div>

  <the-footer />
</template>

<script>
import TheFooter from '../components/component/TheFooter.vue';
import TheHeader from "../components/component/TheHeader.vue";
import SinglePortfolio from "../components/SinglePortfolio.vue";
export default {
  components: {
    TheHeader,
    SinglePortfolio,
    TheFooter,
  },
  data() {
    return {
      portfolios: [
        {
          name: "Bookly",
          desc: " A webapp I built to keep track of every book I read.",
          src: require("../assets/images/portfolio/bookly.png"),
          tech: "HTML | SCSS | VueJs",
          website: "https://bookly-init.netlify.app/",
          github: "https://github.com/Oluwaseyi123/bookly/tree/dev",
        },
        {
          name: "World Countries",
          desc: "A repository of all the countries in the world. Contains basic information about every country in the world.",
          src: require("../assets/images/portfolio/countries.png"),
          tech: "HTML | SCSS | VueJs",
          website: "https://optimistic-yonath-074b89.netlify.app/",
          github: "https://github.com/Oluwaseyi123/countries",
        },
        {
          name: "IP Address Tracker",
          desc: "A webapp that displays the location, timezone and Internet service provider (ISP) of an IP Address. ",
          src: require("../assets/images/portfolio/shortly.svg"),
          tech: "HTML | SCSS | Vanilla Javascript",
          website: "https://ip-address-tracking-web.netlify.app/",
          github: "https://github.com/Oluwaseyi123/IP-Address-Tracker",
        },
         {
          name: "Space Tour",
          desc: "A fun website about space and some info about europa, moon, mars and titan.",
          src: require("../assets/images/portfolio/shortly.svg"),
          tech: "HTML | CSS | VueJS",
          website: "https://lets-tour-space.netlify.app",
          github: "https://github.com/Oluwaseyi123/space-tourism",
          vid: require("../assets/images/portfolio/spacetour.mp4"),
        },
        // {
        //   name: "Sneakers",
        //   desc: "A mini project I built when I was learning how to use Vuex.",
        //   src: require("../assets/images/portfolio/shortly.svg"),
        //   tech: "HTML | SCSS | VueJs | Vuex",
        //   website: "https://seyi-sneakers.netlify.app/#/",
        //   github: "https://github.com/Oluwaseyi123/sneakers",
        // },
        {
          name: "Shortly",
          desc: "A link shortening web app. I built this using the Rebrandly API.",
          src: require("../assets/images/portfolio/shortly.svg"),
          tech: "HTML | CSS | Vanilla Javascript",
          website: "https://seyi-shortly.netlify.app/",
          github: "https://github.com/Oluwaseyi123/shortly",
        },
        {
          name: "Easy Bank",
          desc: " A dummy website about Easy Bank.",
          src: require("../assets/images/portfolio/shortly.svg"),
          tech: "HTML | SCSS | Vanilla Javascript",
          website: "https://easybank-s.netlify.app/",
          github: "https://github.com/Oluwaseyi123/Easy-bank",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.about {
  margin: 3em auto 0; 
  //height: 150vh;
  padding: 0 30px ;
}

@media screen and (min-width: 765px) {
  .about {

     max-width: 1200px;
  }
  .portfolio-container {
    display: grid;
    max-width: 1300px;
    padding-bottom: 5em;
    grid-template-columns: repeat(2, auto);
  }
}
@media screen and (min-width: 1343px) {

  .portfolio-container {
    display: grid;
   // grid-template-columns: repeat(3, auto);
  }
}
</style>