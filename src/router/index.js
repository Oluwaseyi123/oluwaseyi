import { createRouter, createWebHashHistory } from "vue-router";
//import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    redirect: {
      name: "Home",
    },
  },
  {
    path: "/home",
    name:"Home",
    component: () => import('../views/Home.vue'),

  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PortfolioPage.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: function(to, ) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth',
      }
    }else{
      return {x: 0, y: 0}
    }
  }
});

export default router;
