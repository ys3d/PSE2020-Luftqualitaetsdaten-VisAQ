/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var de;
(function (de) {
    var visaq;
    (function (visaq) {
        var view;
        (function (view_1) {
            var elements;
            (function (elements) {
                var navbar;
                (function (navbar) {
                    /**
                     * Constructor for a new Navbar instance.
                     *
                     * @param {de.visaq.view.elements.airquality.AirQualityData} currentAirQualityData The currentAirQualityData
                     * @param {Array} airQualityData       The selectable Air Quality Data overlays.
                     * @param {de.visaq.view.View} currentView           The current View
                     * @param {de.visaq.view.View[]} views                 The Views
                     * @class
                     */
                    class Navbar {
                        constructor(currentAirQualityData, airQualityData, currentView, views) {
                            /*private*/ this.expertMapView = false;
                            if (this.airQualityData === undefined)
                                this.airQualityData = null;
                            if (this.toolbar === undefined)
                                this.toolbar = null;
                            if (this.searchbar === undefined)
                                this.searchbar = null;
                            if (this.expertViewFilter === undefined)
                                this.expertViewFilter = null;
                            if (this.currentAirQualityData === undefined)
                                this.currentAirQualityData = null;
                            if (this.currentView === undefined)
                                this.currentView = null;
                            if (this.observer === undefined)
                                this.observer = null;
                            this.airQualityData = airQualityData;
                            this.currentAirQualityData = currentAirQualityData;
                            this.currentView = currentView;
                            this.observer = ([]);
                            for (let index137 = 0; index137 < views.length; index137++) {
                                let view = views[index137];
                                {
                                    /* add */ (this.observer.push(view) > 0);
                                }
                            }
                            this.toolbar = new de.visaq.view.elements.navbar.Toolbar();
                            this.searchbar = new de.visaq.view.elements.navbar.SearchBar();
                            this.expertViewFilter = new de.visaq.view.elements.navbar.ExpertViewFilter();
                        }
                        /**
                         *
                         */
                        show() {
                            if (this.expertMapView) {
                                this.expertViewFilter.show();
                            }
                            this.showAirQualityDatas();
                            this.searchbar.show();
                        }
                        /**
                         * Shows the Toolbar.
                         */
                        openToolbar() {
                            this.toolbar.show();
                        }
                        /**
                         * Activates the current View.
                         */
                        showView() {
                            this.currentView.show();
                        }
                        /**
                         * Sets the instance of the current Air Quality Data.
                         *
                         * @param {de.visaq.view.elements.airquality.AirQualityData} currentAirQualityData A instance of Air Quality Data.
                         */
                        setCurrentAirQualityData(currentAirQualityData) {
                            this.currentAirQualityData = currentAirQualityData;
                            this.notifyObserver();
                        }
                        /**
                         *
                         * @param {*} navbarObserver
                         */
                        attach(navbarObserver) {
                            /* add */ (this.observer.push(navbarObserver) > 0);
                        }
                        /**
                         *
                         * @param {*} navbarObserver
                         */
                        detach(navbarObserver) {
                            /* remove */ (a => { let index = a.indexOf(navbarObserver); if (index >= 0) {
                                a.splice(index, 1);
                                return true;
                            }
                            else {
                                return false;
                            } })(this.observer);
                        }
                        /**
                         *
                         */
                        notifyObserver() {
                            for (let index138 = 0; index138 < this.observer.length; index138++) {
                                let nb = this.observer[index138];
                                {
                                    nb.update(this.searchbar, this.currentAirQualityData, this.expertMapView, this.expertViewFilter, this.toolbar.isHistoricalMapView());
                                }
                            }
                        }
                        /**
                         * Shows the available Air Quality Data Overlays.
                         * @private
                         */
                        /*private*/ showAirQualityDatas() {
                            for (let index139 = 0; index139 < this.airQualityData.length; index139++) {
                                let airQualityData = this.airQualityData[index139];
                                {
                                    let name = airQualityData.name;
                                }
                            }
                        }
                        /**
                         * Sets the current View.
                         *
                         * @param {de.visaq.view.View} view  The current View
                         * @private
                         */
                        /*private*/ setCurrentView(view) {
                            this.currentView.show();
                        }
                    }
                    navbar.Navbar = Navbar;
                    Navbar["__class"] = "de.visaq.view.elements.navbar.Navbar";
                    Navbar["__interfaces"] = ["de.visaq.view.elements.navbar.NavbarElement", "de.visaq.view.elements.navbar.ObservedNavbarSubject"];
                })(navbar = elements.navbar || (elements.navbar = {}));
            })(elements = view_1.elements || (view_1.elements = {}));
        })(view = visaq.view || (visaq.view = {}));
    })(visaq = de.visaq || (de.visaq = {}));
})(de || (de = {}));
