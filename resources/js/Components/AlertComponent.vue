<template>
    <div class="main-component" :class="[{'closed': closed}, {'slide-in': $props.slideIn}, {'loaded': loaded}]">
        <div class="color-circle" :class="[{'green': success}, {'orange': warning}, {'red': danger}, {'blue': info}]"></div>
        <div class="wrapper" :class="[{'green': success}, {'orange': warning}, {'red': danger}, {'blue': info}]">
            <div class="wrapper__section-container">
                <button v-if="dismissible" @click="closed = true">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50">
                        <path
                            d="M2.75 6a.75.75 0 000 1.5h18.5a.75.75 0 000-1.5H2.75zM6 11.75a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H6.75a.75.75 0 01-.75-.75zm4 4.938a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75z"></path>
                    </svg>
                </button>
                <div class="wrapper__section-container__left">
                    <div v-if="success" class="green-svg">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50">
                            <path fill-rule="evenodd"
                                  d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm16.28-2.72a.75.75 0 00-1.06-1.06l-5.97 5.97-2.47-2.47a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l6.5-6.5z"></path>
                        </svg>
                    </div>
                    <div v-else-if="warning" class="orange-svg">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50">
                            <path d="M13 15.5a1 1 0 11-2 0 1 1 0 012 0zm-.25-8.25a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0v-4.5z"></path>
                            <path fill-rule="evenodd"
                                  d="M11.46.637a1.75 1.75 0 011.08 0l8.25 2.675A1.75 1.75 0 0122 4.976V10c0 6.19-3.77 10.705-9.401 12.83a1.699 1.699 0 01-1.198 0C5.771 20.704 2 16.19 2 10V4.976c0-.76.49-1.43 1.21-1.664L11.46.637zm.617 1.426a.25.25 0 00-.154 0L3.673 4.74a.249.249 0 00-.173.237V10c0 5.461 3.28 9.483 8.43 11.426a.2.2 0 00.14 0C17.22 19.483 20.5 15.46 20.5 10V4.976a.25.25 0 00-.173-.237l-8.25-2.676z"></path>
                        </svg>
                    </div>
                    <div v-else-if="danger" class="red-svg">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="50" height="50">
                            <path fill-rule="evenodd"
                                  d="M3.404 12.596a6.5 6.5 0 119.192-9.192 6.5 6.5 0 01-9.192 9.192zM2.344 2.343a8 8 0 1011.313 11.314A8 8 0 002.343 2.343zM6.03 4.97a.75.75 0 00-1.06 1.06L6.94 8 4.97 9.97a.75.75 0 101.06 1.06L8 9.06l1.97 1.97a.75.75 0 101.06-1.06L9.06 8l1.97-1.97a.75.75 0 10-1.06-1.06L8 6.94 6.03 4.97z"></path>
                        </svg>
                    </div>
                    <div v-else class="blue-svg">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="50" height="50">
                            <path fill-rule="evenodd"
                                  d="M6.5.75a.75.75 0 00-1.5 0V2H3.75A1.75 1.75 0 002 3.75V5H.75a.75.75 0 000 1.5H2v3H.75a.75.75 0 000 1.5H2v1.25c0 .966.784 1.75 1.75 1.75H5v1.25a.75.75 0 001.5 0V14h3v1.25a.75.75 0 001.5 0V14h1.25A1.75 1.75 0 0014 12.25V11h1.25a.75.75 0 000-1.5H14v-3h1.25a.75.75 0 000-1.5H14V3.75A1.75 1.75 0 0012.25 2H11V.75a.75.75 0 00-1.5 0V2h-3V.75zm5.75 11.75h-8.5a.25.25 0 01-.25-.25v-8.5a.25.25 0 01.25-.25h8.5a.25.25 0 01.25.25v8.5a.25.25 0 01-.25.25zM5.75 5a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75h-4.5zm.75 4.5v-3h3v3h-3z"></path>
                        </svg>
                    </div>
                </div>
                <div class="wrapper__section-container__right">
                    <div class="wrapper__section-container__right__heading" :class="[{'green': success}, {'orange': warning}, {'red': danger}, {'blue': info}]">
                        {{ message }}
                    </div>
                    <div class="wrapper__section-container__right__message">
                        {{ subtitle }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AlertComponent",
    data() {
        return {
            closed: false,
            loaded: false,
        }
    },
    mounted() {
        setTimeout(() => {
            this.loaded = true;
        }, 200);
    },
    computed: {
        success() {
            return this.$props.variant.toLowerCase() === "success";
        },
        warning() {
            return this.$props.variant.toLowerCase() === "warning";
        },
        danger() {
            return this.$props.variant.toLowerCase() === "danger";
        },
        info() {
            return this.$props.variant.toLowerCase() === "info";
        },
    },
    props: {
        variant: {
            type: String,
            default: "info"
        },
        dismissible: {
            type: Boolean,
            default: true
        },
        message: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: true
        },
        slideIn: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped lang="scss">
.main-component {
    position: relative;
    overflow: hidden;
    max-height: 300px;

    &.slide-in {
        transform: translateX(-200%);

        &.loaded {
            transition: all 1s linear;
            transform: unset;
        }
    }

    &.closed {
        max-height: 0;

        .wrapper, .color-circle {
            transform: translateX(200%);
        }
    }
}

.color-circle {
    position: absolute;
    width: 100%;
    max-width: 100%;
    top: 0;
    left: 0;
    border-radius: 15px;
    z-index: 0;
    height: calc(100% - 40px);
    margin: 20px;

    &.red {
        background: linear-gradient(to right, red -140%, transparent 25%);
    }

    &.green {
        background: linear-gradient(to right, #00da2f -140%, transparent 25%);
    }

    &.orange {
        background: linear-gradient(to right, #ff9d02 -140%, transparent 25%);
    }

    &.blue {
        background: linear-gradient(to right, #02d1ff -140%, transparent 25%);
    }
}

.wrapper {
    transition: transform 1s ease;
    max-width: 100%;
    padding: 5px;
    margin: 20px;
    background: rgba( 216, 215, 215, 0.05 );
    box-shadow: 0 -1px 19px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 20.0px );
    -webkit-backdrop-filter: blur( 20.0px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );

    &.red {
        border: 1px solid red;
    }

    &.green {
        border: 1px solid #00da2f;
    }

    &.orange {
        border: 1px solid #ff9d02;
    }

    &.blue {
        border: 1px solid #02d1ff;
    }

    &__section-container {
        display: flex;
        position: relative;

        button {
            position: absolute;
            top: 0;
            right: 0;
            background: transparent;
            outline: none!important;
            cursor: pointer;
            height: 20px;

            svg {
                fill: #6e6e6e;
                width: 20px;
                height: 20px;
                transition: all 0.3s ease;
            }

            &:hover svg {
                fill: #1e344b;
            }
        }

        &__left {
            max-width: 100px;
            padding: 10px;

            svg {
                width: 25px;
            }

            .red-svg {
                fill: red;
            }

            .green-svg {
                fill: #00da2f;
            }

            .orange-svg {
                fill: #ff9d02;
            }

            .blue-svg {
                fill: #02d1ff;
            }
        }

        &__right {
            width: 100%;
            padding: 10px;

            &__heading {
                font-weight: 500;
                text-transform: capitalize;

                &.red {
                    color: red;
                }

                &.green {
                    color: #00da2f;
                }

                &.orange {
                    color: #ff9d02;
                }

                &.blue {
                    color: #02d1ff;
                }
            }

            &__message {
                color: #5f7586;
            }
        }
    }
}
</style>
