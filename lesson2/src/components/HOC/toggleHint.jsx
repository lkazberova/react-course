import React, {Component} from 'react';

export default function (CustomComponent) {
    return class extends Component {
        state = {
            isVisibleHint: false
        };

        render() {
            return <CustomComponent
                {...this.state}
                {...{toggleVisibleHint: this.toggleVisibleHint}}
                {...this.props}
            />
        }

        toggleVisibleHint = () => {
            this.setState({
                isVisibleHint: !this.state.isVisibleHint
            })
        }
    }
}
