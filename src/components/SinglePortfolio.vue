<template>
  <div class="p-container">
    <div class="container-header">
      <a target="_blank" :href="portfolio.website"
        ><i><font-awesome-icon icon="external-link-alt" /></i
      ></a>
      <a target="_blank" :href="portfolio.github"
          ><i><font-awesome-icon :icon="['fab', 'github']" /></i
        ></a>
    </div>
    <div class="text">
      <h1>{{portfolio.name}}</h1>
      <p>
        {{portfolio.desc}}
      </p>
    </div>
    <div class="stack">
      <p>{{portfolio.tech}}</p>
    </div>
  </div>
</template>

<script>
export default {
    props: ['portfolio']
};
</script>

<style lang="scss" scoped>
.p-container {
  position: relative;
  display: flex;
  opacity: 0;
  flex-direction: column;
  padding: 25px 20px;
  margin-top: 2em;
 
  animation: fadeIn2 1s forwards 1.3s;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
 
  background: var(--background-color);
  border-radius: 5px;
  transition: all 0.2s ease;
 &:nth-of-type(2){
   animation-delay: 1.5s;
 }
  &:nth-of-type(3){
   animation-delay: 2s;
 }
  &:nth-of-type(4){
   animation-delay: 2.5s;
 }
  &:nth-of-type(5){
   animation-delay: 3s;
 }
  &:nth-of-type(6){
   animation-delay: 3.5s;
 }
  &:nth-of-type(7){
   animation-delay: 4s;
 }
  &:hover {
    transform: translate(0px, -5px);
  }
  h1 {
    color: var(--white-color);
  }
}
.container-header {
  display: flex;
  justify-content: flex-end;
  // align-items: flex-end;
  a {
    align-items: flex-end;
    color: var(--white-color);
    margin-right: 10px;
    transition: all .2s ease;
    &:hover{
      color: var(--pink-color);
    }
  }
}
.text {
  p {
    color: var(--white-color);
    margin-bottom: 0.5em;
    font-size: 15px;
  }
}
.stack {
  p {
    color: var(--white-color);
  }
}
@media screen and (min-width: 765px) {
  .p-container {
    margin-right: 1em;
  }
}


@keyframes fadeIn2 {
  0% {
    bottom: -2em;
    opacity: 0;
  }
  100% {
    bottom: 0em;
    opacity: 1;
  }
}
</style>