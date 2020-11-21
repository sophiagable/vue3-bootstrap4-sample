import { createApp } from 'vue'
import App from './App.vue'
import Dashboard from './Dashboard.vue'
import router from './router'

// scss
import '@/assets/scss/main.scss'


createApp(Dashboard).use(router).mount('#app')
