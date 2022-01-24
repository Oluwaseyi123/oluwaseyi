<template>
  <header>
    <nav-links />
  </header>
</template>

<script>
import NavLinks from './NavLinks.vue'
export default {
  components: {
    NavLinks
  }
}
</script>

<style lang="scss" scoped>
  header{
    padding: 30px 30px 0;
     animation: fadeIn 2.5s forwards ;
     opacity: 0;
     max-width: 1400px;
     margin: 0 auto;
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
    header{
      padding: 40px 70px 0px;
    }
  }
</style>