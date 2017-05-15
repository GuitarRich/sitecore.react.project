import React from "react";
import Placeholder from "sitecore.react.placeholders";

import { Data } from "./../../data/Data";
import LinkMenu from "./../Navigation/LinkMenu"

export default class HeaderTop extends React.Component {
    render() {
        return (
            <div class="header-top">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 hidden-xs">
                            <Placeholder placeholderKey={'left-header-top'}>
                                <LinkMenu data={Data.getSocialMenu()} isSocial={true} />
                            </Placeholder>
                        </div>
                        <div class="col-md-6 hidden-xs">
                            <div class="pull-right">
                                <Placeholder placeholderKey={'right-header-top'}>
                                    <LinkMenu data={Data.getTopMenu()} isSocial={false} />
                                </Placeholder>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};