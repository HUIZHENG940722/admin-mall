import {createRouter, createWebHistory} from 'vue-router';

export const sharedRouteMap = [
    {
        path: '/login',
        component: () => import('@/pages/login/index.vue'),
    },
    {
        path: '/',
        component: () => import('@/pages/layout/index.vue'),
        redirect: '/home',
        children: [{
            path: 'home',
            name: 'home',
            component: () => import('@/pages/home/index.vue'),
        }]
    }
];

const router = createRouter({
    routes: sharedRouteMap,
    history: createWebHistory(),
})

export default router;