import React from "react";
import Placeholder from "./../../Test/Placeholders";

import LinkMenu from "./../Navigation/LinkMenu"

export default class HeaderTop extends React.Component {
    render() {
        return (
            <div class="header-top">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 hidden-xs">
                            <Placeholder key={'left-header-top'}>
                                <LinkMenu data={this.getSocialMenu()} isSocial={true} />
                            </Placeholder>
                        </div>
                        <div class="col-md-6 hidden-xs">
                            <div class="pull-right">
                                <Placeholder key={'right-header-top'}>
                                    <LinkMenu data={this.getTopMenu()} isSocial={false} />
                                </Placeholder>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    getSocialMenu() {
        return {
            'isSocial': true,
            'links': [
                { 'url': 'http://facebook.com/sitecore', 'target': '_blank', 'title': 'Facebook', 'class': 'facebook'},
                { 'url': 'http://twitter.com/sitecore', 'target': '_blank', 'title': 'Twitter', 'class': 'twitter'},
                { 'url': 'https://www.youtube.com/user/sitecorechannel', 'target': '_blank', 'title': 'YouTube', 'class': 'youtube'}
            ]
        };
    }
    getTopMenu() {
        return {
            'isSocial': false,
            'links': [
                { 'url': 'https://github.com/Sitecore/Habitat/', 'target': '_blank', 'title': 'Habitat', 'class': ''},
                { 'url': 'http://helix.sitecore.net', 'target': '_blank', 'title': 'Helix', 'class': ''},
                { 'url': 'https://www.sitecore.net', 'target': '_blank', 'title': 'Sitecore.net', 'class': ''}
            ]
        };
    }
};