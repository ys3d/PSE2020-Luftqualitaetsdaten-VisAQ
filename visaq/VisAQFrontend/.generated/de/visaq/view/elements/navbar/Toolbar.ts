/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
namespace de.visaq.view.elements.navbar {
    /**
     * Constructor for the Navbar.
     * @class
     */
    export class Toolbar implements de.visaq.view.elements.navbar.NavbarElement {
        /*private*/ historicalMapView : boolean = false;

        toolbar : HTMLElement = document.createElement("toolbar");

        /*private*/ diyButton : HTMLElement = document.createElement("DIY");

        /*private*/ pmDefButton : HTMLElement = document.createElement("PM Definition");

        /*private*/ causesPmButton : HTMLElement = document.createElement("PM Causes");

        /*private*/ smartAqButton : HTMLElement = document.createElement("SmartAQNet");

        /*private*/ __historicalData : HTMLElement = document.createElement("Historical Data");

        public constructor() {
        }

        /**
         * Contains the link to the DIY site.
         * @private
         */
        /*private*/ diy() {
            this.diyButton.onclick = (e) => {
                window.location.replace("https://www.smartaq.net/de/participate/");
                return e;
            };
            this.toolbar.appendChild(this.diyButton);
        }

        /**
         * Contains the definition for PM.
         * @private
         */
        /*private*/ pmDefiniton() {
            this.toolbar.appendChild(this.pmDefButton);
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
            this.smartAqButton.onclick = (e) => {
                window.location.replace("https://www.smartaq.net/en/dashboard/#/home");
                return e;
            };
            this.toolbar.appendChild(this.smartAqButton);
        }

        /**
         * Will later open the Timeline with historical Data on the Map.
         * @private
         */
        /*private*/ historicalData() {
            this.setHistoricalMapView(true);
            this.toolbar.appendChild(this.__historicalData);
        }

        /**
         * 
         */
        public show() {
        }

        /**
         * Return the if the Historical View is set.
         * 
         * @return {boolean} The instance of Historical View
         */
        public isHistoricalMapView() : boolean {
            return this.historicalMapView;
        }

        /**
         * Sets the Historical View.
         * 
         * @param historicalView The instance of Historical View
         * @param {boolean} historicalMapView
         * @private
         */
        /*private*/ setHistoricalMapView(historicalMapView : boolean) {
            this.historicalMapView = historicalMapView;
        }
    }
    Toolbar["__class"] = "de.visaq.view.elements.navbar.Toolbar";
    Toolbar["__interfaces"] = ["de.visaq.view.elements.navbar.NavbarElement"];


}

