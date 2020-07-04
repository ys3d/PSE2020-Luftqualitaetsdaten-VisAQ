/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
namespace de.visaq.view.overlay.factory {
    /**
     * Encapsulates the control over all Overlay Factories.
     * @class
     */
    export interface OverlayFactory {
        /**
         * Builds a Map Overlay using Sensor Data and the Color Theme of the Air Quality Instace.
         * 
         * @param {de.visaq.view.elements.airquality.AirQualityData} airQuality    The Air Quality that is depicted
         * @param {Array} data          Array of the Sensor Data to construct an Map Overlay
         * @return              {L.Layer} A Map Overlay for the map.
         */
        build(airQuality : de.visaq.view.elements.airquality.AirQualityData, data : de.visaq.model.SensorDatum[]) : L.Layer;
    }
}

