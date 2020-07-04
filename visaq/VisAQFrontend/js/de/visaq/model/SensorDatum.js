/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var de;
(function (de) {
    var visaq;
    (function (visaq) {
        var model;
        (function (model) {
            /**
             * Sole constructor of the class PointData.
             *
             * @param {de.visaq.model.Sensor} sensor      The Sensor
             * @param {de.visaq.model.Location} location    The Location
             * @param {de.visaq.model.Observation} observation The Observation
             * @class
             */
            class SensorDatum {
                constructor(sensor, location, observation) {
                    if (this.sensor === undefined)
                        this.sensor = null;
                    if (this.location === undefined)
                        this.location = null;
                    if (this.observation === undefined)
                        this.observation = null;
                    this.sensor = sensor;
                    this.location = location;
                    this.observation = observation;
                }
            }
            model.SensorDatum = SensorDatum;
            SensorDatum["__class"] = "de.visaq.model.SensorDatum";
        })(model = visaq.model || (visaq.model = {}));
    })(visaq = de.visaq || (de.visaq = {}));
})(de || (de = {}));
