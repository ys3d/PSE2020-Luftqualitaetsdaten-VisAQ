/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
namespace de.visaq.view.overlay.factory {
    /**
     * Builder for building overlays with the given factories.
     * 
     * @param {*[]} factories Are the Overlay Factories used to fabricate Map Overlays
     * @class
     */
    export class OverlayBuilder {
        /*private*/ factories : Array<de.visaq.view.overlay.factory.OverlayFactory> = null;

        /*private*/ angularController : de.visaq.controller.AngularController;

        public constructor(factories? : any) {
            if(((factories != null && (factories instanceof Array)) || factories === null)) {
                let __args = arguments;
                if(this.angularController===undefined) this.angularController = null;
                this.factories = null;
                if(this.angularController===undefined) this.angularController = null;
            } else if(factories === undefined) {
                let __args = arguments;
                if(this.angularController===undefined) this.angularController = null;
                this.factories = null;
                if(this.angularController===undefined) this.angularController = null;
            } else throw new Error('invalid overload');
        }

        /**
         * Method that runs Overlay Factories with the matching data.
         * 
         * @param {de.visaq.view.elements.airquality.AirQualityData} airQuality   Is the Observed Property of the Sensors
         * @param {L.LatLngBounds} latLngBounds The bounds of the Map
         * @param {java.time.Instant} time         The time
         * @return {L.Layer[]} The resulting Map Overlays
         */
        public buildOverlays(airQuality : de.visaq.view.elements.airquality.AirQualityData, latLngBounds : L.LatLngBounds, time : java.time.Instant) : Array<L.Layer> {
            let layers : Array<L.Layer> = <any>([]);
            let data : de.visaq.model.SensorDatum[] = null;
            for(let index348=0; index348 < this.factories.length; index348++) {
                let factory = this.factories[index348];
                {
                    /* add */(layers.push(factory.build(airQuality, data))>0);
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
        public buildExpertOverlays(airQuality : de.visaq.view.elements.airquality.AirQualityData, latLngBounds : L.LatLngBounds, selectedSensortypes : Array<de.visaq.model.Sensor>, time : java.time.Instant) : Array<L.Layer> {
            let layers : Array<L.Layer> = <any>([]);
            return layers;
        }
    }
    OverlayBuilder["__class"] = "de.visaq.view.overlay.factory.OverlayBuilder";

}

