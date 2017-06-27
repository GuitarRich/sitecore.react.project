module.exports = function() {
    var instanceRoot = "C:\\inetpub\\wwwroot\\sitecorereact";
    var config = {
        websiteRoot: instanceRoot + "\\Website",
        scriptRoot: instanceRoot + "\\Website",
        sitecoreLibraries: instanceRoot + "\\Website\\bin",
        licensePath: instanceRoot + "\\Data\\license.xml",
        solutionName: "Sitecore.React.SampleProject",
        buildConfiguration: "Debug",
        runCleanBuilds: false
    };
    return config;
};