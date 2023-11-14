import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BoardDetailView from "../views/BoardDetailView.vue";
import PlanListView from "../views/PlanListView.vue";
import PlanDetailView from "../views/PlanDetailView.vue";
import PlanAddView from "../views/PlanAddView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/boarddetail/:no",
      name: "boarddetail",
      component: BoardDetailView,
    },
    // 여기부터 관통프로젝트
    {
      path: "/planlist",
      name: "planlist",
      component: PlanListView,
    },
    {
      path: "/plandetail/:id",
      name: "plandetail",
      component: PlanDetailView,
    },{
      path: "/addplan",
      name: "addplan",
      component: PlanAddView,
    },
  ],
});

export default router;