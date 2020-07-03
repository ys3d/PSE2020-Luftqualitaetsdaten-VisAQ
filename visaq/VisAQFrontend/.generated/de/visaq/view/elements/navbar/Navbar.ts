/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
namespace de.visaq.view.elements.navbar {
    /**
     * Constructor for a new Navbar instance.
     * 
     * @param {de.visaq.view.elements.airquality.AirQualityData} currentAirQualityData The currentAirQualityData
     * @param {Array} airQualityData       The selectable Air Quality Data overlays.
     * @param {de.visaq.view.View} currentView           The current View
     * @param {de.visaq.view.View[]} views                 The Views
     * @class
     */
    export class Navbar implements de.visaq.view.elements.navbar.ObservedNavbarSubject, de.visaq.view.elements.navbar.NavbarElement {
        public airQualityData : de.visaq.view.elements.airquality.AirQualityData[];

        public toolbar : de.visaq.view.elements.navbar.Toolbar;

        public searchbar : de.visaq.view.elements.navbar.SearchBar;

        public expertViewFilter : de.visaq.view.elements.navbar.ExpertViewFilter;

        /*private*/ expertMapView : boolean = false;

        /*private*/ currentAirQualityData : de.visaq.view.elements.airquality.AirQualityData;

        /*private*/ currentView : de.visaq.view.View;

        /*private*/ observer : Array<de.visaq.view.NavbarObserver>;

        public constructor(currentAirQualityData : de.visaq.view.elements.airquality.AirQualityData, airQualityData : de.visaq.view.elements.airquality.AirQualityData[], currentView : de.visaq.view.View, views : Array<de.visaq.view.View>) {
            if(this.airQualityData===undefined) this.airQualityData = null;
            if(this.toolbar===undefined) this.toolbar = null;
            if(this.searchbar===undefined) this.searchbar = null;
            if(this.expertViewFilter===undefined) this.expertViewFilter = null;
            if(this.currentAirQualityData===undefined) this.currentAirQualityData = null;
            if(this.currentView===undefined) this.currentView = null;
            if(this.observer===undefined) this.observer = null;
            this.airQualityData = airQualityData;
            this.currentAirQualityData = currentAirQualityData;
            this.currentView = currentView;
            this.observer = <any>([]);
            for(let index133=0; index133 < views.length; index133++) {
                let view = views[index133];
                {
                    /* add */(this.observer.push(view)>0);
                }
            }
            this.toolbar = new de.visaq.view.elements.navbar.Toolbar();
            this.searchbar = new de.visaq.view.elements.navbar.SearchBar();
            this.expertViewFilter = new de.visaq.view.elements.navbar.ExpertViewFilter();
        }

        /**
         * 
         */
        public show() {
            if(this.expertMapView) {
                this.expertViewFilter.show();
            }
            this.showAirQualityDatas();
            this.searchbar.show();
        }

        /**
         * Shows the Toolbar.
         */
        public openToolbar() {
            this.toolbar.show();
        }

        /**
         * Activates the current View.
         */
        public showView() {
            this.currentView.show();
        }

        /**
         * Sets the instance of the current Air Quality Data.
         * 
         * @param {de.visaq.view.elements.airquality.AirQualityData} currentAirQualityData A instance of Air Quality Data.
         */
        public setCurrentAirQualityData(currentAirQualityData : de.visaq.view.elements.airquality.AirQualityData) {
            this.currentAirQualityData = currentAirQualityData;
            this.notifyObserver();
        }

        /**
         * 
         * @param {*} navbarObserver
         */
        public attach(navbarObserver : de.visaq.view.NavbarObserver) {
            /* add */(this.observer.push(navbarObserver)>0);
        }

        /**
         * 
         * @param {*} navbarObserver
         */
        public detach(navbarObserver : de.visaq.view.NavbarObserver) {
            /* remove */(a => { let index = a.indexOf(navbarObserver); if(index>=0) { a.splice(index, 1); return true; } else { return false; }})(this.observer);
        }

        /**
         * 
         */
        public notifyObserver() {
            for(let index134=0; index134 < this.observer.length; index134++) {
                let nb = this.observer[index134];
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
            for(let index135=0; index135 < this.airQualityData.length; index135++) {
                let airQualityData = this.airQualityData[index135];
                {
                    let name : string = airQualityData.name;
                }
            }
        }

        /**
         * Sets the current View.
         * 
         * @param {de.visaq.view.View} view  The current View
         * @private
         */
        /*private*/ setCurrentView(view : de.visaq.view.View) {
            this.currentView.show();
        }
    }
    Navbar["__class"] = "de.visaq.view.elements.navbar.Navbar";
    Navbar["__interfaces"] = ["de.visaq.view.elements.navbar.NavbarElement","de.visaq.view.elements.navbar.ObservedNavbarSubject"];


}

