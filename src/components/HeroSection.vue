<template>
  <div class="hero">
    <section class="hero-section">
      <p class="hi">Hi, I'm</p>
      <br />
      <p class="name">Oluwaseyi Aimudo</p>
      <br />
      <p class="s">Frontend Engineer</p>
      <br/>
      <p class="desc">
        I create aesthetically pleasing, accessible and functional interfaces.
      </p>
      <div class="btn">
        <app-button class="btn">
          <a href="mailto:oluwaseyi.tac@gmail.com" target="_blank">get in touch</a>
        </app-button>
      </div>
    </section>

    <div class="right-hero">
      <app-socials />
    </div>
  </div>
</template>

<script>
import AppSocials from "./AppSocials.vue";
export default {
  components: { AppSocials },
};
</script>

<style lang="scss" scoped>
.hero {
  display: flex;
  align-items: center;
  padding: 0px 30px;
  max-width: 1200px;
  margin: -3em auto 0;
  height: 100vh;
   font-family: var(--comic-family);
}
.right-hero {
  display: none;
}
.hero-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  > p {
    font-size: 20px;
    text-align: center;
    margin: 0 auto;
    animation: left1 3s forwards 0.5s;
    overflow: hidden;
    opacity: 0;
    color: var(--white-color);
  }

  > p:nth-of-type(2) {
    animation: type 2s steps(60, end) forwards 2s;
    width: 0;
    color: var(--pink-color);
    font-size: 4em;
    font-weight: 800;
    z-index: 1;
  }
  > p:nth-of-type(3) {
    font-weight: 700;
    //line-height: 1.1em;
    color: var(--secondary-white-color);
    animation: fadeIn 2s forwards 3.5s;
  }
  > p:nth-of-type(4) {
    font-weight: 300;
    line-height: 1.1em;
    font-size: 15px;
    color: var(--secondary-white-color);
    animation: fadeIn 2s forwards 4s;
  }
  .btn {
    opacity: 0;
    width: 0;
     z-index: 1;
    animation: left 1s forwards 5s;
    a{
      color: var(--white-color);
      text-decoration: none;
      text-transform: capitalize;
      z-index: inherit;
     
    }
  }
}
@keyframes type {
  0% {
    opacity: 1;
  }
  100% {
    width: 100%;
    opacity: 1;
  }
}
@keyframes left1 {
  0% {
    margin-left: -15em;
    opacity: 1;
  }
  100% {
    margin-left: auto;
    width: 100%;
    opacity: 1;
  }
}
@keyframes left {
  0% {
    margin-left: -15em;
    opacity: 0;
  }
  100% {
    margin-left: auto;
    width: 100%;
    opacity: 1;
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    width: 100%;
    opacity: 1;
  }
}

@media screen and (min-width: 765px) {
  .hero {
     margin: -4em auto 0;
    padding: 0 60px;
  }
  .hero-section {
    > p {
      width: 100%;
      text-align: left;
      animation: fadeIn2 1s forwards 1.5s;
    }
    >p:nth-of-type(2){
       animation: fadeIn2 1s forwards 2.5s;
      width: 100%;
    }
     >p:nth-of-type(3){
       animation-delay: 3s;
    }
  }
  .btn {
    display: flex;
    .button-container {
      position: absolute;
      margin: 1em 0 0;
    }
  }
  .right-hero {
    opacity: 0;
    animation: fadeIn2 1s forwards 6s;
    display: block;
  }
}


@keyframes fadeIn2 {
  0% {
    
    opacity: 0;
  }
  100% {
   
   // width: 100%;
    opacity: 1;
  }
}
</style>