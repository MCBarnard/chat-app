<template>
    <div class="profile-page">
        <div class="page-header">
            <h1>Profile</h1>
        </div>

        <div class="profile-page__container">
            <alert-component message="This looks weird right now..."
                             subtitle="We are currently developing this section"
                             variant="info"
                             :dismissible="true"
                             :slide-in="true"
            />
            <alert-component
                class="dormant"
                :class="[{'show': savedProfilePicture}]"
                message="Successfully saved!"
                             subtitle="Your profile picture has been saved."
                             variant="success"
                             :dismissible="true"
                             :slide-in="savedProfilePicture"
            />
            <div class="profile-page__container__profile-picture">
                <div class="profile-page__container__profile-picture__outer">
                    <div class="profile-page__container__profile-picture__inner">
                        <img :src="this.profilePicture" ref="profile_preview" id="profile_preview" alt="User profile picture">
                    </div>
                </div>
                <form action="#" @submit.prevent="submitProfile">
                    <label for="profile-picture-input">
                        Change profile picture
                    </label>
                    <input id="profile-picture-input" type="file" @change="profilePictureSelected" ref="profile_image" placeholder="Submit an Image">
                    <button type="submit">Save Picture</button>
                </form>
            </div>
            <div class="profile-page__container__details">
                <div id="card-content">
                    <h2>Account Details</h2>
                    <table>
                        <tr>
                            <td>
                                <h4>Full Name</h4>
                                <span>{{ username }}</span>
                            </td>
                            <td>
                                <h4>Email</h4>
                                <span>{{ email }}</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h4>Connection ID</h4>
                                <span class="connection-id" @mouseover="resetCopyText" @click="copyConnectionId">{{ connectionId }}
                                    <span class="hidden-text">{{ hiddenTextComputed }}</span>
                                </span>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {globalMixin} from "../Mixins/GlobalMixin";
import AlertComponent from "../Components/AlertComponent";

export default {
    name: "ProfilePage",
    components: {
        AlertComponent,
    },
    mixins: [globalMixin],
    data() {
        return {
            profileData: {
                picture: ""
            },
            hiddenText: 'Copy',
            savedProfilePicture: false,
        }
    },
    computed: {
        hiddenTextComputed () {
            return this.hiddenText;
        },
        account () {
            return this.$store.getters.getUserAccount;
        },
        username () {
            return this.account.username;
        },
        email () {
            return this.account.email;
        },
        connectionId () {
            return this.account.connectionId;
        },
        profilePicture () {
            return this?.$store.getters.getImageStorageUrl + this.pictureOrDefaultPicture(this.account.profilePicture);
        }
    },
    methods: {
        resetCopyText() {
            this.hiddenText = 'Copy';
        },
        copyConnectionId() {
            this.copyStringToClipboard(this.connectionId);
            this.hiddenText = 'Copied!'
        },
        submitProfile() {
            const formData = new FormData();
            formData.append('image_file', this.profileData.picture);
            formData.append('image_name', "random_image");

            axios.post("profile-data/update", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            }).then(response => {
                this.$store.dispatch("ACT_ACCOUNT_PICTURE", response.data);
                this.savedProfilePicture = true;
            }). catch(error => {
                console.error(error.response.data)
            });
        },
        profilePictureSelected(){
            this.profileData.picture = this.$refs.profile_image.files[0];
            if (FileReader) {
                const fr = new FileReader();
                fr.onload = function () {
                    document.getElementById('profile_preview').src = fr.result;
                }
                fr.readAsDataURL(this.$refs.profile_image.files[0]);
            }
        }
    }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap');
.profile-page {
    background: #eff3ff;
    min-height: 100vh;

    .dormant {
        display: none;
    }

    .show {
        display: block;
    }

    &__container {
        max-width: 992px;
        margin: 20px auto;
        background: #ffffff;
        padding: 20px;

        &__profile-picture {
            display: flex;
            width: 100%;
            justify-content: space-evenly;
            position: relative;
            margin-bottom: 32px;

            &:after {
                content: '';
                width: 100%;
                max-width: 685px;
                height: 5px;
                border-radius: 5px;
                background: #0f0f0f;
                position: absolute;
                bottom: -25px;
            }

            form {
                display: flex;
                padding: 0 0 0 40px;
                flex-direction: column;
                justify-content: center;
            }

            label {
                display: block;
                max-width: 200px;
                margin: 0 auto 15px;
                text-align: center;
                word-wrap: break-word;
                color: #1a4756;
                background: #c7d6e3;
                padding: 10px 15px;
                font-weight: 400;
                font-family: 'Open Sans', sans-serif;
                cursor: pointer;
                transition: all 0.3s ease;

                &:hover {
                    background: #bccbdb;
                }
            }

            input {
                display: none;
            }

            button {
                display: block;
                max-width: 200px;
                margin: 0 0 15px auto;
                text-align: center;
                word-wrap: break-word;
                color: #1a4756;
                background: #ffffff;
                border: 1px solid #c7d6e3;
                padding: 10px 15px;
                font-weight: 400;
                font-family: 'Open Sans', sans-serif;
                cursor: pointer;
                transition: all 0.3s ease;

                &:hover {
                    background: #bccbdb;
                }
            }
        }

        &__profile-picture__inner {
            border-radius: 50%;
            width: 170px;
            height: 170px;
            overflow: hidden;
            margin: auto;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        &__profile-picture__outer {
            border-radius: 50%;
            width: 200px;
            height: 200px;
            overflow: hidden;
            background: #ffffff;
            display: flex;
            justify-content: center;
            flex-direction: column;
            box-shadow: -20px -18px 20px -12px #efefef, 17px 20px 20px -12px #d7d7d7;
        }

        &__details {
            font-family: 'Open Sans', sans-serif;
            max-width: 685px;
            width: 100%;
            margin: 50px auto auto auto;

            h3 {
                font-weight: 600;
            }

            #card-content {
                display:block;

                h2, h4 {
                    margin:0 0 5px 0;
                }

                h4 {
                    display:inline-block;
                    width:50%;
                    float:left;
                    line-height:42px;
                    height:42px;
                }

                table, tr, td {
                    display:block;
                    font-size:16px;
                }

                td {
                    padding:7px 10px 7px 10px;
                    border-top:1px solid #e3e3e3;
                    line-height:42px;
                    & > address {
                        line-height:initial;
                    }
                }

                td:empty {
                    display:none;
                }
                .connection-id {
                    cursor: pointer;
                    font-weight: 600;
                    position: relative;

                    .hidden-text {
                        position: absolute;
                        top: -45px;
                        left: 50%;
                        transform: translateX(-50%);
                        padding: 10px;
                        background: #f0f0f0;
                        border: 1px solid #f5f5f5;
                        text-align: center;
                        font-weight: 400;
                        font-size: 14px;
                        opacity: 0;
                        border-radius: 4px;
                        transition: opacity 0.6s ease;
                        line-height: 14px;
                    }
                    &:hover .hidden-text {
                        opacity: 0.8;
                    }
                }
            }
        }
    }
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

