import React from 'react';

export default class LanguageSelector extends React.Component {
    render() {

        var self = this;
        var languageList = this.props.data.Languages.map(function(language, index) {
            var cssClass = '';
            if (self.props.data.CurrentLanguage === language.TwoLetterCode){
                cssClass = 'active';
            }

            return (
                <li class={cssClass} key={index}>
                    <a href={language.Url}>{language.NativeName}</a>
                </li>
            )
        });

        return (
            <li class="dropdown">
                <a href="#" class="btn dropdown-toggle" data-toggle="dropdown">
                    <i class="fa fa-globe"></i>
                </a>
                <ul class="dropdown-menu">
                    {languageList}
                </ul>
            </li>
        );
    }
}