class DummyData {
    static getLanguages() {
        return {
            'CurrentLanguage': 'en',
            'Languages': [
                { 'Url': 'http://habitat.demo.sitecore.net/en/', 'NativeName': 'English', 'TwoLetterCode': 'en' },
                { 'Url': 'http://habitat.demo.sitecore.net/da/', 'NativeName': 'dansk', 'TwoLetterCode': 'da' }
            ]};
    }
    static getSearchModel() {
        return {
            'SearchBoxTitle': 'Enter a text to search for...',
            'SearchResultsUrl': '/en/search'
        };
    }
    static getPrimaryNav() {
        return {
            'Items': [
                { 'Url': '/en',  'Target': '', 'Title': 'Home', 'Children': [] },
                { 'Url': '/en/about-habitat',  'Target': '', 'Title': 'About Habitat', 'Children': [
                    { 'Url': '/en/About-Habitat/introduction', 'Target': '', 'Title': 'Introduction', 'Children': [] },
                    { 'Url': '/en/About-Habitat/getting-started', 'Target': '', 'Title': 'Getting Started', 'Children': [] },
                    { 'Url': 'http://helix.sitecore.net',  'Target': '_blank', 'Title': 'Helix Documentation', 'Children': [] }
                ]},
                { 'Url': '/en/more-info',  'Target': '', 'Title': 'More Info', 'Children': [] }
            ]};
    }
}

export { DummyData };