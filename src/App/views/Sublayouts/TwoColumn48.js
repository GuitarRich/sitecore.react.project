import React from "react";
//import Placeholder from "sitecore.react.placeholders";
import Placeholder2 from "./../../Test/Placeholders2";

export default class TwoColumn48 extends React.Component {
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <Placeholder2 placeholderKey={'col-narrow-1'} isDynamic={true} content={this.props.children} />
                    </div>
                    <div class="col-md-8">
                        <Placeholder2 placeholderKey={'col-wide-1'} isDynamic={true} content={this.props.children} />
                    </div>
                </div>
            </div>
        );
    }
}