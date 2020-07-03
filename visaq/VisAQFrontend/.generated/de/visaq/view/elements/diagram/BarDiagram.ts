/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
namespace de.visaq.view.elements.diagram {
    /**
     * Sole Constructor of the class Bar Diagram.
     * 
     * @param {Array} observations   The instance of the Observations
     * @param {de.visaq.view.elements.airquality.AirQualityData} airQualityData The current Air Quality Data
     * @param {java.time.Instant} start          The start point of the historical development
     * @param {java.time.Instant} end            The end point of the historical development
     * @class
     */
    export class BarDiagram implements de.visaq.view.elements.diagram.Diagram {
        public observations : de.visaq.model.Observation[];

        public airQualityData : de.visaq.view.elements.airquality.AirQualityData;

        public start : java.time.Instant;

        public end : java.time.Instant;

        public constructor(observations : de.visaq.model.Observation[], airQualityData : de.visaq.view.elements.airquality.AirQualityData, start : java.time.Instant, end : java.time.Instant) {
            if(this.observations===undefined) this.observations = null;
            if(this.airQualityData===undefined) this.airQualityData = null;
            if(this.start===undefined) this.start = null;
            if(this.end===undefined) this.end = null;
            this.observations = observations;
            this.airQualityData = airQualityData;
            this.start = start;
            this.end = end;
        }

        /**
         * 
         */
        public drawDiagram() {
        }

        /**
         * 
         */
        public showDiagram() {
        }
    }
    BarDiagram["__class"] = "de.visaq.view.elements.diagram.BarDiagram";
    BarDiagram["__interfaces"] = ["de.visaq.view.elements.diagram.Diagram"];


}

