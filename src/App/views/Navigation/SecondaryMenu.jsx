var React = require("react");

var SecondaryMenu = React.createClass({
    renderChildren(children) {
        let self = this;

        if (children == null){
            return (null);
        }
        if (children.Items.length <= 0) {
            return (null);
        }

        let menuItem = children.Items.map(function (item, index) {
            let cssClass = item.IsActive ? "active" : "";
            return (
                <li class={cssClass} key={index}>
                    <a href={item.Url} target={item.Target} dangerouslySetInnerHTML={{ __html: item.Title }}>
                    </a>
                    {self.renderChildren(item.Children)}
                </li>
            );
        });

        return menuItem;
    },
    render() {
        return (
            <div>
                <h4>
                    <a href={this.props.data.Url} target={this.props.data.Target} dangerouslySetInnerHTML={{ __html: this.props.data.Title }}></a>
                </h4>
                <div class="sidebar sidebar-static">
                    <ul class="nav nav-pills nav-stacked">
                        {this.renderChildren(this.props.data.Children)}
                    </ul>
                </div>
            </div>
        );
    }
});

module.exports = SecondaryMenu;