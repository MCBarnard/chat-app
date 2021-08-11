<template>
    <div class="homePage">
        <div class="homePage__content-wrapper">
            <div class="homePage__content-wrapper__left">
                <Navbar />
            </div>
            <div class="homePage__content-wrapper__right">
                <router-view />
            </div>
        </div>
</div>
</template>

<script>
import Navbar from "./Components/Navbar";

export default {
    name: "App",
    components: { Navbar }
}
</script>

<style scoped lang="scss">
body {
    scroll-behavior: smooth;
}
.homePage {
    display: block;
    position: relative;
    width: 100%;
    height: 100vh;

    &__content-wrapper {
        display: flex;
        justify-content: space-between;
        height: 100vh;

        &__right {
            width: 100%;
            overflow: auto;
        }
    }
}
</style>
