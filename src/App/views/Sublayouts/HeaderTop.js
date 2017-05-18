var React = require("react");
var Placeholder = require("./../placeholders/Placeholder");

var Data = require("./../../data/Data").Data;
var LinkMenu  = require("./../Navigation/LinkMenu");

var HeaderTop = React.createClass({
    render() {
        return (
            <div class="header-top">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 hidden-xs">
                            <Placeholder placeholderKey={'left-header-top'} placeholder={this.props.placeholder}>
                                <LinkMenu data={Data.getSocialMenu()} isSocial={true} />
                            </Placeholder>
                        </div>
                        <div class="col-md-6 hidden-xs">
                            <div class="pull-right">
                                <Placeholder placeholderKey={'right-header-top'} placeholder={this.props.placeholder}>
                                    <LinkMenu data={Data.getTopMenu()} isSocial={false} />
                                </Placeholder>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = HeaderTop;