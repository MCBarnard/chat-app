<template>
    <div class="profile-page">
        <div class="page-header">
            <h1>Profile</h1>
        </div>
        <alert-component heading="This looks weird right now..."
                         body="We currently built this to be able to upload a profile picture and test the functionality, styling will come soon"
                         variant="warning"
                         :dismissible="false"
                         :slide-in="false"
        />
        <form action="#" @submit.prevent="submitProfile">
            <input type="file" @change="profilePictureSelected" ref="profile_image" placeholder="Submit an Image">
            <button type="submit">Submit</button>
        </form>
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
            }
        }
    },
    methods: {
        submitProfile() {
            // let formData = new FormData();
            // console.log(this.profileData.picture)
            // formData.append('image_file', this.profileData.picture);
            // console.log(formData);
            const formData = new FormData();
            formData.append('image_file', this.profileData.picture);
            formData.append('image_name', "random_image");

            axios.post("profile-data/update", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            }).then(response => {
                console.log(response)
            }). catch(error => {
                console.error(error.response.data)
            });
        },
        profilePictureSelected(){
            this.profileData.picture = this.$refs.profile_image.files[0];
        }
    }
}
</script>

<style scoped lang="scss">
.profile-page {
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

