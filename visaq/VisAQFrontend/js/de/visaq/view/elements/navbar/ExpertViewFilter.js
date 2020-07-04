/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var de;
(function (de) {
    var visaq;
    (function (visaq) {
        var view;
        (function (view) {
            var elements;
            (function (elements) {
                var navbar;
                (function (navbar) {
                    /**
                     * Expert View Filter is an extension for experienced users. It is only active in Expert Mode and
                     * allows the user to select specific Sensors that are then shown on the Map.
                     * @class
                     */
                    class ExpertViewFilter {
                        constructor() {
                            if (this.angularController === undefined)
                                this.angularController = null;
                            if (this.sensorTypes === undefined)
                                this.sensorTypes = null;
                            if (this.selectedSensorTypes === undefined)
                                this.selectedSensorTypes = null;
                        }
                        /**
                         * Shows the different Sensortypes that can be chosen.
                         */
                        show() {
                        }
                        /**
                         * Sets the Sensortypes that are selected.
                         *
                         * @param {de.visaq.model.Sensor[]} selectedSensorTypes The Sensortypes that the User selects
                         * @private
                         */
                        /*private*/ setSelectedSensors(selectedSensorTypes) {
                            this.selectedSensorTypes = selectedSensorTypes;
                        }
                        /**
                         * Returns the selected Sensortypes.
                         *
                         * @return {de.visaq.model.Sensor[]} The Instance of the selected Sensortypes
                         */
                        getSelectedSensors() {
                            return this.selectedSensorTypes;
                        }
                    }
                    navbar.ExpertViewFilter = ExpertViewFilter;
                    ExpertViewFilter["__class"] = "de.visaq.view.elements.navbar.ExpertViewFilter";
                    ExpertViewFilter["__interfaces"] = ["de.visaq.view.elements.navbar.NavbarElement"];
                })(navbar = elements.navbar || (elements.navbar = {}));
            })(elements = view.elements || (view.elements = {}));
        })(view = visaq.view || (visaq.view = {}));
    })(visaq = de.visaq || (de.visaq = {}));
})(de || (de = {}));
