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
                 * Creates a ColorTheme instance and updates the global instance accordingly.
                 * @class
                 */
                class ColorTheme {
                    constructor() {
                        ColorTheme.setInstance(this);
                    }
                    static instance_$LI$() { if (ColorTheme.instance == null)
                        ColorTheme.instance = new de.visaq.view.theme.LightTheme(); return ColorTheme.instance; }
                    ;
                    /**
                     * Gets the current ColorTheme instance.
                     *
                     * @return {de.visaq.view.theme.ColorTheme} The ColorTheme instance
                     */
                    static getInstance() {
                        ColorTheme.instance = ColorTheme.instance == null ? new de.visaq.view.theme.LightTheme() : ColorTheme.instance;
                        return ColorTheme.instance_$LI$();
                    }
                    /**
                     * Sets the current ColorTheme instance.
                     *
                     * @param {de.visaq.view.theme.ColorTheme} colorTheme The ColorTheme instance
                     */
                    static setInstance(colorTheme) {
                        ColorTheme.instance = colorTheme;
                    }
                }
                theme.ColorTheme = ColorTheme;
                ColorTheme["__class"] = "de.visaq.view.theme.ColorTheme";
            })(theme = view.theme || (view.theme = {}));
        })(view = visaq.view || (visaq.view = {}));
    })(visaq = de.visaq || (de.visaq = {}));
})(de || (de = {}));
de.visaq.view.theme.ColorTheme.instance_$LI$();
