/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
namespace de.visaq.view.elements.navbar {
    /**
     * Expert View Filter is an extension for experienced users. It is only active in Expert Mode and
     * allows the user to select specific Sensors that are then shown on the Map.
     * @class
     */
    export class ExpertViewFilter implements de.visaq.view.elements.navbar.NavbarElement {
        /*private*/ angularController : de.visaq.controller.AngularController;

        /*private*/ sensorTypes : Array<de.visaq.model.Sensor>;

        /*private*/ selectedSensorTypes : Array<de.visaq.model.Sensor>;

        /**
         * Shows the different Sensortypes that can be chosen.
         */
        public show() {
        }

        /**
         * Sets the Sensortypes that are selected.
         * 
         * @param {de.visaq.model.Sensor[]} selectedSensorTypes The Sensortypes that the User selects
         * @private
         */
        /*private*/ setSelectedSensors(selectedSensorTypes : Array<de.visaq.model.Sensor>) {
            this.selectedSensorTypes = selectedSensorTypes;
        }

        /**
         * Returns the selected Sensortypes.
         * 
         * @return {de.visaq.model.Sensor[]} The Instance of the selected Sensortypes
         */
        public getSelectedSensors() : Array<de.visaq.model.Sensor> {
            return this.selectedSensorTypes;
        }

        constructor() {
            if(this.angularController===undefined) this.angularController = null;
            if(this.sensorTypes===undefined) this.sensorTypes = null;
            if(this.selectedSensorTypes===undefined) this.selectedSensorTypes = null;
        }
    }
    ExpertViewFilter["__class"] = "de.visaq.view.elements.navbar.ExpertViewFilter";
    ExpertViewFilter["__interfaces"] = ["de.visaq.view.elements.navbar.NavbarElement"];


}

