/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var de;
(function (de) {
    var visaq;
    (function (visaq) {
        var view;
        (function (view) {
            var elements;
            (function (elements) {
                var map;
                (function (map) {
                    /**
                     * Sole constructor of the class.
                     *
                     * @param {de.visaq.view.elements.airquality.AirQualityData} airQualityData The Air Quality Data, contains the gradient
                     * @class
                     */
                    class Legend {
                        constructor(airQualityData) {
                            if (this.airQualityData === undefined)
                                this.airQualityData = null;
                            if (this.gradient === undefined)
                                this.gradient = null;
                            this.airQualityData = airQualityData;
                            this.gradient = airQualityData.gradient;
                        }
                        /**
                         * Gradient of the selected airQualityData that is shown on the Map.
                         */
                        show() {
                        }
                    }
                    map.Legend = Legend;
                    Legend["__class"] = "de.visaq.view.elements.map.Legend";
                })(map = elements.map || (elements.map = {}));
            })(elements = view.elements || (view.elements = {}));
        })(view = visaq.view || (visaq.view = {}));
    })(visaq = de.visaq || (de.visaq = {}));
})(de || (de = {}));
