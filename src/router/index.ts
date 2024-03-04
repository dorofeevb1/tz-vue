import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import TaskList from '../views/TaskList.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/tasks', component: TaskList },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
