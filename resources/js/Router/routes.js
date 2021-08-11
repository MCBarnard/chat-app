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
        path: '/thread/:threadId',
        component: () => import('../Pages/ChatPage.vue'),
        name: 'chat-page',
        meta: {
            title:'Chat'
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
    }
];

export default routes;
