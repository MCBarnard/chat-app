const constantSettings = {
    state: {
        settings: {
            messageTimeToAnimateIn: 1000
        }
    },
    getters: {
        getMessageAnimationTime: state => state.settings.messageTimeToAnimateIn,
    }
};

export default constantSettings;
