/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
namespace de.visaq.view.overlay.factory {
    /**
     * Creates an interpolated Map Overlay from given Sensor Data.
     * @class
     */
    export class InterpolationOverlayFactory implements de.visaq.view.overlay.factory.OverlayFactory {
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
    InterpolationOverlayFactory["__class"] = "de.visaq.view.overlay.factory.InterpolationOverlayFactory";
    InterpolationOverlayFactory["__interfaces"] = ["de.visaq.view.overlay.factory.OverlayFactory"];


}

