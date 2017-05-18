var React = require("react");

var GlobalSearch = React.createClass({
    render() {
        return (
            <li class="navbar-activity-search">
                <form action={this.props.data.SearchResultsUrl} class="navbar-form" role="search">
                    <div class="form-group">
                        <input type="text" name="query" placeholder={this.props.data.SearchBoxTitle} autoComplete="off" />
                    </div>
                </form>

                <a href="#" class="btn navbar-toggle-search" data-toggle-class="is-searching" data-target="#mainNavbar">
                    <span class="glyphicon glyphicon-search"></span>
                </a>
            </li>
        );
    }
});

module.exports = GlobalSearch;