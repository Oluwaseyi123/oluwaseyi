<template>
  <div class="mobile-nav">
    <router-link to="/">
      <img src="@/assets/images/logo.svg" alt="" />
    </router-link>
    <div class="try">
     
      <nav>
        <ul >
          <li>
            <router-link to="/portfolio">Projects</router-link>
            <a href="https://oluwaseyi.hashnode.dev/" target="_blank">Blog(coming soon) </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isClicked: false,
    };
  },
  methods: {
    animateNav() {
      this.isClicked = !this.isClicked;
      console.log(this.isClicked);
    },
  },
};
</script>

<style lang="scss" scoped>
$light-color: #fbfbfd;
$blue-color: #e8f0fb;
$deep-blue-color: #bcd5f5;
nav {
  z-index: 99;
}
.bars {
  cursor: pointer;
  .bar {
    width: 20px;
    height: 1px;
    background: var(--white-color);
    transition: all 0.2s ease;
  }
  .bar:nth-of-type(1) {
    margin-bottom: 5px;
  }
}
.mobile-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    img {
      width: 20px;
    }
  }
}
.animate {
  .one {
    transform: rotate(45deg);
  }
  .two {
    transform: rotate(-45deg) translate(4px, -5px);
  }
}

ul {
  list-style: none;
  transition: all 0.2s ease;
  li {
    a {
      text-decoration: none;
      color: $light-color;
      transition: all 0.3s ease;
      font-size: 14px;
      &:nth-of-type(1){
        margin-right: 10px;
      }
      &.router-link-exact-active {
        color: var(--pink-color);
      }
    }
    a:hover {
      color: $deep-blue-color;
      text-decoration: underline;
    }
  }
}

@keyframes slideIn {
  from {
    left: -10em;
  }
  to {
    left: 0;
  }
}

@keyframes slideOut {
  from {
    left: 0;
  }
  to {
    left: -10em;
  }
}
@media screen and (min-width: 765px) {
  nav {
    ul {
      display: block;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      width: 100%;
      li {
        a {
          color: var(--white-color);
          font-size: 14px;
          margin-right: 20px;
          &:hover {
            color: var(--pink-color);
          }
        }
      }
    }
  }
  .bars {
    display: none;
  }
}
</style>