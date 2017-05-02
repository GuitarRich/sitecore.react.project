import React from "react";

export default class Logo extends React.Component {
    render() {
        return (
            <a class="navbar-brand" href={this.props.HomeUrl}>
                <span class="logo"  dangerouslySetInnerHTML={{ __html: this.props.LogoImage}}></span>
            </a>
        );
    }
}