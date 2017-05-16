var React = require("react");

var Logo = React.createClass({
    render() {
        return (
            <a class="navbar-brand" href={this.props.data.HomeUrl}>
                <span class="logo" dangerouslySetInnerHTML={{ __html: this.props.data.LogoImage}}></span>
            </a>
        );
    }
});

module.exports = Logo;