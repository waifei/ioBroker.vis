var visConfig = {
    widgetSets: [
        "basic",
        {name: "metro",       depends: ["basic"]},
        {name: "fancyswitch", depends: ["basic"]},
        "tabs",
        "jqplot",
        "timeAndWeather",
        {name: "jqui",        depends: ["basic"]},
        {name: "jqui-mfd",    depends: ["basic", "jqui"]},
        "weather-adapter",
        "RGraph"
        //"plumb",
        /*,
        "bars",
        "colorpicker",

        {name: "homematic", depends: ["basic", "jqui"]},
        "knob",
//        {name: "hqWidgets", edit: "hqWidgetsEdit"},
        "jqplot",
        {name: "lcars",    depends: ["basic"]},
        "RGraph",
        "special",
        "swipe",
        "table",
        "dev"*/
    ],
    language: window.navigator.userLanguage || window.navigator.language
};