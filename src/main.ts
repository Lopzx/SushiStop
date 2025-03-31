import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import { createWebHistory, createRouter } from 'vue-router'

import Main from './components/pages/Main.vue'
import ContactUs from './components/pages/ContactUs.vue';

const routes = [
  { path: '/', component: Main },
  { path: '/home', component: Main },
  { path: '/about', component: Main },
  { path: '/mitra', component: Main },
  { path: '/pricing', component: Main },
  { path: '/contact', component: ContactUs },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.use(router)
app.mount('#app')
