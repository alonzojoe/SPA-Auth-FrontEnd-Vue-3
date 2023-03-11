import { createRouter, createWebHistory } from "vue-router";
import Register from '../views/auth/Register.vue'
import Login from '../views/auth/Login.vue'

const routes = [
    // {
    //     path: '/',
    //     name: 'home',
    //     component: HomeView
    // },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/about',
        name: 'about',
        component: ()=> import ('../views/About.vue')
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})


export default router;