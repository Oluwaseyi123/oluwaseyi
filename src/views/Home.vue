<template>
  <div class="home">
    <the-header />
    <div class="section">
      <section class="hero-section" >
        <hero-section />
      </section>
      <router-view></router-view>
      <section class="portfolio-section intersect">
        <Intersect @enter="inters(true)" @leave="inters(false)">
          <the-portfolios />
        </Intersect>
      </section>
      <section class="about-section intersect" id="about">
          <Intersect @enter="inters(true)" @Leave="inters(false)">
          <about-section />
        </Intersect>
      </section>
      <section class="contact-section intersect">
        <contact />
      </section>
    </div>
  </div>

  <the-footer />
</template>

<script>
import AboutSection from "../components/AboutSection.vue";
import TheHeader from "../components/component/TheHeader.vue";
import Contact from "../components/Contact.vue";
import HeroSection from "../components/HeroSection.vue";
import ThePortfolios from "../components/ThePortfolios.vue";
import Intersect from "vue-intersect";
import TheFooter from '../components/component/TheFooter.vue';


export default {
  name: "Home",
  data() {
    return {
      observer: null,
    };
  },
  methods: {
    inters(enter){
      if(enter){
        console.log('entered')
      }else{
        console.log('left')
      }
    }
  },
  components: {
    TheHeader,
    HeroSection,
    ThePortfolios,
    AboutSection,
    Contact,
    Intersect,
    TheFooter,
  },
};
</script>

<style lang="scss" scoped>
.home{
   scroll-behavior: smooth;
}
.section {
  display: flex;
  flex-direction: column;
}
</style>
