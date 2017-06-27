var React = require("react");
var Placeholder = require("sitecore.react.placeholders");

var PageHeader = React.createClass({
    render() {
        return (
            <header class="page-header">
                <Placeholder placeholderKey={'page-header'} placeholder={this.props.placeholder}>
                    {this.props.children}
                </Placeholder>
            </header>
        );
    }
});

module.exports = PageHeader;