/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
namespace de.visaq.view {
    /**
     * Shows what the User is seeing and adapts to different Languages and ColorThemes.
     * @class
     */
    export abstract class View implements de.visaq.view.NavbarObserver {
        /**
         * Shows the different instances in the View.
         */
        public abstract show();

        public abstract update(searchbar?: any, currentAirQualityData?: any, expertView?: any, expertViewFilter?: any, historicalView?: any): any;
        constructor() {
        }
    }
    View["__class"] = "de.visaq.view.View";
    View["__interfaces"] = ["de.visaq.view.NavbarObserver"];


}

