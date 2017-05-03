import React from 'react';
import PropTypes from 'prop-types';

class Placeholder2 extends React.Component {
    componentDidMount() {
        // some logic here - we only test if the method is called
    }
    render() {
        let self = this;

        // If we have a props object called "placeholder" this is supplied by 
        // Sitecore so return the value in the placeholder key and ignore 
        // any of the static front end code in the file.
        //
        // TODO: Workout Dynamic Placholders here.... they will have a guid
        if (this.props.hasOwnProperty('placeholder')){
            if (this.props.isDynamic) {
                return (
                    <div>{this.props.placeholder.$Id[this.props.placeholderKey]}</div>    
                )
            }

            return (
                <div>{this.props.placeholder[this.props.placeholderKey]}</div>
            );
        }

        if (this.props.content) {
            let content = [];
            let fallbackToAll = true;

            if (typeof (this.props.content) === "string") {
                return (<span>{this.props.content}</span>);
            }

            if (React.Children.count(this.props.content) > 0) {
                content = React.Children.map(this.props.content, (child, i) => {
                    if (child.props.hasOwnProperty('placeholderKey'))
                    {
                        if (child.props.placeholderKey == self.props.placeholderKey) {
                            return child;
                        }
                    }
                });
            }

            if (content.length > 0) {
                return (
                    <div>{content}</div>
                );
            }

            return (null);
        }
        if (this.props.children) {
            var content = [];
            React.Children.map(this.props.children, (child, i) => {
                if (child.props.placeholderKey == self.props.placeholderKey) {
                    content.push(child);
                }
            });

            if (content.length > 0) {
                return content;
            }

            return this.props.children;
        }

        return (
            <h2>No content</h2>
        )
    }
}

Placeholder2.defaultProps = {
    placeholderKey: 'not set',
    isDynamic: false
};

export default Placeholder2;