<template>
<div>
    Home page
</div>
</template>

<script>
export default {
    name: "Home",
    async mounted() {
        const data = {
            message: "blah blah message",
            recipient: 1
        };
        axios.post("/messages/new", data).then(response => {
           console.log(response);
        });
    }
}
</script>

<style scoped>

</style>
