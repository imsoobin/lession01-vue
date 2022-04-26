import {createRouter, createWebHistory} from 'vue-router'
import About from '../components/About'
import Home from '../components/Home'

const routes = [
    { 
        path: '/',
        name: 'Home',
        component: Home 
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router