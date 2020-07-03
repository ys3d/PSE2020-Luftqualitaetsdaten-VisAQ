/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
namespace de.visaq.view {
    /**
     * Interface for all Navbar Observers.
     * @class
     */
    export interface NavbarObserver {
        /**
         * Method to update with the instances of the Navbar class.
         * 
         * @param {de.visaq.view.elements.navbar.SearchBar} searchbar             The searchbar instance
         * @param {de.visaq.view.elements.airquality.AirQualityData} currentAirQualityData The instance of the current Air Quality Data
         * @param {boolean} expertView            Boolean, the instance of the Expert View
         * @param {de.visaq.view.elements.navbar.ExpertViewFilter} expertViewFilter      The instance of the Expert View Filter
         * @param {boolean} historicalView        The instance of the Historical View
         */
        update(searchbar : de.visaq.view.elements.navbar.SearchBar, currentAirQualityData : de.visaq.view.elements.airquality.AirQualityData, expertView : boolean, expertViewFilter : de.visaq.view.elements.navbar.ExpertViewFilter, historicalView : boolean);
    }
}

