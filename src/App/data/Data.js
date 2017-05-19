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
            "IsSocial": true,
            "Items": [
                { "Url": "http://facebook.com/sitecore", "Target": "_blank", "Title": "Facebook", "Class": "facebook"},
                { "Url": "http://twitter.com/sitecore", "Target": "_blank", "Title": "Twitter", "Class": "twitter"},
                { "Url": "https://www.youtube.com/user/sitecorechannel", "Target": "_blank", "Title": "YouTube", "Class": "youtube"}
            ]
        };
    }
    static getTopMenu() {
        return {
            "IsSocial": false,
            "Items": [
                { "Url": "https://github.com/Sitecore/Habitat/", "Target": "_blank", "Title": "Habitat", "Class": ""},
                { "Url": "http://helix.sitecore.net", "Target": "_blank", "Title": "Helix", "Class": ""},
                { "Url": "https://www.sitecore.net", "Target": "_blank", "Title": "Sitecore.net", "Class": ""}
            ]
        };
    }
}

export { Data };