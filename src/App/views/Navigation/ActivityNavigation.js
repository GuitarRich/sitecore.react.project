import React from "react"
import Placeholder from "sitecore.react.placeholders";

import { Data } from "./../../data/Data";
import LanguageSelector from "./../Language/LanguageSelector";
import GlobalSearch from "./../Search/GlobalSearch";

export default class ActivityNavigation extends React.Component {
    render() {
        return(
            <div class="navbar-activity">
                <ul class="nav navbar-nav">
                    <Placeholder key={'navbar-activity'}>
                        <li>
                            <ul class="nav navbar-nav">
                                <LanguageSelector data={Data.getLanguages()} />
                                <GlobalSearch data={Data.getSearchModel()} />
                            </ul>
                        </li>
                    </Placeholder>
                </ul>
            </div>
        );
    }
}