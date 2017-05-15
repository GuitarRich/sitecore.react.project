import React from "react";
import Placeholder from "sitecore.react.placeholders";

export default class PageImageHeader extends React.Component {
    render() {
        let backgroundImage = { backgroundImage: "url('" + this.props.data.ImageUrl + "')" };

        return (
            <header class="page-header bg-media bg-parallax" style={backgroundImage}>
                <Placeholder placeholderKey={'page-header'} content={this.props.children} />
            </header>
        );
    }
}