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
                     * The Timeline is used to show the historical data directly on the map. It also implements the
                     * NavbarElement to use the show method.
                     * @class
                     */
                    class Timeline {
                        constructor() {
                            if (this.time === undefined)
                                this.time = null;
                        }
                        /**
                         *
                         */
                        show() {
                            de.visaq.view.VisAQ.getInstance().userInput();
                        }
                        /**
                         * Returns the time.
                         *
                         * @return      {java.time.Instant} The time
                         */
                        getTime() {
                            return this.time;
                        }
                        /**
                         * A Time Data Query occurs when the controller on the timeline is moved. The method set the
                         * time of the data query.
                         *
                         * @param {java.time.Instant} time      The time
                         * @private
                         */
                        /*private*/ setTime(time) {
                            this.time = time;
                        }
                    }
                    navbar.Timeline = Timeline;
                    Timeline["__class"] = "de.visaq.view.elements.navbar.Timeline";
                    Timeline["__interfaces"] = ["de.visaq.view.elements.navbar.NavbarElement"];
                })(navbar = elements.navbar || (elements.navbar = {}));
            })(elements = view.elements || (view.elements = {}));
        })(view = visaq.view || (visaq.view = {}));
    })(visaq = de.visaq || (de.visaq = {}));
})(de || (de = {}));
