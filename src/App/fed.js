//@tscheck
global.jQuery = require('jquery');
require('bootstrap');
require('jquery-ui');

import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory, browserHistory } from "react-router";
import Placeholder from "sitecore.react.placeholders";

import Layout from "./views/layout/MainLayout";
import Home from "./pages/Home"
import Featured from "./pages/Featured"
import Settings from "./pages/Settings";
import AboutReactIntro from "./pages/AboutReactIntro";
import AboutReactGettingStarted from "./pages/AboutReactGettingStarted";

const app = document.getElementById('app');
ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path="/about-react/introduction" component={AboutReactIntro}></Route>
            <Route path="/about-react/getting-started" component={AboutReactGettingStarted}></Route>
            <Route path="/articles" component={Featured}></Route>
            <Route path="/settings" component={Settings}></Route>
        </Route>
    </Router>, 
app);