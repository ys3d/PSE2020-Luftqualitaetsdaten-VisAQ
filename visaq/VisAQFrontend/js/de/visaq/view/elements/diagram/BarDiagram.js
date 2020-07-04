/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var de;
(function (de) {
    var visaq;
    (function (visaq) {
        var view;
        (function (view) {
            var elements;
            (function (elements) {
                var diagram;
                (function (diagram) {
                    /**
                     * Sole Constructor of the class Bar Diagram.
                     *
                     * @param {Array} observations   The instance of the Observations
                     * @param {de.visaq.view.elements.airquality.AirQualityData} airQualityData The current Air Quality Data
                     * @param {java.time.Instant} start          The start point of the historical development
                     * @param {java.time.Instant} end            The end point of the historical development
                     * @class
                     */
                    class BarDiagram {
                        constructor(observations, airQualityData, start, end) {
                            if (this.observations === undefined)
                                this.observations = null;
                            if (this.airQualityData === undefined)
                                this.airQualityData = null;
                            if (this.start === undefined)
                                this.start = null;
                            if (this.end === undefined)
                                this.end = null;
                            this.observations = observations;
                            this.airQualityData = airQualityData;
                            this.start = start;
                            this.end = end;
                        }
                        /**
                         *
                         */
                        drawDiagram() {
                        }
                        /**
                         *
                         */
                        showDiagram() {
                        }
                    }
                    diagram.BarDiagram = BarDiagram;
                    BarDiagram["__class"] = "de.visaq.view.elements.diagram.BarDiagram";
                    BarDiagram["__interfaces"] = ["de.visaq.view.elements.diagram.Diagram"];
                })(diagram = elements.diagram || (elements.diagram = {}));
            })(elements = view.elements || (view.elements = {}));
        })(view = visaq.view || (visaq.view = {}));
    })(visaq = de.visaq || (de.visaq = {}));
})(de || (de = {}));
