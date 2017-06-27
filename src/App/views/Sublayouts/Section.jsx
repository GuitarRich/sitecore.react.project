var React = require("react");
var Placeholder = require("sitecore.react.placeholders");

var PageHeader = React.createClass({
    render() {
        return (
            <section class="section section-full @Model.Rendering.GetBackgroundClass()">
                <Placeholder placeholderKey={'section'} isDynamic={true} placeholder={this.props.placeholder}>
                    {this.props.children}
                </Placeholder>
            </section>
        );
    }
});

module.exports = PageHeader;