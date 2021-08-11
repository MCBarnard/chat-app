import VueRouter from "vue-router";
import routes from "./routes";

const router = new VueRouter({
    mode: 'history',
    routes
});
try {
    router.beforeEach((to, from, next) => {
        const pathTitle = typeof to.meta.title === "undefined" ? "Chat App" : to.meta.title;
        document.title = `${pathTitle} - ${process.env.MIX_APP_NAME}`;
        if (to.name === "logout") {
            axios.get("/logout").then(() => {}).catch(() => {});
            window.location = "/login";
        } else {
            next();
        }
    })
} catch (error) {
    console.log(error.response)
}

export default router;
