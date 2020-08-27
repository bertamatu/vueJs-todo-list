import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from "./views/Home.vue"
// import About from "./views/About.vue"


export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            // component: About
            component: () => import('./views/About.vue')
        }
    ]
})
