var React = require("react");
var PropTypes = require('prop-types');

var Placeholder = React.createClass({
    defaultProps: {
        placeholderKey: 'not set',
        isDynamic: false
    },
    componentDidMount() {
        // some logic here - we only test if the method is called
    },
    render() {
        let self = this;

        // If we have a props object called "placeholder" this is supplied by 
        // Sitecore so return the value in the placeholder key and ignore 
        // any of the static front end code in the file.
        //
        // TODO: Workout Dynamic Placholders here.... they will have a guid
        if (this.props.hasOwnProperty('placeholder')){
            return this.renderSitecore();
        } else {
            return this.renderFED();
        }
    },
    renderSitecore() {
        let self = this;
        if (this.props.isDynamic) {
            return (
                <div>{this.props.placeholder.$Id[this.props.placeholderKey]}</div>    
            )
        }

        return (
            <div>{this.props.placeholder[this.props.placeholderKey]}</div>
        );
    },
    renderFED() {
        let self = this;

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

            return ( <h2>No Content</h2> );
        }
        if (this.props.children) {
            let content = [];
            if (React.Children.count(this.props.children) > 0) {
                content = React.Children.map(this.props.children, (child, i) => {
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

            return this.props.children;
        }

        return (
            <h2>No content</h2>
        )
    }
});

module.exports = Placeholder;