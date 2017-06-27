var React = require("react");
var Placeholder = require("sitecore.react.placeholders");

var Data = require("./../../data/Data").Data;
var LanguageSelector = require("./../Language/LanguageSelector");
var GlobalSearch = require("./../Search/GlobalSearch");

var ActivityNavigation = React.createClass({
    render() {
        return(
            <div class="navbar-activity">
                <ul class="nav navbar-nav">
                    <Placeholder key={'navbar-activity'}>
                        <li>
                            <ul class="nav navbar-nav">
                                <LanguageSelector data={Data.getLanguages()} />
                                <GlobalSearch data={Data.getSearchModel()} />
                            </ul>
                        </li>
                    </Placeholder>
                </ul>
            </div>
        );
    }
});

module.exports = ActivityNavigation;