import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

import Login from "../views/Login"
import Register from "../views/Register"
import Todos from "../views/Todos"
import Landing from "../views/Landing"

const routes = [
    {
        path: "/",
        redirect: "/home"
    },
    {
        path: "/landing",
        component: Landing
    },
    {
        path: "/login",
        component: Login
    },
    {
        path: "/register",
        component: Register
    },
    {
        path: "/todos",
        component: Todos
    }
]

const router = new VueRouter({
    mode: "history",
    routes
})

export default router