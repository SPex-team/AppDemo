import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)


const routes = [
    {
        path: "/",
        name: "frame",
        meta: {
            "name": "frame"
        },
        component: () => import('../views/frame/Frame.vue'),
        redirect: "market",
        children: [
            {
                path: "home",
                name: "home",
                component: () => import('../views/home/Home.vue'),
            },
            // {
            //     path: "metric-history",
            //     name: "metric-history",
            //     component: () => import('../views/dashboard/Dashboard.vue'),
            // },
            {
                path: "market",
                name: "market",
                component: () => import('../views/market/Market.vue'),
            },
            {
                path: "history",
                name: "history",
                component: () => import('../views/history/History.vue'),
            },
            {
                path: "me",
                name: "me",
                component: () => import('../views/me/Me.vue'),
            }
        ]
    },
    {
        path: "/others",
        name: "/others",
        component: () => import('../views/others/Others.vue'),
        redirect: "email",
        children: [
            {
                path: "email",
                name: "others-email",
                component: () => import('../views/others/Email.vue'),
            },
            {
                path: "success-ack",
                name: "others-success-ack",
                component: () => import('../views/others/SuccessAck.vue'),
            },
            {
                path: "fail-ack",
                name: "others-fail-ack",
                component: () => import('../views/others/FailedAck.vue'),
            },
            {
                path: "test1",
                name: "test1",
                component: () => import('../views/tests/Test1.vue'),
            }
        ]
    }
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
