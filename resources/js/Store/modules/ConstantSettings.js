const constantSettings = {
    state: {
        settings: {
            scrambleTimeToAnimateIn: 50,
            timeBetweenTimeouts: 100,
            profileImageStorageUrl: "/profile-images/",
            profileImageDefault: "default_user.png",
            stateId: {
                pending: 0,
                accepted: 1,
                rejected: 2,
            }
        }
    },
    getters: {
        getScrambleAnimationTime: state => state.settings.scrambleTimeToAnimateIn,
        getMessageTimeOutTime: state => state.settings.timeBetweenTimeouts,
        getImageStorageUrl: state => state.settings.profileImageStorageUrl,
        getDefaultProfilePicture: state => state.settings.profileImageDefault,
        getStateIds: state => state.settings.stateId
    }
};

export default constantSettings;
