import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import ProductsPage from "../views/ProductsPage.vue";
import PaintsPage from "../views/PaintsPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/products",
    name: "Products",
    component: ProductsPage,
  },
  {
    path: "/products/paints",
    name: "Paints",
    component: PaintsPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
