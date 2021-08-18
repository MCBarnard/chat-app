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
        path: '/contacts',
        component: () => import('../Pages/ContactsPage.vue'),
        name: 'contacts',
        meta: {
            title:'Contacts'
        }
    },
    {
        path: '/profile',
        component: () => import('../Pages/ProfilePage.vue'),
        name: 'profile',
        meta: {
            title:'Your Profile'
        }
    },
    {
        path: '/settings',
        component: () => import('../Pages/SettingsPage.vue'),
        name: 'settings',
        meta: {
            title:'App Settings'
        }
    },
    {
        path: '/logout',
        component: () => import('../Pages/Home.vue'),
        name: 'logout',
        meta: {
            title:'Logout'
        }
    },
    // {
    //     path: '*',
    //     component: () => import('../Pages/ErrorPages/PageNotFoundPage'),
    //     name: 'PageNotFoundPage',
    //     meta: {
    //         title:''
    //     }
    // }
];

export default routes;
