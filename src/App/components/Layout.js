import React from "react";
import Placeholder from "../Test/Placeholders"

import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends React.Component {
    render() {
        return (
        <div id="main-container">
            <Placeholder key="header">
                <Header />
            </Placeholder>

            <main role="main">
                <Placeholder key={'main'}>
                    {this.props.children}
                </Placeholder>
            </main>

            <footer>

            </footer>
        </div>
    );
}
}