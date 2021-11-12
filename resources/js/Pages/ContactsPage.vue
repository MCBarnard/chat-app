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
    <div class="wrapper-control-height">
        <alert-component v-if="alert.show" :message="alert.message" :subtitle="alert.subtitle" :variant="alert.variant" :dismissible="alert.dismissible"  :slide-in="alert.slideIn"/>
        <alert-component v-if="responseAlert.show" :message="responseAlert.message" :subtitle="responseAlert.subtitle" :variant="responseAlert.variant" :dismissible="responseAlert.dismissible"  :slide-in="responseAlert.slideIn"/>
        <div class="contacts-block-split">
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
            <div class="connection-request-block">
                <connection-request-card v-for="(item, index) in connectionRequests" :key="index"
                                         :request-id="item.id"
                                         :name="item.from"
                                         :message="item.message"
                                         :image="pictureOrDefaultPicture(item.owner_profile_picture)"
                                         @accepted="acceptConnectionRequest($event)"
                                         @rejected="declineConnectionRequest($event)"
                />
            </div>
        </div>
        <div v-if="showAddNewContact" class="add-new-contact-page" :class="[{'smaller': stepOne}]">
            <button @click="resetStepOne" class="back-button" :class="[{'hidden-button': stepOne}]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="50" height="50">
                    <path fill-rule="evenodd"
                          d="M7.78 12.53a.75.75 0 01-1.06 0L2.47 8.28a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 1.06L4.81 7h7.44a.75.75 0 010 1.5H4.81l2.97 2.97a.75.75 0 010 1.06z"></path>
                </svg>
            </button>
            <button :class="[{'hidden-button': !stepOne}]" @click="closeModal" class="close-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="50" height="50">
                    <path fill-rule="evenodd"
                          d="M3.404 12.596a6.5 6.5 0 119.192-9.192 6.5 6.5 0 01-9.192 9.192zM2.344 2.343a8 8 0 1011.313 11.314A8 8 0 002.343 2.343zM6.03 4.97a.75.75 0 00-1.06 1.06L6.94 8 4.97 9.97a.75.75 0 101.06 1.06L8 9.06l1.97 1.97a.75.75 0 101.06-1.06L9.06 8l1.97-1.97a.75.75 0 10-1.06-1.06L8 6.94 6.03 4.97z"></path>
                </svg>
            </button>
            <div class="card-body">
                <lottie-component
                    class="lottie-component"
                    json-url="https://assets5.lottiefiles.com/packages/lf20_lKnuQT.json"
                    speed="0.5"
                />
                <form action="#" @submit.prevent="">
                    <div class="containing-section" :class="[{'next': !stepOne}]">
                        <div class="first-section" :class="[{'hidden': !stepOne}]">
                            <input type="text" placeholder="Enter a connection id" v-model="newConnection.connectionId">
                            <button class="submit-btn" @click="stepOne = false">
                                Next
                            </button>
                        </div>
                        <div class="second-section"  :class="[{'hidden': stepOne}]">
                            <textarea v-model="newConnection.message" placeholder="To start talking, send them an introduction message, it's just polite!"></textarea>
                            <div class="button-container">
                                <button class="cancel-btn" @click="closeModal">
                                    Cancel
                                </button>
                                <button class="submit-btn" @click="makeConnectionRequest">
                                    Send Request
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div v-if="newChatModal" class="modal-new-chat">
        <start-chat-component :connection-id="newChat.connectionId" :image="pictureOrDefaultPicture(newChat.image)" :name="newChat.name" />
    </div>
</div>
</template>

<script>
import StartChatComponent from "../Components/StartChatComponent";
import LottieComponent from "../Components/LottieComponent";
import ContactCard from "../Components/ContactCard";
import ConnectionRequestCard from "../Components/ConnectionRequestCard";
import {globalMixin} from "../Mixins/GlobalMixin";
import AlertComponent from "../Components/AlertComponent";

