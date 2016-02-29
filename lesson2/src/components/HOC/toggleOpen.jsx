import React, {Component} from 'react';

export default function (CustomComponent, isOpen = true) {
    return class extends Component {
        state = {
            isOpen: isOpen
        };

        render() {
            return <CustomComponent
                {...this.state}
                {...{toggleOpen: this.toggleOpen}}
                {...this.props}
            />
        }

        toggleOpen = () => {
            this.setState({
                isOpen: !this.state.isOpen
            })
        }
    }
}