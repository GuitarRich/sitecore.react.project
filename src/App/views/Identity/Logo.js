import React from "react";

export default class Logo extends React.Component {
    render() {
        return (
            <a class="navbar-brand" href={this.props.data.HomeUrl}>
                <span class="logo" dangerouslySetInnerHTML={{ __html: this.props.data.LogoImage}}></span>
            </a>
        );
    }
}