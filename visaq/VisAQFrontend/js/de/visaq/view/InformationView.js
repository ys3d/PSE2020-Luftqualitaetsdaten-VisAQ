/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var de;
(function (de) {
    var visaq;
    (function (visaq) {
        var view;
        (function (view) {
            /**
             * InformationView creates the view using a helping overlay allowing the user to easier navigate
             * through the website. TODO
             * @class
             * @extends de.visaq.view.View
             */
            class InformationView extends de.visaq.view.View {
                constructor() {
                    super();
                    /*private*/ this.icon = null;
                }
                /**
                 *
                 */
                show() {
                }
                /**
                 * Returns the icon.
                 *
                 * @return {L.Icon} The icon
                 */
                getIcon() {
                    return this.icon;
                }
                /**
                 * Setter for the icon.
                 *
                 * @param {L.Icon} icon  The icon
                 */
                setIcon(icon) {
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
                update(searchbar, currentAirQualityData, expertView, expertViewFilter, historicalView) {
                }
            }
            view.InformationView = InformationView;
            InformationView["__class"] = "de.visaq.view.InformationView";
            InformationView["__interfaces"] = ["de.visaq.view.NavbarObserver"];
        })(view = visaq.view || (visaq.view = {}));
    })(visaq = de.visaq || (de.visaq = {}));
})(de || (de = {}));
