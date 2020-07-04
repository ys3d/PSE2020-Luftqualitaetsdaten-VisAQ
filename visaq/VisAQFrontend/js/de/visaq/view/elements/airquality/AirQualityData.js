/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var de;
(function (de) {
    var visaq;
    (function (visaq) {
        var view;
        (function (view) {
            var elements;
            (function (elements) {
                var airquality;
                (function (airquality) {
                    /**
                     * Sole constructor of the class.
                     *
                     * @param {string} name  The name
                     * @param {java.awt.Color} primaryColor
                     * @param {java.awt.Color} secondaryColor
                     * @class
                     */
                    class AirQualityData {
                        constructor(name, primaryColor, secondaryColor) {
                            if (this.name === undefined)
                                this.name = null;
                            if (this.primaryColor === undefined)
                                this.primaryColor = null;
                            if (this.secondaryColor === undefined)
                                this.secondaryColor = null;
                            if (this.gradient === undefined)
                                this.gradient = null;
                            this.name = name;
                            this.primaryColor = primaryColor;
                            this.secondaryColor = secondaryColor;
                            this.gradient = new de.visaq.view.theme.Gradient(primaryColor, secondaryColor);
                        }
                    }
                    airquality.AirQualityData = AirQualityData;
                    AirQualityData["__class"] = "de.visaq.view.elements.airquality.AirQualityData";
                })(airquality = elements.airquality || (elements.airquality = {}));
            })(elements = view.elements || (view.elements = {}));
        })(view = visaq.view || (visaq.view = {}));
    })(visaq = de.visaq || (de.visaq = {}));
})(de || (de = {}));
