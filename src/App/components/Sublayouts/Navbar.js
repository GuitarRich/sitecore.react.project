import React from "react";
import Placeholder from "sitecore.react.placeholders";

import { Data } from "./../../data/Data";
import Logo from "./../Identity/Logo"
import PrimaryMenu from "./../Navigation/PrimaryMenu";
import ActivityNavigation from "./../Navigation/ActivityNavigation";

export default class Navbar extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-default navbar-static" id="mainNavbar">
                <div class="container">
                    <div class="navbar-left">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#siteNavbar" aria-expanded="false">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>

                        <Placeholder key={'navbar-left'}>
                            <Logo data={Data.getLogo()} />
                        </Placeholder>
                    </div>
                    <div class="navbar-center">
                        <Placeholder key={'navbar-center'}>
                            <PrimaryMenu data={Data.getPrimaryNav()} />
                        </Placeholder>
                    </div>
                    <div class="navbar-right">
                        <Placeholder key={'navbar-right'}>
                            <ActivityNavigation />
                        </Placeholder>
                    </div>
                </div>
            </nav>
        );
    }
}