/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
namespace de.visaq.view.elements.map {
    /**
     * Sole constructor of the class.
     * 
     * @param {de.visaq.view.elements.airquality.AirQualityData} airQualityData The Air Quality Data, contains the gradient
     * @class
     */
    export class Legend {
        public airQualityData : de.visaq.view.elements.airquality.AirQualityData;

        /*private*/ gradient : de.visaq.view.theme.Gradient;

        public constructor(airQualityData : de.visaq.view.elements.airquality.AirQualityData) {
            if(this.airQualityData===undefined) this.airQualityData = null;
            if(this.gradient===undefined) this.gradient = null;
            this.airQualityData = airQualityData;
            this.gradient = airQualityData.gradient;
        }

        /**
         * Gradient of the selected airQualityData that is shown on the Map.
         */
        public show() {
        }
    }
    Legend["__class"] = "de.visaq.view.elements.map.Legend";

}

