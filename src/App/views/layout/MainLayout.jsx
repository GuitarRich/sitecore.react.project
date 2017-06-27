var React = require("react");
var Placeholder = require("sitecore.react.placeholders");
var HeaderTop = require("./../Sublayouts/HeaderTop");
var Navbar = require("./../Sublayouts/Navbar");

var MainLayout = React.createClass({
    render() {
        return (
            <div id="main-container">
                <header class="header-static">
                    <Placeholder placeholderKey={'header-top'} placeholder={this.props.placeholder}>
                        <HeaderTop />
                    </Placeholder>
                    <Placeholder placeholderKey={'navbar'} placeholder={this.props.placeholder}>
                        <Navbar />
                    </Placeholder>
                </header>

                <main role="main">
                    <Placeholder placeholderKey={'main'} placeholder={this.props.placeholder}>
                        {this.props.children}
                    </Placeholder>
                </main>

                <footer class="bg-dark">
                    <Placeholder placeholderKey={'footer'} placeholder={this.props.placeholder}>
                        <p>todo: add footer</p>
                    </Placeholder>
                </footer>
            </div>
        );
    }
});

module.exports = MainLayout;