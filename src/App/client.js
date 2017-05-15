//@tscheck
global.jQuery = require('jquery');
require('bootstrap');
require('jquery-ui');

module.exports ={
    Placeholder: require('sitecore.react.placeholders'),
    Placeholder2: require('./Test/Placeholders2'),
    Layout: require('./views/Layout/Layout')
}

