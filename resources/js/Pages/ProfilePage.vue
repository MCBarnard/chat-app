<template>
<div>
    <form action="#" @submit.prevent="submitProfile">
        <input type="file" @change="profilePictureSelected" ref="profile_image" placeholder="Submit an Image">
        <button type="submit">Submit</button>
    </form>
</div>
</template>

<script>
export default {
    name: "ProfilePage",
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

<style scoped>

</style>
