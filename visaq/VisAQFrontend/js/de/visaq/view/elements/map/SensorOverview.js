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
                     * Constructor for Sensor Overview. It is used when a point on the map is marked. The Sensor
                     * Overview is than initialized with the coordinates and the interpolated data of that point.
                     *
                     * @param {Array} airQualityData        The Air Quality Data
                     * @param {org.json.JSONObject} coordinates           The coordinates of the point
                     * @param {de.visaq.view.elements.airquality.AirQualityData} currentAirQualityData The currentAirQualityData
                     * @param {java.time.Instant} time                  The Instance of the time
                     * @class
                     */
                    class SensorOverview {
                        constructor(airQualityData, coordinates, currentAirQualityData, time) {
                            /*private*/ this.start = null;
                            /*private*/ this.end = null;
                            if (((airQualityData != null && airQualityData instanceof Array && (airQualityData.length == 0 || airQualityData[0] == null || (airQualityData[0] != null && airQualityData[0] instanceof de.visaq.view.elements.airquality.AirQualityData))) || airQualityData === null) && ((coordinates != null && coordinates instanceof org.json.JSONObject) || coordinates === null) && ((currentAirQualityData != null && currentAirQualityData instanceof de.visaq.view.elements.airquality.AirQualityData) || currentAirQualityData === null) && ((time != null && time instanceof java.time.Instant) || time === null)) {
                                let __args = arguments;
                                if (this.airQualityData === undefined)
                                    this.airQualityData = null;
                                if (this.currentAirQualityData === undefined)
                                    this.currentAirQualityData = null;
                                if (this.diagram === undefined)
                                    this.diagram = null;
                                if (this.angularController === undefined)
                                    this.angularController = null;
                                if (this.observations === undefined)
                                    this.observations = null;
                                this.start = null;
                                this.end = null;
                                if (this.airQualityData === undefined)
                                    this.airQualityData = null;
                                if (this.currentAirQualityData === undefined)
                                    this.currentAirQualityData = null;
                                if (this.diagram === undefined)
                                    this.diagram = null;
                                if (this.angularController === undefined)
                                    this.angularController = null;
                                if (this.observations === undefined)
                                    this.observations = null;
                                (() => {
                                    this.airQualityData = airQualityData;
                                    this.currentAirQualityData = currentAirQualityData;
                                    this.diagram = new de.visaq.view.elements.diagram.LineDiagram(this.observations, currentAirQualityData, this.start, this.end);
                                })();
                            }
                            else if (((airQualityData != null && airQualityData instanceof Array && (airQualityData.length == 0 || airQualityData[0] == null || (airQualityData[0] != null && airQualityData[0] instanceof de.visaq.view.elements.airquality.AirQualityData))) || airQualityData === null) && ((coordinates != null && coordinates instanceof de.visaq.model.Sensor) || coordinates === null) && ((currentAirQualityData != null && currentAirQualityData instanceof de.visaq.view.elements.airquality.AirQualityData) || currentAirQualityData === null) && ((time != null && time instanceof java.time.Instant) || time === null)) {
                                let __args = arguments;
                                let sensor = __args[1];
                                if (this.airQualityData === undefined)
                                    this.airQualityData = null;
                                if (this.currentAirQualityData === undefined)
                                    this.currentAirQualityData = null;
                                if (this.diagram === undefined)
                                    this.diagram = null;
                                if (this.angularController === undefined)
                                    this.angularController = null;
                                if (this.observations === undefined)
                                    this.observations = null;
                                this.start = null;
                                this.end = null;
                                if (this.airQualityData === undefined)
                                    this.airQualityData = null;
                                if (this.currentAirQualityData === undefined)
                                    this.currentAirQualityData = null;
                                if (this.diagram === undefined)
                                    this.diagram = null;
                                if (this.angularController === undefined)
                                    this.angularController = null;
                                if (this.observations === undefined)
                                    this.observations = null;
                                (() => {
                                    this.airQualityData = airQualityData;
                                    this.currentAirQualityData = currentAirQualityData;
                                    this.diagram = new de.visaq.view.elements.diagram.LineDiagram(this.observations, currentAirQualityData, this.start, this.end);
                                })();
                            }
                            else
                                throw new Error('invalid overload');
                        }
                        /**
                         * Shows the Sensor Overview.
                         */
                        show() {
                            this.diagram.drawDiagram();
                            this.diagram.showDiagram();
                        }
                        /**
                         * Method to change the timeframe of the diagram.
                         *
                         * @param {java.time.Instant} start Is the instance of the start point
                         * @param {java.time.Instant} end   Is the instance of the end point
                         */
                        selectTimeframe(start, end) {
                            this.diagram = new de.visaq.view.elements.diagram.LineDiagram(this.observations, this.currentAirQualityData, start, end);
                        }
                    }
                    map.SensorOverview = SensorOverview;
                    SensorOverview["__class"] = "de.visaq.view.elements.map.SensorOverview";
                })(map = elements.map || (elements.map = {}));
            })(elements = view.elements || (view.elements = {}));
        })(view = visaq.view || (visaq.view = {}));
    })(visaq = de.visaq || (de.visaq = {}));
})(de || (de = {}));
