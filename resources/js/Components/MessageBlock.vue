<template>
    <div class="message-container" :class="[{'owner': $props.owner}]">
        <section class="message-section" :class="[{'owner': $props.owner}]">
            <span>{{ $props.message }}</span>
            <img :src="imageUrl" alt="">
        </section>
    </div>
</template>

<script>

export default {
    name: "MessageBlock",
    computed: {
        imageUrl () {
            return this?.$store.getters.getImageStorageUrl + this.$props.pictureName
        }
    },
    props: {
        message: {
            type: String,
            required: true
        },
        messageId: {
            type: Number,
            required: true
        },
        user: {
            type: String,
            required: true
        },
        owner: {
            type: Boolean,
            required: true
        },
        pictureName: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped lang="scss">
.message-container {
    display: flex;
    justify-content: flex-start;
    padding: 8px;
    margin-bottom: 28px;
}
.message-container.owner {
    justify-content: flex-end;
}
.message-section {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    position: relative;

    span {
        display: flex;
        margin-left: 30px;
        word-break: break-word;
        max-width: 500px;
        background: #2c3e4f;
        color: #ffffff;
        padding: 12px;
        border-radius: 5px;
        flex-wrap: wrap;
    }

    img {
        position: absolute;
        left: 0;
        bottom: -35px;
        max-width: 50px;
        max-height: 50px;
        object-fit: contain;
        border-radius: 50%;
        border: 5px solid #eff3ff;
    }
}
.message-section.owner {
    justify-content: flex-end;
    color: #2c3e4f;

    span {
        margin-left: unset;
        margin-right: 30px;
        background: #ffffff;
        color: #081840;
    }

    img {
        left: unset;
        right: 0;
    }
}
</style>
