/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
namespace de.visaq.model {
    /**
     * Sole constructor of the class PointData.
     * 
     * @param {de.visaq.model.Sensor} sensor      The Sensor
     * @param {de.visaq.model.Location} location    The Location
     * @param {de.visaq.model.Observation} observation The Observation
     * @class
     */
    export class SensorDatum {
        public sensor : de.visaq.model.Sensor;

        public location : de.visaq.model.Location;

        public observation : de.visaq.model.Observation;

        public constructor(sensor : de.visaq.model.Sensor, location : de.visaq.model.Location, observation : de.visaq.model.Observation) {
            if(this.sensor===undefined) this.sensor = null;
            if(this.location===undefined) this.location = null;
            if(this.observation===undefined) this.observation = null;
            this.sensor = sensor;
            this.location = location;
            this.observation = observation;
        }
    }
    SensorDatum["__class"] = "de.visaq.model.SensorDatum";

}

