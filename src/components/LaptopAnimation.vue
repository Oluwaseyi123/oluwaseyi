<template>
  <div class="container">
    <div class="mockup loaded opened">
      <div class="part top">
        <img
          src="https://d1xm195wioio0k.cloudfront.net/images/mockup/macbook-top.svg"
          alt=""
          class="top"
        />
        <img
          src="https://d1xm195wioio0k.cloudfront.net/images/mockup/macbook-cover.svg"
          alt=""
          class="cover"
        />

        <video autoplay loop>
          <source :src="vid" type="video/mp4" />
        </video>
      </div>
      <div class="part bottom">
        <img
          src="https://d1xm195wioio0k.cloudfront.net/images/mockup/macbook-cover.svg"
          alt=""
          class="cover"
        />
        <img
          src="https://d1xm195wioio0k.cloudfront.net/images/mockup/macbook-bottom.svg"
          alt=""
          class="bottom"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["vid"],
};
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
}

.mockup {
  display: inline-block;
  position: relative;
  z-index: 3;
  text-align: center;
  font-size: 0;
  perspective: 2400px;
  perspective-origin: 50% 100%;
  opacity: 0;
  transition: 500ms opacity;
}

.mockup.loaded {
  opacity: 1;
}

.mockup .part .top,
.mockup .part .bottom {
  position: absolute;
  top: 0;
  left: 0;
}

.mockup .part.top {
  // transform: translate3d(0, 0, 0) rotateX(-90deg);
}

// .mockup:hover .part.top {
//   transform: translate3d(0, 0, 0) rotateX(0deg);
// }

.mockup .part {
  display: inline-block;
  position: relative;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  transition: 900ms;
}

.mockup.opened .part .top {
  transform: translate3d(0, 0, -11px) rotateX(90deg) scale(1, 1);
}

.mockup .part .top {
  transform-origin: 50% 0;
  transform: translate3d(0, 0, -11px) rotateX(90deg);
  transition: 900ms;
}

.mockup img {
  display: block;
  max-width: 100%;
  backface-visibility: hidden;
}

.mockup .part .cover {
  position: relative;
}

.mockup video {
  display: block;
  position: absolute;
  top: 8%;
  left: 4%;
  width: 92%;
  height: 90%;
  border-radius: 6px;
  backface-visibility: hidden;
  transform: translate3d(0, 0, 1px);
}

.mockup .part.bottom {
  position: absolute;
  top: 0;
  left: 0;
  transform: translate3d(0, 0, 0) rotateX(-90deg);
}

.mockup .part .bottom {
  transform-origin: 50% 0;
  transform: translate3d(0, 0, 0) rotateX(90deg);
}
@media screen and (min-width: 765px) {
  .container {
    margin-right: 2em;
    margin-left: 2em;
  }
  .mockup .part.top {
    transform: translate3d(0, 0, 0) rotateX(-90deg);
  }

  .mockup:hover .part.top {
    transform: translate3d(0, 0, 0) rotateX(0deg);
  }
}
</style>