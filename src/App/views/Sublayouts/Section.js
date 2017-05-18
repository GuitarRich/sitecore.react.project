var React = require("react");
var Placeholder = require("./../placeholders/Placeholder");

var PageHeader = React.createClass({
    render() {
        return (
            <section class="section section-full @Model.Rendering.GetBackgroundClass()">
                <Placeholder placeholderKey={'section'} isDynamic={true} content={this.props.children} placeholder={this.props.placeholder} />
            </section>
        );
    }
});

module.exports = PageHeader;