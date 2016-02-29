export default {
    getInitialState() {
        return {
            isVisibleHint: false
        }
    },

    toggleVisibleHint: function() {
        this.setState({
            isVisibleHint: !this.state.isVisibleHint
        })
    }
}