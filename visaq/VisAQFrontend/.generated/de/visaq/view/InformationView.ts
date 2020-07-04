/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
namespace de.visaq.view {
    /**
     * InformationView creates the view using a helping overlay allowing the user to easier navigate
     * through the website. TODO
     * @class
     * @extends de.visaq.view.View
     */
    export class InformationView extends de.visaq.view.View {
        /*private*/ icon : L.Icon<L.BaseIconOptions> = null;

        /**
         * 
         */
        public show() {
        }

        /**
         * Returns the icon.
         * 
         * @return {L.Icon} The icon
         */
        public getIcon() : L.Icon<L.BaseIconOptions> {
            return this.icon;
        }

        /**
         * Setter for the icon.
         * 
         * @param {L.Icon} icon  The icon
         */
        public setIcon(icon : L.Icon<L.BaseIconOptions>) {
            this.icon = icon;
        }

        /**
         * 
         * @param {de.visaq.view.elements.navbar.SearchBar} searchbar
         * @param {de.visaq.view.elements.airquality.AirQualityData} currentAirQualityData
         * @param {boolean} expertView
         * @param {de.visaq.view.elements.navbar.ExpertViewFilter} expertViewFilter
         * @param {boolean} historicalView
         */
        public update(searchbar : de.visaq.view.elements.navbar.SearchBar, currentAirQualityData : de.visaq.view.elements.airquality.AirQualityData, expertView : boolean, expertViewFilter : de.visaq.view.elements.navbar.ExpertViewFilter, historicalView : boolean) {
        }

        constructor() {
            super();
        }
    }
    InformationView["__class"] = "de.visaq.view.InformationView";
    InformationView["__interfaces"] = ["de.visaq.view.NavbarObserver"];


}

