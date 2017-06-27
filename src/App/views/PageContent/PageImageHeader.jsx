var React = require("react");
var Placeholder = require("sitecore.react.placeholders");

var PageImageHeader = React.createClass({
    render() {
        let backgroundImage = { backgroundImage: "url('" + this.props.data.ImageUrl + "')" };

        return (
            <header class="page-header bg-media bg-parallax" style={backgroundImage}>
                <Placeholder placeholderKey={'page-header'} placeholder={this.props.placeholder}>
                    {this.props.children}
                </Placeholder>
            </header>
        );
    }
});

module.exports = PageImageHeader;