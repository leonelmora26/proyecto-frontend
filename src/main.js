import { createApp } from 'vue'
// import './style.css'
import {router} from "./routes/routes.js"
import {createPinia} from 'pinia'
import App from './App.vue'
import {Quasar} from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

const myApp = createApp(App)

myApp.use(Quasar,{
    plugins:{},
})



const pinia = createPinia()
const app = createApp(App)
app.use(router)
app.mount('#app')
app.use(pinia)
