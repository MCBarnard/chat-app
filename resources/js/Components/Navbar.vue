<template>
<nav>
    <router-link :to="{ name: 'home' }">Home</router-link> | <router-link :to="{ name: 'about' }">About</router-link>
</nav>
</template>

<script>
export default {
    name: "Navbar"
}
</script>

<style scoped>

</style>
