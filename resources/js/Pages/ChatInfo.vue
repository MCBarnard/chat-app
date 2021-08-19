<template>
    <div class="chat-info-page">
        <alert-component message="Coming Soon"
                         subtitle="We are currently working on this page, look out for the launch..."
                         :dismissible="false" :slide-in="true"/>
    </div>
</template>

<script>
import {globalMixin} from "../Mixins/GlobalMixin";
import AlertComponent from "../Components/AlertComponent";

export default {
    name: "ChatInfoPage",
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
.chat-info-page {
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