export default {
    name: "ContactsPage",
    components: {
        AlertComponent,
        ContactCard,
        LottieComponent,
        ConnectionRequestCard,
        StartChatComponent
    },
    mixins: [globalMixin],
    data() {
        return {
            newChat: {
                name: "",
                connectionId: "",
                image: ""
            },
            showAddNewContact: false,
            stepOne: true,
            newConnection: {
                connectionId: "",
                message: ""
            },
            responseAlert: {
                show: "",
                message: "",
                subtitle: "",
                variant: "",
                dismissible: false,
                slideIn: false
            },
            contacts: [],
            showNewChatStart: false
        };
    },
    computed: {
        connectionRequests() {
            return this.$store.getters.getNewConnectionRequests;
        },
        connectionRequest() {
            return this.$store.getters.getNewConnectionRequest;
        },
        newChatModal() {
            return this.showNewChatStart;
        }
    },
    async mounted() {
        await this.fetchContacts();
    },
    watch: {
        contacts(val) {
            if (val.length === 0) {
                this.useAlert(true, "You don't have any connections yet.", "Asking a friend for their connection id and add them to your network", "info", false);
            } else {
                this.useAlert(false, "", "")
            }
        },
        connectionRequest (val) {
            if (val) {
                this.fetchContacts();
            }
        }
    },
    methods: {
        popItemFromRequests(id) {
            const newArray = []
            this.$store.getters.getNewConnectionRequests.forEach(item => {
                if (item.id !== id) {
                    newArray.push(item);
                }
            });
            this.$store.dispatch("ACT_NEW_CONNECTION_REQUESTS", newArray);
        },
        async acceptConnectionRequest(obj) {
            const data = {
                state: this.$store.getters.getStateIds.accepted
            };
            await axios.post(`/data/connection-requests/${obj.requestId}`, data).then(response => {
                this.fetchContacts();
                this.popItemFromRequests(obj.requestId);
            });
        },
        async declineConnectionRequest(obj) {
            const data = {
                state: this.$store.getters.getStateIds.rejected
            };
            await axios.post(`/data/connection-requests/${obj.requestId}`, data).then(response => {
                this.fetchContacts();
                setTimeout(() => {
                    this.popItemFromRequests(obj.requestId);
                }, 1000);
            });
        },
        async fetchContacts() {
            await axios.get("/data/contacts").then(response => {
                this.contacts = response.data;
                this.$store.dispatch("ACT_NEW_CONNECTION_REQUEST", false);
            });
        },
        closeModal() {
            this.showAddNewContact = false;
            this.resetStepOne();
            this.newConnection.connectionId = "";
            this.newConnection.message = "";
        },
        resetStepOne() {
            this.stepOne = true;
        },
        async makeConnectionRequest() {
            const data = {
                connectionId: this.newConnection.connectionId,
                message: this.newConnection.message
            };
            await axios.post("/data/connection-requests/new", data).then(response => {
                if (response.status === 201) {
                    this.responseAlert = {
                        show: true,
                        message: "Successfully sent Connection request!",
                        subtitle: "You will receive a notification as soon as they accept your request!",
                        variant: "success",
                        dismissible: true,
                        slideIn: true
                    };
                } else if(response.status === 208) {
                    this.responseAlert = {
                        show: true,
                        message: response.data,
                        subtitle: "You will receive a notification as soon as they accept your request!",
                        variant: "warning",
                        dismissible: true,
                        slideIn: true
                    };
                }
            }).catch(error => {
                this.responseAlert = {
                    show: true,
                    message: "Something went wrong...",
                    subtitle: error.response.data,
                    variant: "danger",
                    dismissible: true,
                    slideIn: true
                 };
            });
            this.closeModal();
        },
        startThread (obj) {
            this.showNewChatStart = true;
            this.newChat.name = obj.name;
            this.newChat.connectionId = obj.connectionId;
            this.newChat.image = obj.image;
            console.log(obj)
            console.log("Start thread with connection-id: ", obj);
        },
        goToThread (id) {
            this.$router.push({ name: 'chat-page', params: { threadId: id } });
            console.log("Go to thread: ", id);
        },
        blockThread (id) {
            console.log("Block thread: ", id);
        }
    }
}
</script>

<style scoped lang="scss">
* {
    -webkit-font-smoothing: antialiased!important;
}

.contacts-page {
    background: #eff3ff;
    min-height: 100vh;
    position: relative;
}
.modal-new-chat {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #050b0ead;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
}
.wrapper-control-height {
    overflow: auto;
    position: relative;
    height: calc(100vh - 51.53px);
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
        outline: none !important;
        transition: all 0.3s ease;

        svg {
            fill: #d2d2d2;
            width: 30px;
            height: 30px;
            transition: all 0.8s ease;
        }

        &:hover svg {
            fill: #1f3c4b;
        }
    }

    .close-button {
        position: absolute;
        top: 4px;
        right: 0;
        background: #ffffff;
        outline: none !important;
        cursor: pointer;
        transition: all 0.3s ease;

        svg {
            fill: #d2d2d2;
            width: 20px;
            height: 20px;
            transition: all 0.8s ease;
        }

        &:hover svg {
            fill: red;
        }
    }

    .hidden-button {
        opacity: 0!important;
        transition: none!important;
        pointer-events: none!important;
    }

    &.smaller {
        height: 220px;

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
                -webkit-font-smoothing: antialiased;
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
                    display: flex;
                    height: 34px;

                    input {
                        width: 100%;
                        outline: none !important;
                        border-left: 1px solid #d4d4d4;
                        border-top: 1px solid #d4d4d4;
                        border-bottom: 1px solid #d4d4d4;
                        background: #eff3ff;
                        color: #7c7c7c;
                        border-radius: 5px 0 0 5px;
                        padding: 5px;

                        &:focus, &:active {
                            color: #000000;
                        }
                    }
                    button {
                        margin: 0;
                        border-radius: 0 5px 5px 0;
                        transition: all 0.3s ease;
                    }
                }
                .second-section {
                    width: 325px;
                }

                .hidden {
                    opacity: 0!important;
                    transition: none!important;
                    pointer-events: none!important;
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
.contacts-block-split {
    display: flex;

    .contact-cards {
        width: 100%;
    }
    .connection-request-block {
        max-width: 370px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        padding: 20px;
        height: 100%;
    }
}
</style>
