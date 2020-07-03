/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
namespace de.visaq.view.overlay.factory {
    /**
     * Creates a Map Overlay that shows the the Sensor Data measured by multiple Sensors .
     * @class
     */
    export class SensorOverlayFactory implements de.visaq.view.overlay.factory.OverlayFactory {
        /**
         * 
         * @param {de.visaq.view.elements.airquality.AirQualityData} airquality
         * @param {Array} data
         * @return {L.Layer}
         */
        public build(airquality : de.visaq.view.elements.airquality.AirQualityData, data : de.visaq.model.SensorDatum[]) : L.Layer {
            return null;
        }

        constructor() {
        }
    }
    SensorOverlayFactory["__class"] = "de.visaq.view.overlay.factory.SensorOverlayFactory";
    SensorOverlayFactory["__interfaces"] = ["de.visaq.view.overlay.factory.OverlayFactory"];


}

