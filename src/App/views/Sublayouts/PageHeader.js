var React = require("react");
var Placeholder = require("./../placeholders/Placeholder");


var PageHeader = React.createClass({
    render() {
        return (
            <header class="page-header">
                <Placeholder placeholderKey={'page-header'} content={this.props.children} />
            </header>
        );
    }
});

module.exports = PageHeader;