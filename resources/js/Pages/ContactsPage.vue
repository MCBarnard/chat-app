<template>
<div class="contacts-page">
    <div class="page-header">
        <h1>Contacts</h1>
        <div class="buttons-container">
            <button @click="showAddNewContact = true" title="Add a New Contact">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path fill-rule="evenodd"
                          d="M19.25 1a.75.75 0 01.75.75V4h2.25a.75.75 0 010 1.5H20v2.25a.75.75 0 01-1.5 0V5.5h-2.25a.75.75 0 010-1.5h2.25V1.75a.75.75 0 01.75-.75zM9 6a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM4 9.5a5 5 0 117.916 4.062 7.973 7.973 0 015.018 7.166.75.75 0 11-1.499.044 6.469 6.469 0 00-12.932 0 .75.75 0 01-1.499-.044 7.973 7.973 0 015.059-7.181A4.993 4.993 0 014 9.5z"></path>
                </svg>
            </button>
        </div>
    </div>
    <div class="contact-cards">
        <div class="contact-cards__container">
            <contact-card v-for="(item, index) in contacts" :key="index"
                          :name="item.name"
                          :image="pictureOrDefaultPicture(item.image)"
                          :thread-id="item.threadId"
                          :connection-id="item.connectionId"
                          @start-thread="startThread($event)"
                          @go-to-thread="goToThread($event)"
                          @block-thread="blockThread($event)"
            />
        </div>
    </div>
    <div v-if="showAddNewContact" class="add-new-contact-page" :class="[{'smaller': stepOne}]">
        <button @click="stepOne = true" class="back-button">
            back
        </button>
        <div class="card-body">
            <lottie-component
                class="lottie-component"
                json-url="https://assets5.lottiefiles.com/packages/lf20_lKnuQT.json"
                speed="0.5"
            />
            <form action="#" @submit.prevent="makeConnectionRequest">
                <div class="containing-section" :class="[{'next': !stepOne}]">
                    <div class="first-section">
                        <button class="submit-btn" @click="stepOne = false">
                            Next
                        </button>
                    </div>
                    <div class="second-section">
                        <textarea placeholder="To start talking, send them an introduction message, it's just polite!"></textarea>
                        <div class="button-container">
                            <button class="cancel-btn" @click="showAddNewContact = false">
                                Cancel
                            </button>
                            <button class="submit-btn" type="submit">
                                Send Request
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
</template>

<script>
import LottieComponent from "../Components/LottieComponent";
import ContactCard from "../Components/ContactCard";
import {globalMixin} from "../Mixins/GlobalMixin";

export default {
    name: "ContactsPage",
    components: {
        ContactCard,
        LottieComponent
    },
    mixins: [globalMixin],
    data() {
        return {
            showAddNewContact: true,
            stepOne: true,
            newConnection: {
                connectionId: "",
                message: ""
            },
            contacts: [
                {
                    name: "Jacob Ross",
                    image: null,
                    threadId: null,
                    connectionId: 1
                },
                {
                    name: "Some new User",
                    image: null,
                    threadId: 1,
                    connectionId: 1
                },
            ]
        };
    },
    methods: {
        makeConnectionRequest() {

        },
        startThread (id) {
            console.log("Start thread with connection-id: ", id);
        },
        goToThread (id) {
            console.log("Go to thread: ", id);
        },
        blockThread (id) {
            console.log("Block thread: ", id);
        }
    }
}
</script>

<style scoped lang="scss">
.contacts-page {
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

.contact-cards {
    width: 100%;
    padding: 20px 0 0 20px;
    max-height: calc(100vh - 52px);
    overflow: auto;

    &__container {
        margin: auto;
        //background: red;
        display: flex;
        flex-wrap: wrap;
    }
}

.add-new-contact-page {
    position: absolute;
    top: 50%;
    left: 50%;
    right: 50%;
    bottom: 50%;
    transform: translate(-50%, -50%);
    height: 450px;
    width: 345px;
    background: #ffffff;
    box-shadow: 0 0 20px -12px #000000;
    overflow: hidden;
    transition: all 0.5s;

    .back-button {
        position: absolute;
        top: 0;
        left: 0;
        cursor: pointer;
        background: #ffffff00;
    }

    &.smaller {
        height: 240px;

        .back-button {
            display: none;
        }
    }

    .card-body {
        padding: 10px;

        form {
            overflow: hidden;
            width: 100%;
            max-width: 100%;
            display: flex;

            textarea {
                max-width: 350px;
                margin: 10px auto;
                color: #707070;
                height: 200px;
                width: 100%;
                border-radius: 5px;
                border: 1px solid #d3d3d3;
                display: block;
                font-family: sans-serif;
                padding: 10px;
                outline: none!important;
            }

            .containing-section {
                width: 650px;
                position: relative;
                display: flex;
                transition: all 1s ease;

                &.next {
                    transform: translateX(-325px);
                }

                .first-section {
                    width: 325px;
                }
                .second-section {
                    width: 325px;
                }
            }
        }

        .cancel-btn {
            cursor: pointer;
            background: #ffffff00;

            &:hover {
                text-decoration: underline;
            }
        }

        .submit-btn {
            background: #394f65;
            padding: 9px 14px;
            border-radius: 5px;
            outline: none!important;
            cursor: pointer;
            box-shadow: 0 0 6px -3px #2c3e4f;
            color: #ffffff;
            margin-left: 8px;

            &:hover {
                background: #2c3e4f;
                box-shadow: 0 0 18px -10px #2c3e4f;
            }
        }
    }
}
.lottie-component {
    max-width: 150px;
    margin: auto;
    height: 164px;
}
.button-container {
    display: flex;
    justify-content: flex-end;
}
</style>
