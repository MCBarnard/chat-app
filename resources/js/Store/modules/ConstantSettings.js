const constantSettings = {
    state: {
        settings: {
            scrambleTimeToAnimateIn: 50,
            timeBetweenTimeouts: 100
        }
    },
    getters: {
        getScrambleAnimationTime: state => state.settings.scrambleTimeToAnimateIn,
        getMessageTimeOutTime: state => state.settings.timeBetweenTimeouts,
    }
};

export default constantSettings;
