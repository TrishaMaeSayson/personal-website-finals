import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Education from '../components/Education.vue'
import Achievements from '../components/Achievements.vue'
import Contact from '../components/Contact.vue'
import Resources from '../components/Resources.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/education', name: 'Education', component: Education },
  { path: '/achievements', name: 'Achievements', component: Achievements },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/resources', name: 'Resources', component: Resources },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
