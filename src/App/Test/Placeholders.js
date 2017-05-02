import React from 'react';
import PropTypes from 'prop-types';

class Placeholder extends React.Component {
    componentDidMount() {
        // some logic here - we only test if the method is called
    }
    render() {
        if (this.props.content) {
            return this.props.content;
        }
        if (this.props.children){
            return this.props.children;
        }

        return (
            <h2>No content</h2>
        )
    }
}

// Placeholder.propTypes = {
//     placeholderKey: PropTypes.string,
//     sitecoreChildren: PropTypes.string,
//     children: PropTypes.oneOf([
//         PropTypes.node,
//         PropTypes.element,
//         PropTypes.obejct
//     ]),
//     isDynamic: PropTypes.bool
// };

Placeholder.defaultProps = {
    placeholderKey: 'not set',
    isDynamic: false,
    isSitecore: false
};

export default Placeholder;