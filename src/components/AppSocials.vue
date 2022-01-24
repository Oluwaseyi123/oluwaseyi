<template>
  <div class="main-container">
    <div class="socials-line"></div>
    <div class="socials">
      <a href="https://github.com/Oluwaseyi123/" target="_blank"
        ><i><font-awesome-icon :icon="['fab', 'github']" /></i
      ></a> 
      <a href="https://twitter.com/seyijenkinss" target="_blank"
        ><i><font-awesome-icon :icon="['fab', 'twitter']" /></i
      ></a>
      <a href="https://www.linkedin.com/in/oluwaseyi-aimudo/" target="_blank"
        ><i><font-awesome-icon :icon="['fab', 'linkedin-in']" /></i
      ></a>
      <a href="mailto:oluwaseyi.tac@gmail.com" target="_blank"
        ><i><font-awesome-icon icon="envelope" /></i
      ></a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main-container {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
}
.socials-line {
  width: 1px;
  height: 15em;
  background: var(--white-color);
}
.socials {
  margin-right: 0.8em;
  display: flex;
  flex-direction: column;
  a {
    margin-bottom: 1em;
  }
  i {
    color: white;
    transition: all .5s ease;
    &:hover{
        color: var(--pink-color);
    }
  }
}
</style>