var React = require("react");
var Placeholder = require("./../placeholders/Placeholder");


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