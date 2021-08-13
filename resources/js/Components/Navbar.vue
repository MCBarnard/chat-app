<template>
    <nav class="side-nav">
        <ul>
            <!--      Logo      -->
            <li class="side-nav__main-logo">
                <router-link class="side-nav__menu-item" :to="{ name: 'home' }">
                    <img src="/images/env.png" alt="Logo of an encrypted envelope">
                </router-link>
            </li>
            <!--      Chats      -->
            <li>
                <router-link class="side-nav__menu-item"
                             :class="[{'router-link-exact-active': $route.name === 'chat-page'}]"
                             :to="{ name: 'chat-landing' }">
                    <div class="side-nav__menu-item__img-container">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="50" height="50">
                            <path fill-rule="evenodd"
                                  d="M2.75 2.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 01.75.75v2.19l2.72-2.72a.75.75 0 01.53-.22h4.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25H2.75zM1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0113.25 12H9.06l-2.573 2.573A1.457 1.457 0 014 13.543V12H2.75A1.75 1.75 0 011 10.25v-7.5z"></path>
                        </svg>
                        <div class="update-pin red" v-if="hasUnreadMessage"></div>
                    </div>
                    <div class="hidden-text">
                        <p>
                            <span class="main">Messages</span>
                            <span class="subtext">Communicate securely with your contacts</span>
                        </p>
                    </div>
                </router-link>
            </li>
            <!--      Contacts      -->
            <li>
                <router-link class="side-nav__menu-item" :to="{ name: 'contacts' }">
                    <div class="side-nav__menu-item__img-container">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="50" height="50">
                            <path fill-rule="evenodd"
                                  d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"></path>
                        </svg>
                        <div class="update-pin green" v-if="hasConnectionRequest"></div>
                    </div>
                    <div class="hidden-text">
                        <p>
                            <span class="main">Contacts</span>
                            <span class="subtext">View or add more people</span>
                        </p>
                    </div>
                </router-link>
            </li>
            <!--      Profile      -->
            <li>
                <router-link class="side-nav__menu-item" :to="{ name: 'profile' }">
                    <div class="side-nav__menu-item__img-container">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50">
                            <path fill-rule="evenodd"
                                  d="M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z"></path>
                        </svg>
                    </div>
                    <div class="hidden-text">
                        <p>
                            <span class="main">Profile</span>
                            <span class="subtext">Edit your profile's contents</span>
                        </p>
                    </div>
                </router-link>
            </li>
            <!--      Settings      -->
            <li>
                <router-link class="side-nav__menu-item" :to="{ name: 'settings' }">
                    <div class="side-nav__menu-item__img-container">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="50" height="50">
                            <path fill-rule="evenodd"
                                  d="M7.429 1.525a6.593 6.593 0 011.142 0c.036.003.108.036.137.146l.289 1.105c.147.56.55.967.997 1.189.174.086.341.183.501.29.417.278.97.423 1.53.27l1.102-.303c.11-.03.175.016.195.046.219.31.41.641.573.989.014.031.022.11-.059.19l-.815.806c-.411.406-.562.957-.53 1.456a4.588 4.588 0 010 .582c-.032.499.119 1.05.53 1.456l.815.806c.08.08.073.159.059.19a6.494 6.494 0 01-.573.99c-.02.029-.086.074-.195.045l-1.103-.303c-.559-.153-1.112-.008-1.529.27-.16.107-.327.204-.5.29-.449.222-.851.628-.998 1.189l-.289 1.105c-.029.11-.101.143-.137.146a6.613 6.613 0 01-1.142 0c-.036-.003-.108-.037-.137-.146l-.289-1.105c-.147-.56-.55-.967-.997-1.189a4.502 4.502 0 01-.501-.29c-.417-.278-.97-.423-1.53-.27l-1.102.303c-.11.03-.175-.016-.195-.046a6.492 6.492 0 01-.573-.989c-.014-.031-.022-.11.059-.19l.815-.806c.411-.406.562-.957.53-1.456a4.587 4.587 0 010-.582c.032-.499-.119-1.05-.53-1.456l-.815-.806c-.08-.08-.073-.159-.059-.19a6.44 6.44 0 01.573-.99c.02-.029.086-.075.195-.045l1.103.303c.559.153 1.112.008 1.529-.27.16-.107.327-.204.5-.29.449-.222.851-.628.998-1.189l.289-1.105c.029-.11.101-.143.137-.146zM8 0c-.236 0-.47.01-.701.03-.743.065-1.29.615-1.458 1.261l-.29 1.106c-.017.066-.078.158-.211.224a5.994 5.994 0 00-.668.386c-.123.082-.233.09-.3.071L3.27 2.776c-.644-.177-1.392.02-1.82.63a7.977 7.977 0 00-.704 1.217c-.315.675-.111 1.422.363 1.891l.815.806c.05.048.098.147.088.294a6.084 6.084 0 000 .772c.01.147-.038.246-.088.294l-.815.806c-.474.469-.678 1.216-.363 1.891.2.428.436.835.704 1.218.428.609 1.176.806 1.82.63l1.103-.303c.066-.019.176-.011.299.071.213.143.436.272.668.386.133.066.194.158.212.224l.289 1.106c.169.646.715 1.196 1.458 1.26a8.094 8.094 0 001.402 0c.743-.064 1.29-.614 1.458-1.26l.29-1.106c.017-.066.078-.158.211-.224a5.98 5.98 0 00.668-.386c.123-.082.233-.09.3-.071l1.102.302c.644.177 1.392-.02 1.82-.63.268-.382.505-.789.704-1.217.315-.675.111-1.422-.364-1.891l-.814-.806c-.05-.048-.098-.147-.088-.294a6.1 6.1 0 000-.772c-.01-.147.039-.246.088-.294l.814-.806c.475-.469.679-1.216.364-1.891a7.992 7.992 0 00-.704-1.218c-.428-.609-1.176-.806-1.82-.63l-1.103.303c-.066.019-.176.011-.299-.071a5.991 5.991 0 00-.668-.386c-.133-.066-.194-.158-.212-.224L10.16 1.29C9.99.645 9.444.095 8.701.031A8.094 8.094 0 008 0zm1.5 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM11 8a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        <div class="update-pin blue" v-if="hasSettingsNotification"></div>
                    </div>
                    <div class="hidden-text">
                        <p>
                            <span class="main">Settings</span>
                            <span class="subtext">Set your user preferences</span>
                        </p>
                    </div>
                </router-link>
            </li>
            <!--      Logout      -->
            <li class="logout-item">
                <router-link class="side-nav__menu-item" :to="{ name: 'logout' }">
                    <div class="side-nav__menu-item__img-container">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="50" height="50">
                            <path fill-rule="evenodd"
                                  d="M2 2.75C2 1.784 2.784 1 3.75 1h2.5a.75.75 0 010 1.5h-2.5a.25.25 0 00-.25.25v10.5c0 .138.112.25.25.25h2.5a.75.75 0 010 1.5h-2.5A1.75 1.75 0 012 13.25V2.75zm10.44 4.5H6.75a.75.75 0 000 1.5h5.69l-1.97 1.97a.75.75 0 101.06 1.06l3.25-3.25a.75.75 0 000-1.06l-3.25-3.25a.75.75 0 10-1.06 1.06l1.97 1.97z"></path>
                        </svg>
                    </div>
                    <div class="hidden-text">
                        <p>
                            <span class="main">Logout</span>
                            <span class="subtext">Terminate your current session</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "Navbar",
    computed: {
        hasUnreadMessage() {
            return this.$store.getters.getNewUnreadMessage;
        },
        hasConnectionRequest() {
            return this.$store.getters.getNewConnectionRequest;
        },
        hasSettingsNotification() {
            return this.$store.getters.getNewSettingsNotification;
        }
    },
}
</script>

