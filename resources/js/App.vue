<template>
<div>
    <Navbar />
    <router-view />

</div>
</template>

<script>
import Navbar from "./Components/Navbar";

export default {
    name: "App",
    components: { Navbar }
}
</script>

<style scoped>

</style>
