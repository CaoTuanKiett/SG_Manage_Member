import { createRouter, createWebHistory } from "vue-router";
import Cookies from "js-cookie";

const requireAuth = (to, from, next) => {
  if (Cookies.get('auth_token')) {
    // If the user is authenticated, allow them to access the route
    next();
  } else {
    // If the user is not authenticated, redirect them to the login page
    alert("Bạn phải đăng nhập để tiếp tục!");
    next({ name: "Login" });
  }
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../view/app/Home.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../view/auth/Login.vue"),
  },
  {
    path: "/admin",
    name: "AdminView",
    component: () => import("../view/admin/AdminView.vue"),
    beforeEnter: requireAuth,
    children: [
      {
        path: "/admin/user",
        name: "UserView",
        component: () => import("../view/admin/user/UserView.vue"),
        beforeEnter: requireAuth,
      },
      {
        path: "/admin/user/:id",
        name: "UserDetail",
        component: () => import("../view/admin/user/UserDetail.vue"),
        beforeEnter: requireAuth,
      },
      {
        path: "/admin/profile",
        name: "Profile",
        component: () => import("../view/admin/user/Profile.vue"),
        beforeEnter: requireAuth,
      },
    ],

  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;