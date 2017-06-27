var React = require("react");
var Placeholder = require("sitecore.react.placeholders");

var OneColumn = React.createClass({
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <Placeholder placeholderKey={'col-huge'} isDynamic={false} content={this.props.children} placeholder={this.props.placeholder} />
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = OneColumn;