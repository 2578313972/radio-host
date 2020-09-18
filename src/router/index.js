import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL
});

router.addRoutes([
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
    children: [
      {
        path: "aa",
        name: "aa",
        component: () => import("@/views/pages/aa/Index.vue")
      },
      {
        path: "bb",
        name: "bb",
        component: () => import("@/views/pages/bb/Index.vue")
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About.vue")
  }
]);

export default router;
