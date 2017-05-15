import React from "react";
import Placeholder from "sitecore.react.placeholders";

export default class OneColumn extends React.Component {
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <Placeholder placeholderKey={'col-huge'} isDynamic={true} content={this.props.children} />
                    </div>
                </div>
            </div>
        );
    }
}