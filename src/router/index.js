import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/public/Home.vue";
import Club from "@/views/public/Club.vue";
import Teams from "@/views/public/Teams.vue";
import Competitions from "@/views/public/Competitions.vue";
import UsefulLinks from "@/views/public/UsefulLinks.vue";
import Contact from "@/views/public/Contact.vue";
import NotFound from "@/views/public/NotFound.vue";

import PublicLayout from "@/views/public/Layout.vue";


import AdminLayout from "@/views/admin/Layout.vue";
import Dashboard from "@/views/admin/Dashboard.vue";

const routes = [
  {
    path: "/",
    name: "public",
    component: PublicLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },

      {
        path: "/club",
        name: "club",
        component: Club,
      },

      {
        path: "/équipes",
        name: "teams",
        component: Teams,
      },

      {
        path: "/compétitions",
        name: "competitions",
        component: Competitions,
      },

      {
        path: "/liens-utiles",
        name: "usefulLinks",
        component: UsefulLinks,
      },
      {
        path: "/nous-contacter",
        name: "contact",
        component: Contact,
      },
    ],
  },

  {
    path:'/admin',
    name:'admin',
    component: AdminLayout,
    children: [
     { path:'dashboard', name: 'dashboard', Component: Dashboard}
    ]
  },

  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
