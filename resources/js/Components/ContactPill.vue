<template>
<div :id="`contact-pill-${$props.threadId}`" @click="threadSelected" class="contact-pill" :class="[{'active-pill': $props.active}]">
    <h4>{{ truncatedName }}</h4>
    <p>{{ messagePreview }}</p>
    <div class="notification blue" v-if="$props.hasNotification"></div>
</div>
</template>

<script>
export default {
    name: "ContactPill",
    methods: {
        threadSelected() {
            this.$emit("threadSelected", this.$props.threadId);
        }
    },
    computed: {
        messagePreview() {
            const max_chars = 40;
            if (this.$props.lastMessage.length >= max_chars) {
                return this.$props.lastMessage.substr(0, (max_chars - 4)) + " ...";
            } else {
                return this.$props.lastMessage;
            }
        },
        truncatedName() {
            const max_chars = 20;
            if (this.$props.name.length >= max_chars) {
                return this.$props.name.substr(0, max_chars);
            } else {
                return this.$props.name;
            }
        }
    },
    props: {
        threadId: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        lastMessage: {
            type: String,
            required: true
        },
        hasNotification: {
            type: Boolean,
            default: false
        },
        active: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped lang="scss">
.contact-pill {
    background: #2c3e4f;
    width: 100%;
    max-width: 250px;
    padding: 10px;
    cursor: pointer;
    z-index: 0;
    transition: all 0.4s ease;
    position: relative;

    &:hover {
        background: #4e83b4;
        z-index: 1;
        position: relative;
    }

    & + .contact-pill {
        margin-top: 1px;
    }

    h4 {
        margin: 0;
        font-size: 16px;
        color: #dbdbdb;
        font-weight: 400;
        -webkit-user-select: none; /* Safari */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+/Edge */
        user-select: none; /* Standard */
    }

    p {
        font-size: 12px;
        margin: 0;
        color: #b6b6b6;
        -webkit-user-select: none; /* Safari */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+/Edge */
        user-select: none; /* Standard */
    }
}
.active-pill {
    background: #0a76be;
    cursor: default;

    &:hover {
        background: #0a76be;
    }
}
.notification {
    position: absolute;
    top: 8px;
    right: 10px;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    animation: push 0.8s linear infinite;

    &.blue {
        background: #1fa3b5;
    }
}
@keyframes push{
    0%   {transform: scale(0.9);}
    30%  {transform: scale(1);}
    60%  {transform: scale(1.1);}
    90%  {transform: scale(1);}
    100%  {transform: scale(0.9);}
}
</style>
