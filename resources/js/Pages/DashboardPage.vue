<template>
<div class="dashboard-page">
    <div class="page-header">
        <h1>Dashboard</h1>
    </div>
    <alert-component message="This looks weird right now..."
                     subtitle="We are still in the progress of building this page."
                     variant="warning"
                     :dismissible="false"
    />
</div>
</template>

<script>
import AlertComponent from "../Components/AlertComponent";
export default {
    name: "DashboardPage",
    components: {AlertComponent}
}
</script>

<style scoped lang="scss">
.dashboard-page {
    background: #eff3ff;
    min-height: 100vh;
}

.page-header {
    display: flex;
    justify-content: space-between;
    padding: 8px 20px;
    background: #ffffff;
    box-shadow: 0 0 20px -12px #000000;

h1 {
    font-size: 24px;
    font-weight: 500;
    color: #2c3e4f;
    margin: 0;
}

.buttons-container {

button {
    background: #394f65;
    padding: 4px 16px;
    border-radius: 5px;
    outline: none!important;
    cursor: pointer;
    box-shadow: 0 0 6px -3px #2c3e4f;

&:hover {
     background: #2c3e4f;
     box-shadow: 0 0 18px -10px #2c3e4f;
 }

svg {
    fill: #fff;
}
}
}
}

</style>