<style scoped lang="scss">
.side-nav {
    width: 100px;
    height: 100%;
    color: #909196;

    ul {
        background: #141419;
        padding: 0;
        margin: 0;
        list-style-type: none;
        margin-block-start: unset;
        margin-block-end: unset;
        margin-inline-start: unset;
        margin-inline-end: unset;
        padding-inline-start: unset;
        position: relative;
        height: 100%;

        li {
            position: relative;
            transition: all 0.8s ease;

            .update-pin {
                position: absolute;
                top: 20px;
                right: 27px;
                height: 10px;
                width: 10px;
                border-radius: 50%;
                animation: push 0.3s linear 1;

                &.red {
                    background: #b51f1f;
                }

                &.blue {
                    background: #1fa3b5;
                }

                &.green {
                    background: #17b92a;
                }
            }

            @keyframes push {
                0% {
                    transform: scale(0.5);
                }
                50% {
                    transform: scale(1);
                }
                75% {
                    transform: scale(1.5);
                }
                100% {
                    transform: scale(1);
                }
            }

            a {
                transition: all 0.8s ease;
            }

            .hidden-text {
                position: absolute;
                top: 0;
                right: 0;
                width: 250px;
                height: 100%;
                background: #23232bfc;
                z-index: 1;
                transition: all 0.5s ease;
                padding: 12px;
                display: flex;
                flex-direction: column;
                justify-content: center;

                p {
                    margin: 0;

                    .main {
                        color: #ffffff;
                        font-size: 16px;
                        display: block;
                    }

                    .subtext {
                        color: rgba(255, 255, 255, 0.79);
                        font-size: 12px;
                        display: block;
                    }
                }
            }

            &:hover {
                .hidden-text {
                    right: -250px;
                    box-shadow: 0 0 19px -6px #0f0f0f;
                }
            }
        }

        .logout-item {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;

            .hidden-text {
                top: unset;
                bottom: 0;
            }

            &:hover {
                svg {
                    fill: red;
                }
            }
        }

        .router-link-exact-active {
            .side-nav__menu-item__img-container {
                background: #23232bfc;
            }

            svg {
                fill: #ffffff;
            }
        }
    }

    &__main-logo {
        display: flex;

        img {
            display: block;
            max-width: 75px;
            margin: 20px auto 100px;
        }

        a {
            width: 100%;
        }
    }

    &__menu-item {
        display: flex;

        svg {
            margin: 8px auto;
            display: block;
            max-height: 25px;
            max-width: 25px;
            fill: #a1a1a1;
        }

        &__img-container {
            width: 100%;
            height: 100%;
            z-index: 2;
            background: #141419;
            padding: 20px 0;
            position: relative;
        }

        &:hover {
            svg {
                fill: #ffffff;
            }
        }
    }
}
</style>
