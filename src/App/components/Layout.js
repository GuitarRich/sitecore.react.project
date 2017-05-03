import React from "react";
import Placeholder from "sitecore.react.placeholders"

import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends React.Component {
    render() {
        return (
        <div id="main-container">
            <Placeholder placeholderKey="header" data={this.props} >
                <Header />
            </Placeholder>

            <main role="main">
                <Placeholder placeholderKey={'main'}>
                    {this.props.children}
                </Placeholder>
            </main>

            <footer>

            </footer>
        </div>
    );
}
}