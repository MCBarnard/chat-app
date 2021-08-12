<template>
    <div class="message-container" :class="[{'owner': $props.owner}]">
        <section class="message-section" :class="[{'owner': $props.owner}]">
            {{ $props.message }}
        </section>
    </div>
</template>

<script>

export default {
    name: "MessageBlock",
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
        }
    }
}
</script>

<style scoped lang="scss">
.message-container {
    display: flex;
    justify-content: flex-start;
    padding: 8px;
}
.message-container.owner {
    justify-content: flex-end;
}
.message-section {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    word-break: break-word;
    max-width: 500px;
    background: #2c3e4f;
    color: #ffffff;
    padding: 8px;
    border-radius: 5px;
    flex-wrap: wrap;
}
.message-section.owner {
    justify-content: flex-end;
    background: #ffffff;
    color: #2c3e4f;
}
</style>
