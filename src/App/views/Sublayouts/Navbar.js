var React = require("react");
var Placeholder = require("./../placeholders/Placeholder");

var Data = require("./../../data/Data").Data;
var Logo = require("./../Identity/Logo");
var PrimaryMenu = require("./../Navigation/PrimaryMenu");
var ActivityNavigation = require("./../Navigation/ActivityNavigation");

var Navbar = React.createClass({
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

                        <Placeholder placeholderKey={'navbar-left'}>
                            <Logo data={Data.getLogo()} />
                        </Placeholder>
                    </div>
                    <div class="navbar-center">
                        <Placeholder placeholderKey={'navbar-center'}>
                            <PrimaryMenu data={Data.getPrimaryNav()} />
                        </Placeholder>
                    </div>
                    <div class="navbar-right">
                        <Placeholder placeholderKey={'navbar-right'}>
                            <ActivityNavigation />
                        </Placeholder>
                    </div>
                </div>
            </nav>
        );
    }
});

module.exports = Navbar;