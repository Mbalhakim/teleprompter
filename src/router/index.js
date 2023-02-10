import { createRouter, createWebHistory } from 'vue-router'

import Home from "@/views/Home";

import Project from "@/views/Project";





const routes = [


  {
    path: '/',
    name: 'Home',
    component: Home
  },



  {
    path: '/project/:id',
    name: 'project',
    component: Project
  },



]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router
