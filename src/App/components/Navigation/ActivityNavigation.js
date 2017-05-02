import React from "react"
import Placeholder from "./../../Test/Placeholders";

import { DummyData } from "./../../data/DummyData";
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
                            <LanguageSelector data={DummyData.getLanguages()} />
                            <GlobalSearch data={DummyData.getSearchModel()} />
                        </ul>
                        </li>
                    </Placeholder>
                </ul>
            </div>
        );
    }
    getContent() {
        return ls + gs;
    }
}