module.exports = function() {
    var instanceRoot = "C:\\websites\\sitecorereact.dev.local";
    var config = {
        websiteRoot: instanceRoot + "\\Website",
        sitecoreLibraries: instanceRoot + "\\Website\\bin",
        licensePath: instanceRoot + "\\Data\\license.xml",
        solutionName: "Sitecore.React.SampleProject",
        buildConfiguration: "Debug",
        runCleanBuilds: false
    };
    return config;
};