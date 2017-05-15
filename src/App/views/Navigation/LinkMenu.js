import React from 'react';

class LinkMenu extends React.Component {
    render() {
        var self = this;

        var cssClass = 'nav nav-service navbar-nav';
        if (this.props.data.isSocial) {
            cssClass += ' nav-social';
        } else {
            cssClass += ' nav-pills';
        }

        var navItems = this.props.data.links.map(function(link, index){
            var btnClass = 'btn';
            var icon = '';
            if (self.props.data.isSocial){
                btnClass += ' btn-social-icon btn-' + link.class;
                icon = "fa fa-" + link.class;

                return (
                    <li class="" key={index}>
                        <a href={link.url} target={link.target} title={link.title} class={btnClass}>
                            <span class={icon}></span>
                        </a>
                    </li>
                );
            } else {
                return (
                    <li class="" key={index}>
                        <a href={link.url} target={link.target} title={link.title} dangerouslySetInnerHTML={{__html: link.title}}></a>
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
}

export default LinkMenu;