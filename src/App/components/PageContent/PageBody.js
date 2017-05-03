import React from "react";

export default class PageBody extends React.Component {
    render() {
        return (
            <div class="m-b-2" dangerouslySetInnerHTML={{ __html: this.props.data.Body }}></div>
        );
    }
}