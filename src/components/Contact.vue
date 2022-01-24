<template>
  <div class="contact-container">
    <h1>Get In Touch</h1>
    <p>
      I am always looking for opportunities to build interesting stuff so feel
      free to text me or shoot me an email. I will get back to you as soon as I can.
    </p>
  </div>
  <app-button>
    <a href="mailto:oluwaseyi.tac@gmail.com">Get in Touch</a>
  </app-button>
</template>

<script>
import AppButton from "./component/AppButton.vue";
export default {
  components: { AppButton },
};
</script>

<style lang="scss" scoped>
.contact-container {
  display: flex;
  margin-top: 4em;
  flex-direction: column;
  align-items: center;
  h1,
  p {
    color: var(--white-color);
  }
  h1 {
    margin-bottom: 0.5em;
  }
  p {
    font-family: var(--comic-family);
    font-weight: 300;
    text-align: center;
    width: 85%;
    max-width: 500px;
  }
}
a {
  color: var(--white-color);
  text-decoration: none;
  z-index: 100;
  font-family: var(--comic-family);
}
</style>