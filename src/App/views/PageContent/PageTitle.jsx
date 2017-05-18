var React = require("react");

var PageTitle = React.createClass({
    render() {
        return (
            <header>
                <h1 dangerouslySetInnerHTML={{ __html: this.props.data.Title }}></h1>
                <div class="lead" dangerouslySetInnerHTML={{ __html: this.props.data.Summary }}></div>
            </header>
        );
    }
});

module.exports = PageTitle;