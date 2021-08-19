<template>
    <div class="settings-page">
        <div class="page-header">
            <h1>Settings</h1>
        </div>
        <alert-component message="This is a danger alert"
                         subtitle="Lorem ipsum dolor semet.Lorem ipsum dolor semet.Lorem ipsum dolor semet.Lorem ipsum dolor semet.Lorem ipsum dolor semet.Lorem ipsum dolor semet.Lorem ipsum dolor semet.Lorem ipsum dolor semet.Lorem ipsum dolor semet."
                         variant="danger" :slide-in="false"/>
        <alert-component message="This is a success alert"
                         subtitle="Lorem ipsum dolor semet.Lorem ipsum dolor semet.Lorem ipsum dolor semet.Lorem ipsum dolor semet.Lorem ipsum dolor semet.Lorem ipsum dolor semet.Lorem ipsum dolor semet.Lorem ipsum dolor semet.Lorem ipsum dolor semet."
                         variant="success" :slide-in="false"/>
        <alert-component message="This is a warning alert"
                         subtitle="Lorem ipsum dolor semet.Lorem ipsum dolor semet.Lorem ipsum dolor semet.Lorem ipsum dolor semet.Lorem ipsum dolor semet.Lorem ipsum dolor semet.Lorem ipsum dolor semet.Lorem ipsum dolor semet.Lorem ipsum dolor semet."
                         variant="warning" :slide-in="false"/>
        <alert-component message="This is an info alert"
                         subtitle="Lorem ipsum dolor semet.Lorem ipsum dolor semet.Lorem ipsum dolor semet.Lorem ipsum dolor semet.Lorem ipsum dolor semet.Lorem ipsum dolor semet.Lorem ipsum dolor semet.Lorem ipsum dolor semet.Lorem ipsum dolor semet."
                         :dismissible="false" :slide-in="false"/>
    </div>
</template>

<script>
import {globalMixin} from "../Mixins/GlobalMixin";
import AlertComponent from "../Components/AlertComponent";

export default {
    name: "SettingsPage",
    components: {
        AlertComponent,
    },
    mixins: [globalMixin],
    data() {
        return {};
    },
}
</script>

<style scoped lang="scss">
.settings-page {
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
