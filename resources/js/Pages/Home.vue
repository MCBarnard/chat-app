<template>
<div class="homePage">
    <router-view />
</div>
</template>

<script>

export default {
    name: "Home",
}
</script>

<style lang="scss" scoped>
.homePage {
    display: block;
    position: relative;
    width: 100%;
    height: 100vh;
}
</style>
