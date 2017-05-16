var React = require("react");
var Placeholder = require("./../placeholders/Placeholder");

var MainLayout = React.createClass({
    render() {
        return (
            <div id="main-container">
                <header class="header-static">
                    <Placeholder placeholderKey={'header'}>
                        <h1>header</h1>
                    </Placeholder>
                </header>

                <main role="main">
                    <div>
                        <h2>body</h2>
                        <p>body text, body text, body text, body text, body text, body text, body text, body text, body text, body text, body text</p>
                    </div>
                </main>

                <footer class="bg-dark">
                    <h3>todo: add footer</h3>
                </footer>
            </div>
        );
    }
});

module.exports = MainLayout;