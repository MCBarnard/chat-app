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
.homePage {
    display: block;
    position: relative;
    width: 100%;
    height: 100vh;
    background: #16bdbd;

    &__content-wrapper {
        display: flex;
        justify-content: space-between;
        height: 100vh;

        &__left {
            max-width: 250px;
            width: 100%;
            background: red;
        }

        &__right {
            width: 100%;
        }
    }
}
</style>
