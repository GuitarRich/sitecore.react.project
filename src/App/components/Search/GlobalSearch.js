import React from 'react';

export default class GlobalSearch extends React.Component {
    render() {
        return (
            <li class="navbar-activity-search">
                <form action={this.props.data.SearchResultsUrl} class="navbar-form" role="search">
                    <div class="form-group">
                        <input type="text" name="query" placeholder={this.props.data.SearchBoxTitle} autocomplete="off" />
                    </div>
                </form>

                <a href="#" class="btn navbar-toggle-search" data-toggle-class="is-searching" data-target="#mainNavbar">
                    <span class="glyphicon glyphicon-search"></span>
                </a>
            </li>
        );
    }
}