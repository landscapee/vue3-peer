import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router'

let defaultRoutes = [
    {
        path: '/vue', name: 'file',
        component: () => import('../views/CesiumMap/index'),
    },
    {
        path: '/login', name: 'login',
        component: () => import('../views/login/index'),
    },
    {
        path: '/peer', name: 'peer',
        component: () => import('../views/peer/index'),
    },
]
let rolesRouter = []


const router = createRouter({
    routes: defaultRoutes,
    "history": createWebHashHistory(),
});

export function resetRouter() {
    const newRouter = createRouter({
        routes: defaultRoutes,
        "history": createWebHistory(),
        // scrollBehavior: () => ({left: 0, top: 0}),

        // "history": createWebHashHistory(),
        // "abstract": createMemoryHistory(),
    });
    // router.matcher = newRouter.matcher;
    return newRouter
}

export default router
