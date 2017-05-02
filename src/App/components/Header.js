import React from "react";
import Placeholder from "./../Test/Placeholders";

import HeaderTop from "./Sublayouts/HeaderTop";
import Navbar from "./Sublayouts/Navbar";

class Header extends React.Component {
    render() {
        return (
            <header class="header-static">
                <Placeholder key={'header-top'}>
                    <HeaderTop />
                </Placeholder>
                <Placeholder key={'navbar'}>
                    <Navbar />
                </Placeholder>
            </header>
        );
    }
}

export default Header;