var React = require("react");
var Placeholder = require("./../placeholders/Placeholder");

var OneColumn = React.createClass({
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <Placeholder placeholderKey={'col-huge'} isDynamic={true} content={this.props.children} />
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = OneColumn;