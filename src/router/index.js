import { createRouter, createWebHistory } from 'vue-router'
import ShowList from '../views/ShowList.vue'
import AddTodo from '../views/AddTodo.vue'
import DelAllTodos from '../views/DelAllTodos.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ShowList
    },
    {
      path: '/addTodo',
      name: 'addTodo',
      component: AddTodo
    },
    {
      path: '/delAllTodos',
      name: 'delAllTodos',
      component: DelAllTodos
    }
  ]
})

export default router
