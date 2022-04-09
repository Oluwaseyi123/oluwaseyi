<template>
  <div class="about-container">
    <h1>About Me</h1>
    <div class="container">
      <div class="image-container">
        <img src="../assets/images/seyi.png" alt="" />
      </div>
      <div class="about-text">
        <p>
          Hi, I am Aimudo Oluwaseyi, a Software engineer aimed at building
          performant, accessible and aesthetically pleasing interfaces. I have
          experience building small, medium and large scale interfaces. I am
          also well versed in web design, web content management and Search
          Engine Optimization(SEO). You can find some of my personal projects
          <router-link to="/portfolio">here</router-link>. Here are some of the
          technologies I use currently:
        </p>
        <div class="stack">
          <ul>
            <div class="left">
              <li>HTML & (S)CSS</li>
              <li>Javascript</li>
              <li>TailwindCSS</li>
            </div>
            <div class="right">
              <li>VueJS</li>
              <li>Figma</li>
              <li>NodeJs</li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.about-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 4em auto 0;
  max-width: 1200px;
  h1 {
    color: var(--white-color);
    margin-bottom: 1em;
  }
}
.image-container {
  position: relative;
  margin-bottom: 2em;
  &:after {
    content: " ";
    position: absolute;
    width: 200px;
    height: 210px;
    left: -1em;
    top: 0.5em;
    border: 1px solid var(--white-color);
  }
  img {
    z-index: 10;
    width: 200px;
    border: 1px solid var(--white-color);
  }
}
.container {
  font-family: var(--comic-family);
  font-weight: 300;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.about-text {
  p {
    width: 85%;
    // max-width: 500px;
    text-align: center;
    color: var(--secondary-white-color);
    font-weight: 300;
    margin: 0 auto 1em;
    a {
      color: var(--pink-color);
    }
  }
}
.stack {
  color: var(--secondary-white-color);
  ul {
    display: flex;
    justify-content: space-between;
    width: 350px;
    margin: 0 auto;
    font-weight: 300;
    li {
      list-style: none;
      margin-bottom: 0.5em;
      position: relative;
      &:before {
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
        left: -1em;
        border-left: 10px solid var(--pink-color);
      }
    }
  }
}

@media screen and (min-width: 765px) {
  .container {
    padding: 0 70px 0 100px;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .about-text {
    p {
      margin-left: 3em;
      width: 100%;
      text-align: left;
    }
  }
  .stack {
    ul {
      margin-left: 4em;
    }
  }
}
</style>