import Login from "../components/Login";
import Home from "../components/Home";
import {createRouter, createwebHashHistory} from "vue-router"

const routes=[
    {path: "/", component:Login},
    {path: "/home", component:Home, beforeEnter:requireAuth}
]

export const router = createRouter({ 
    history: createwebHashHistory(),
    routes
})