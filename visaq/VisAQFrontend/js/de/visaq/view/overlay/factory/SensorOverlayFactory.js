/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var de;
(function (de) {
    var visaq;
    (function (visaq) {
        var view;
        (function (view) {
            var overlay;
            (function (overlay) {
                var factory;
                (function (factory) {
                    /**
                     * Creates a Map Overlay that shows the the Sensor Data measured by multiple Sensors .
                     * @class
                     */
                    class SensorOverlayFactory {
                        constructor() {
                        }
                        /**
                         *
                         * @param {de.visaq.view.elements.airquality.AirQualityData} airquality
                         * @param {Array} data
                         * @return {L.Layer}
                         */
                        build(airquality, data) {
                            return null;
                        }
                    }
                    factory.SensorOverlayFactory = SensorOverlayFactory;
                    SensorOverlayFactory["__class"] = "de.visaq.view.overlay.factory.SensorOverlayFactory";
                    SensorOverlayFactory["__interfaces"] = ["de.visaq.view.overlay.factory.OverlayFactory"];
                })(factory = overlay.factory || (overlay.factory = {}));
            })(overlay = view.overlay || (view.overlay = {}));
        })(view = visaq.view || (visaq.view = {}));
    })(visaq = de.visaq || (de.visaq = {}));
})(de || (de = {}));
