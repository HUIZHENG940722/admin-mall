import {createRouter, createWebHistory} from 'vue-router';

export const sharedRouteMap = [
    {
        path: '/login',
        component: () => import('@/pages/login/index.vue'),
    },
    {
        path: '/',
        component: () => import('@/pages/home/index.vue')
    }
];

const router = createRouter({
    routes: sharedRouteMap,
    history: createWebHistory(),
})

export default router;