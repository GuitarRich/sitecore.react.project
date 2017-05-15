import React from "react";
import Placeholder from "sitecore.react.placeholders";

export default class PageHeader extends React.Component {
    render() {
        return (
            <section class="section section-full @Model.Rendering.GetBackgroundClass()">
                <Placeholder placeholderKey={'section'} isDynamic={true} content={this.props.children} />
            </section>
        );
    }
}