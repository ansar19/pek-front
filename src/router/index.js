/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';
import { routes } from './routes'
import { isAuthenticated } from '../services/auth'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes,
});


router.beforeEach((to, from, next) => {
  const auth = isAuthenticated();
  if (to.name !== 'login' && !auth) next({ name: 'login' })
  else next()
})

export default router;
