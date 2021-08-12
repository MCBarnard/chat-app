const routes = [
    {
        path: '',
        component: () => import('../Pages/DashboardPage.vue'),
        name: 'home',
        meta: {
            title:'Home'
        }
    },
    {
        path: '/threads',
        component: () => import('../Pages/ChatPage.vue'),
        name: 'chat-landing',
        meta: {
            title:'Chat Page'
        }
    },
    {
        path: '/threads/:threadId',
        component: () => import('../Pages/ChatPage.vue'),
        name: 'chat-page',
        meta: {
            title:'Chat Thread'
        }
    },
    {
        path: '/about',
        component: () => import('../Pages/About.vue'),
        name: 'about',
        meta: {
            title:'About'
        }
    },
    {
        path: '/logout',
        component: () => import('../Pages/About.vue'),
        name: 'logout',
        meta: {
            title:'Logout'
        }
    },
    {
        path: '*',
        component: () => import('../Pages/ErrorPages/PageNotFoundPage'),
        name: 'PageNotFoundPage',
        meta: {
            title:'Page not Found'
        }
    }
];

export default routes;
