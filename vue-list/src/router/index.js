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
        name: "LandingPage",
        component: Landing
    },
    {
        path: "/login",
        name: "LoginPage",
        component: Login
    },
    {
        path: "/register",
        name: "RegisterPage",
        component: Register
    },
    {
        path: "/todos",
        name: "TodosPage",
        component: Todos
    }
]

const router = new VueRouter({
    mode: "history",
    routes
})

export default router