import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

import Login from "../views/Login"
import Register from "../views/Register"
import Todos from "../views/Todos"

const routes = [
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