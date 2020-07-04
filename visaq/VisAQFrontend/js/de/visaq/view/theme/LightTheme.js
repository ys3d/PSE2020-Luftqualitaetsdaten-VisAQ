/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var de;
(function (de) {
    var visaq;
    (function (visaq) {
        var view;
        (function (view) {
            var theme;
            (function (theme) {
                /**
                 * Contains the Color and its Gradient that are used in the Light Mode. It is used as
                 * standard configuration.
                 * @class
                 * @extends de.visaq.view.theme.ColorTheme
                 */
                class LightTheme extends de.visaq.view.theme.ColorTheme {
                    constructor() {
                        super(...arguments);
                        this.primaryColor = null;
                        this.secondaryColor = null;
                        this.gradient = new de.visaq.view.theme.Gradient(this.primaryColor, this.secondaryColor);
                    }
                }
                theme.LightTheme = LightTheme;
                LightTheme["__class"] = "de.visaq.view.theme.LightTheme";
            })(theme = view.theme || (view.theme = {}));
        })(view = visaq.view || (visaq.view = {}));
    })(visaq = de.visaq || (de.visaq = {}));
})(de || (de = {}));
