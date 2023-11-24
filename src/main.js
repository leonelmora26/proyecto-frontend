import { createApp } from 'vue'
// import './style.css'
import {router} from "./routes/routes.js"
import {createPinia} from 'pinia'
import App from './App.vue'


const pinia = createPinia()
const app = createApp(App)
app.use(router)
app.mount('#app')
app.use(pinia)
