import Vue from 'vue';
import Router from 'vue-router';
import Login from '../views/auth/Login.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
      meta: {
        title: '登录',
        description: '登录页面-欢迎登录',
      },
    },
    {
      path: '/manager',
      name: 'manager',
      component: () => import('../views/Layout.vue'),
      children: [
        {
          path: '/',
          name: '',
          component: () => import('../views/manager/main.vue'),
        },
      ],
    },
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home,
    //   meta: {
    //     title: 'HOME',
    //     description: 'description',
    //   },
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    // },
  ],
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
