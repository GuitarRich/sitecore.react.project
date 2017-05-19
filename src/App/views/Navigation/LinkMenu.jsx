var React = require("react");

var LinkMenu = React.createClass({
    render() {
        var self = this;

        var cssClass = 'nav nav-service navbar-nav';
        if (this.props.data.IsSocial) {
            cssClass += ' nav-social';
        } else {
            cssClass += ' nav-pills';
        }

        var navItems = this.props.data.Items.map(function(link, index){
            var btnClass = 'btn';
            var icon = '';
            if (self.props.data.IsSocial){
                btnClass += ' btn-social-icon btn-' + link.Class;
                icon = "fa fa-" + link.Class;

                return (
                    <li class="" key={index}>
                        <a href={link.Url} target={link.Target} title={link.Title} class={btnClass}>
                            <span class={icon}></span>
                        </a>
                    </li>
                );
            } else {
                return (
                    <li class="" key={index}>
                        <a href={link.Url} target={link.Target} title={link.Title} dangerouslySetInnerHTML={{__html: link.Title}}></a>
                    </li>
                );
            }
        });

        return (
            <nav>
                <ul class={cssClass}>
                    {navItems}
                </ul>
            </nav>
        );
    }
});

module.exports = LinkMenu;