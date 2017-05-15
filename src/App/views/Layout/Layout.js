//@tscheck
import React from "react";
import Placeholder from "sitecore.react.placeholders"

import HeaderTop from "./../Sublayouts/HeaderTop";
import Navbar from "./../Sublayouts/Navbar";

export default class Layout extends React.Component {
    render() {
        return (
            <div id="main-container">
                <header class="header-static">
                    <Placeholder placeholderKey={'header-top'} placeholder={this.props.placeholder}>
                        <HeaderTop />
                    </Placeholder>
                    <Placeholder placeholderKey={'navbar'} placeholder={this.props.placeholder}>
                        <Navbar />
                    </Placeholder>
                </header>

                <main role="main">
                    <Placeholder placeholderKey={'main'} placeholder={this.props.placeholder}>
                        {this.props.children}
                    </Placeholder>
                </main>

                <footer class="bg-dark">
                    <Placeholder placeholderKey={'footer'} placeholder={this.props.placeholder}>
                        <p>todo: add footer</p>
                    </Placeholder>
                </footer>
            </div>
        );
    }
}