var React = require("react");

var PageBody = React.createClass({
    render() {
        return (
            <div class="m-b-2" dangerouslySetInnerHTML={{ __html: this.props.data.Body }}></div>
        );
    }
});

module.exports = PageBody;