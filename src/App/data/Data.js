import languages from "./json/languages.json";
import logo from "./json/logo.json";
import searchModel from "./json/searchModel.json";
import carousel from "./json/carousel.json";
import primarynav from "./json/primarynav.json";
import introductionPageData from "./json/introductionPageData.json";
import gettingStartedPageData from "./json/gettingStartedPageData.json";
import aboutSecondaryMenu from "./json/aboutSecondaryMenu.json";

class Data {
    static getLanguages() {
        return languages;
    }
    static getLogo() {
        return logo;
    }
    static getSearchModel() {
        return searchModel;
    }
    static getCarousel() {
        return carousel;
    }
    static getPrimaryNav() {
        return primarynav;
    }
    static getIntroPageData() {
        return introductionPageData;
    }
    static getGettingStartedPageData() {
        return gettingStartedPageData;
    }
    static getAboutSecondaryMenu() {
        return aboutSecondaryMenu;
    }
    static getSocialMenu() {
        return {
            "isSocial": true,
            "links": [
                { "url": "http://facebook.com/sitecore", "target": "_blank", "title": "Facebook", "class": "facebook"},
                { "url": "http://twitter.com/sitecore", "target": "_blank", "title": "Twitter", "class": "twitter"},
                { "url": "https://www.youtube.com/user/sitecorechannel", "target": "_blank", "title": "YouTube", "class": "youtube"}
            ]
        };
    }
    static getTopMenu() {
        return {
            "isSocial": false,
            "links": [
                { "url": "https://github.com/Sitecore/Habitat/", "target": "_blank", "title": "Habitat", "class": ""},
                { "url": "http://helix.sitecore.net", "target": "_blank", "title": "Helix", "class": ""},
                { "url": "https://www.sitecore.net", "target": "_blank", "title": "Sitecore.net", "class": ""}
            ]
        };
    }
}

export { Data };