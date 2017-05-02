import React from "react";
import Placeholder from "./../../Test/Placeholders";

import { DummyData } from "./../../data/DummyData";
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
                            <Logo HomeUrl="/" LogoImage={'<img src="http://habitat.demo.sitecore.net/-/media/Habitat/Images/Logo/Habitat.png?h=50&amp;la=en&amp;mh=50&amp;w=200&amp;hash=6D917968B80F4E41CB1D1040DCEBB260AAD233BB" alt="Habitat Logo" width="200" height="50" DisableWebEdit="False" />'} />
                        </Placeholder>
                    </div>
                    <div class="navbar-center">
                        <Placeholder key={'navbar-center'}>
                            <PrimaryMenu data={DummyData.getPrimaryNav()} />
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