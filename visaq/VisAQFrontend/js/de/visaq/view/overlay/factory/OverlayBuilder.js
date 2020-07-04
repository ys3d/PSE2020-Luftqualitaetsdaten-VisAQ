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
                (function (factory_1) {
                    /**
                     * Builder for building overlays with the given factories.
                     *
                     * @param {*[]} factories Are the Overlay Factories used to fabricate Map Overlays
                     * @class
                     */
                    class OverlayBuilder {
                        constructor(factories) {
                            /*private*/ this.factories = null;
                            if (((factories != null && (factories instanceof Array)) || factories === null)) {
                                let __args = arguments;
                                if (this.angularController === undefined)
                                    this.angularController = null;
                                this.factories = null;
                                if (this.angularController === undefined)
                                    this.angularController = null;
                            }
                            else if (factories === undefined) {
                                let __args = arguments;
                                if (this.angularController === undefined)
                                    this.angularController = null;
                                this.factories = null;
                                if (this.angularController === undefined)
                                    this.angularController = null;
                            }
                            else
                                throw new Error('invalid overload');
                        }
                        /**
                         * Method that runs Overlay Factories with the matching data.
                         *
                         * @param {de.visaq.view.elements.airquality.AirQualityData} airQuality   Is the Observed Property of the Sensors
                         * @param {L.LatLngBounds} latLngBounds The bounds of the Map
                         * @param {java.time.Instant} time         The time
                         * @return {L.Layer[]} The resulting Map Overlays
                         */
                        buildOverlays(airQuality, latLngBounds, time) {
                            let layers = ([]);
                            let data = null;
                            for (let index140 = 0; index140 < this.factories.length; index140++) {
                                let factory = this.factories[index140];
                                {
                                    /* add */ (layers.push(factory.build(airQuality, data)) > 0);
                                }
                            }
                            return layers;
                        }
                        /**
                         * Method that runs Overlay Factories with the matching data restricted by a collection of
                         * Sensor Types.
                         *
                         * @param {de.visaq.view.elements.airquality.AirQualityData} airQuality          Is the Observed Property of the Sensors
                         * @param {L.LatLngBounds} latLngBounds        The bounds of the map
                         * @param {de.visaq.model.Sensor[]} selectedSensortypes The selected Sensor Types
                         * @param {java.time.Instant} time                The time
                         * @return {L.Layer[]} The resulting Map Overlays
                         */
                        buildExpertOverlays(airQuality, latLngBounds, selectedSensortypes, time) {
                            let layers = ([]);
                            return layers;
                        }
                    }
                    factory_1.OverlayBuilder = OverlayBuilder;
                    OverlayBuilder["__class"] = "de.visaq.view.overlay.factory.OverlayBuilder";
                })(factory = overlay.factory || (overlay.factory = {}));
            })(overlay = view.overlay || (view.overlay = {}));
        })(view = visaq.view || (visaq.view = {}));
    })(visaq = de.visaq || (de.visaq = {}));
})(de || (de = {}));
