var React = require("react");
var Placeholder = require("./../placeholders/Placeholder");

var PageImageHeader = React.createClass({
    render() {
        let backgroundImage = { backgroundImage: "url('" + this.props.data.ImageUrl + "')" };

        return (
            <header class="page-header bg-media bg-parallax" style={backgroundImage}>
                <Placeholder placeholderKey={'page-header'} content={this.props.children} />
            </header>
        );
    }
});

module.exports = PageImageHeader;