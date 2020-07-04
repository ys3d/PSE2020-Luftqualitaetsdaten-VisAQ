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
                     * Constructor for the Navbar.
                     * @class
                     */
                    class Toolbar {
                        constructor() {
                            /*private*/ this.historicalMapView = false;
                        }
                        /**
                         * Contains the link to the DIY site.
                         * @private
                         */
                        /*private*/ diy() {
                        }
                        /**
                         * Contains the definition for PM.
                         * @private
                         */
                        /*private*/ pmDefiniton() {
                        }
                        /**
                         * Contains the causes for PM.
                         * @private
                         */
                        /*private*/ causesPM() {
                        }
                        /**
                         * Contains a link to the site of smartAQNet.
                         * @private
                         */
                        /*private*/ smartAqNet() {
                        }
                        /**
                         * Will later open the Timeline with historical Data on the Map.
                         * @private
                         */
                        /*private*/ historicalData() {
                            this.setHistoricalMapView(true);
                        }
                        /**
                         *
                         */
                        show() {
                        }
                        /**
                         * Return the if the Historical View is set.
                         *
                         * @return {boolean} The instance of Historical View
                         */
                        isHistoricalMapView() {
                            return this.historicalMapView;
                        }
                        /**
                         * Sets the Historical View.
                         *
                         * @param historicalView The instance of Historical View
                         * @param {boolean} historicalMapView
                         * @private
                         */
                        /*private*/ setHistoricalMapView(historicalMapView) {
                            this.historicalMapView = historicalMapView;
                        }
                    }
                    navbar.Toolbar = Toolbar;
                    Toolbar["__class"] = "de.visaq.view.elements.navbar.Toolbar";
                    Toolbar["__interfaces"] = ["de.visaq.view.elements.navbar.NavbarElement"];
                })(navbar = elements.navbar || (elements.navbar = {}));
            })(elements = view.elements || (view.elements = {}));
        })(view = visaq.view || (visaq.view = {}));
    })(visaq = de.visaq || (de.visaq = {}));
})(de || (de = {}));
