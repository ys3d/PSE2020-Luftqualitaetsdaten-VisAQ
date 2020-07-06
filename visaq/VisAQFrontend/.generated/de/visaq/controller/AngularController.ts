/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
namespace de.visaq.controller {
    /**
     * Controller that requests data from the server.
     * @class
     */
    export class AngularController {
        sensorThing : de.visaq.model.Sensorthing<any>;

        currentRequest : XMLHttpRequest = new XMLHttpRequest();

        /**
         * The request to the Server is send here through an angular application. It returns a json data
         * that is parsed to a Sensorthing data
         * 
         * @param {string} input     Input that specifies the request
         * @param {*} params    Params of the given Object
         * @return {de.visaq.model.Sensorthing} the Sensorthing used in the view
         */
        public sendRequest(input : string, params : any) : de.visaq.model.Sensorthing<any> {
            this.currentRequest.open("POST", "https://visaq.de/api/thing", true);
            this.currentRequest.onreadystatechange = (e) => {
                if(this.currentRequest.readyState === 4 && this.currentRequest.status === 200) {
                    console.log(this.currentRequest.responseText);
                }
                return e;
            };
            this.currentRequest.onload = (e) => {
                this.sensorThing = <de.visaq.model.Sensorthing<any>>JSON.parse(this.currentRequest.responseText);
                return e;
            };
            this.currentRequest.send(params);
            return this.sensorThing;
        }

        constructor() {
            if(this.sensorThing===undefined) this.sensorThing = null;
        }
    }
    AngularController["__class"] = "de.visaq.controller.AngularController";

}

