
/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
import Index from '@/pages/index.vue'
import Game from '@/pages/game.vue'

const routes = [
  { path: '/', component: Index },
  { path: '/game', component: Game }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
