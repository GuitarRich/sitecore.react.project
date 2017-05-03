import React from "react";
import Placeholder from "sitecore.react.placeholders";

export default class PageHeader extends React.Component {
    render() {
        return (
            <header class="page-header">
                <Placeholder placeholderKey={'page-header'} content={this.props.children} />
            </header>
        );
    }
}