<template>
  <div class="portfolio-container">
    <div class="text-container">
      <h1>{{ portfolio.name }}</h1>
      <p>
        {{ portfolio.desc }}
      </p>
      <h5>{{ portfolio.tech }}</h5>
      <div class="icons">
        <a target="_blank" :href="portfolio.github"
          ><i><font-awesome-icon :icon="['fab', 'github']" /></i
        ></a>
        <a target="_blank" :href="portfolio.website"
          ><i><font-awesome-icon icon="external-link-alt" /></i
        ></a>
      </div>
    </div>
    <div class="laptop">
      <laptop-animation :vid="portfolio.vid" />
    </div>
    <!-- <img :src="portfolio.src" alt="" /> -->
  </div>
  <hr class="hr" />
</template>

<script>
import LaptopAnimation from "./LaptopAnimation.vue";
export default {
  props: ["portfolio"],
  components: {
    LaptopAnimation,
  },
};
</script>

<style lang="scss" scoped>
hr.hr {
  border-top: 0.2px solid var(--pink-color);
  border-bottom: none;
  margin-bottom: 1.5em;
}
.portfolio-container {
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3em;
  img {
    display: block;
    margin: 0 auto;
    width: 300px;
    height: 150px;
    // object-fit: fill;
  }
}
.text-container {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 1em 0 0.5em;
  padding: 0px 30px;
  h1 {
    color: var(--white-color);
    margin-bottom: 0.2em;
  }
  p {
     font-family: var(--comic-family);
    font-weight: 300;
    text-align: center;
    color: var(--secondary-white-color);
    // width: 85%;
    font-size: 15px;
    max-width: 400px;
  }
  h5 {
    margin-top: 0.5em;
    color: var(--white-color);
  }
}
.icons {
  margin-top: 10px;
  a {
    margin-right: 15px;
    i {
      color: var(--white-color);
      transition: all 0.2s ease-in;
      &:hover {
        color: var(--pink-color);
      }
    }
  }
}
.laptop {
  width: 60%;
  max-width: 500px;
}
@media screen and (max-width: 765px) {
  .laptop {
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
  }
}
@media screen and (min-width: 765px) {
  .icons {
    &:nth-of-type(2),  &:nth-of-type(4){
      justify-content: flex-end;
      background: red;
    }
  }
  .portfolio-container {
    padding: 10px;
    display: flex;
    &:nth-of-type(2),  &:nth-of-type(4) {
      flex-direction: row-reverse;
      p,
      h1,
      h5 {
        text-align: right;
      }
      .icons {
        display: flex;
        justify-content: flex-end;
      }
    }
    img {
      width: 400px;
    }
  }
  .text-container {
    display: flex;
    align-items: normal;
    p,
    h1,
    h5 {
      text-align: left;
    }
    h5 {
      margin-bottom: 0.5em;
    }
  }
  .laptop {
    position: initial;
  }
}
</style>