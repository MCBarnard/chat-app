const routes = [
    {
        path: '',
        component: () => import('../Pages/DashboardPage.vue'),
        name: 'home'
    },
    {
        path: '/thread/:threadId',
        component: () => import('../Pages/ChatPage.vue'),
        name: 'chat-page'
    },
    {
        path: '/about',
        component: () => import('../Pages/About.vue'),
        name: 'about'
    },
    {
        path: '/logout',
        component: () => import('../Pages/About.vue'),
        name: 'logout'
    }
];

export default routes;
