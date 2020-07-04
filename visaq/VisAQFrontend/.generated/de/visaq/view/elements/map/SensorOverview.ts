/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
namespace de.visaq.view.elements.map {
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
    export class SensorOverview {
        public airQualityData : de.visaq.view.elements.airquality.AirQualityData[];

        /*private*/ currentAirQualityData : de.visaq.view.elements.airquality.AirQualityData;

        /*private*/ diagram : de.visaq.view.elements.diagram.Diagram;

        /*private*/ start : java.time.Instant = null;

        /*private*/ end : java.time.Instant = null;

        /*private*/ angularController : de.visaq.controller.AngularController;

        /*private*/ observations : de.visaq.model.Observation[];

        public constructor(airQualityData? : any, coordinates? : any, currentAirQualityData? : any, time? : any) {
            if(((airQualityData != null && airQualityData instanceof <any>Array && (airQualityData.length==0 || airQualityData[0] == null ||(airQualityData[0] != null && airQualityData[0] instanceof <any>de.visaq.view.elements.airquality.AirQualityData))) || airQualityData === null) && ((coordinates != null && coordinates instanceof <any>org.json.JSONObject) || coordinates === null) && ((currentAirQualityData != null && currentAirQualityData instanceof <any>de.visaq.view.elements.airquality.AirQualityData) || currentAirQualityData === null) && ((time != null && time instanceof <any>java.time.Instant) || time === null)) {
                let __args = arguments;
                if(this.airQualityData===undefined) this.airQualityData = null;
                if(this.currentAirQualityData===undefined) this.currentAirQualityData = null;
                if(this.diagram===undefined) this.diagram = null;
                if(this.angularController===undefined) this.angularController = null;
                if(this.observations===undefined) this.observations = null;
                this.start = null;
                this.end = null;
                if(this.airQualityData===undefined) this.airQualityData = null;
                if(this.currentAirQualityData===undefined) this.currentAirQualityData = null;
                if(this.diagram===undefined) this.diagram = null;
                if(this.angularController===undefined) this.angularController = null;
                if(this.observations===undefined) this.observations = null;
                (() => {
                    this.airQualityData = airQualityData;
                    this.currentAirQualityData = currentAirQualityData;
                    this.diagram = new de.visaq.view.elements.diagram.LineDiagram(this.observations, currentAirQualityData, this.start, this.end);
                })();
            } else if(((airQualityData != null && airQualityData instanceof <any>Array && (airQualityData.length==0 || airQualityData[0] == null ||(airQualityData[0] != null && airQualityData[0] instanceof <any>de.visaq.view.elements.airquality.AirQualityData))) || airQualityData === null) && ((coordinates != null && coordinates instanceof <any>de.visaq.model.Sensor) || coordinates === null) && ((currentAirQualityData != null && currentAirQualityData instanceof <any>de.visaq.view.elements.airquality.AirQualityData) || currentAirQualityData === null) && ((time != null && time instanceof <any>java.time.Instant) || time === null)) {
                let __args = arguments;
                let sensor : any = __args[1];
                if(this.airQualityData===undefined) this.airQualityData = null;
                if(this.currentAirQualityData===undefined) this.currentAirQualityData = null;
                if(this.diagram===undefined) this.diagram = null;
                if(this.angularController===undefined) this.angularController = null;
                if(this.observations===undefined) this.observations = null;
                this.start = null;
                this.end = null;
                if(this.airQualityData===undefined) this.airQualityData = null;
                if(this.currentAirQualityData===undefined) this.currentAirQualityData = null;
                if(this.diagram===undefined) this.diagram = null;
                if(this.angularController===undefined) this.angularController = null;
                if(this.observations===undefined) this.observations = null;
                (() => {
                    this.airQualityData = airQualityData;
                    this.currentAirQualityData = currentAirQualityData;
                    this.diagram = new de.visaq.view.elements.diagram.LineDiagram(this.observations, currentAirQualityData, this.start, this.end);
                })();
            } else throw new Error('invalid overload');
        }

        /**
         * Shows the Sensor Overview.
         */
        public show() {
            this.diagram.drawDiagram();
            this.diagram.showDiagram();
        }

        /**
         * Method to change the timeframe of the diagram.
         * 
         * @param {java.time.Instant} start Is the instance of the start point
         * @param {java.time.Instant} end   Is the instance of the end point
         */
        public selectTimeframe(start : java.time.Instant, end : java.time.Instant) {
            this.diagram = new de.visaq.view.elements.diagram.LineDiagram(this.observations, this.currentAirQualityData, start, end);
        }
    }
    SensorOverview["__class"] = "de.visaq.view.elements.map.SensorOverview";

}

