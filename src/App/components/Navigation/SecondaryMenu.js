import React from "react";

export default class SecondaryMenu extends React.Component {
    renderChildren(children) {
        let self = this;
        if (children.length <= 0) {
            return (null);
        }

        let menuItem = children.map(function (item, index) {
            let cssClass = item.IsActive ? "active" : "";
            return (
                <li class={cssClass} key={index}>
                    <a href={item.Url} target={item.Target} dangerouslySetInnerHTML={{ __html: item.NavigationTitle }}>
                    </a>
                    {self.renderChildren(item.Children)}
                </li>
            );
        });

        return menuItem;
    }
    render() {
        return (
            <div>
                <h4>
                    <a href={this.props.data.Url} target={this.props.data.Target} dangerouslySetInnerHTML={{ __html: this.props.data.NavigationTitle }}></a>
                </h4>
                <div class="sidebar sidebar-static">
                    <ul class="nav nav-pills nav-stacked">
                        {this.renderChildren(this.props.data.Items)}
                    </ul>
                </div>
            </div>
        );
    }

}