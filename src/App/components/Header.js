import React from "react";
import Placeholder from "sitecore.react.placeholders";

import HeaderTop from "./Sublayouts/HeaderTop";
import Navbar from "./Sublayouts/Navbar";

class Header extends React.Component {
    render() {
        return (
            <header class="header-static">
                <Placeholder placeholderKey={'header-top'}>
                    <HeaderTop />
                </Placeholder>
                <Placeholder placeholderKey={'navbar'}>
                    <Navbar />
                </Placeholder>
            </header>
        );
    }
}

export default Header;