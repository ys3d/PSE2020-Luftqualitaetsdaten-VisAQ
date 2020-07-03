/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
namespace de.visaq.view {
    /**
     * Construct a MapView using the provided Map.
     * 
     * @param {Array} airQualityData    The Air Quality Data
     * @param {L.Map} map               The Map instance
     * @class
     * @extends de.visaq.view.View
     */
    export class MapView extends de.visaq.view.View {
        public map : L.Map;

        public airqualityData : de.visaq.view.elements.airquality.AirQualityData[];

        /*private*/ overlayBuilder : de.visaq.view.overlay.factory.OverlayBuilder;

        /*private*/ overlayFactories : Array<de.visaq.view.overlay.factory.OverlayFactory>;

        /*private*/ layers : Array<L.Layer>;

        /*private*/ legend : de.visaq.view.elements.map.Legend;

        /*private*/ sensorOverview : de.visaq.view.elements.map.SensorOverview;

        /*private*/ searchBar : de.visaq.view.elements.navbar.SearchBar;

        /*private*/ currentAirQualityData : de.visaq.view.elements.airquality.AirQualityData;

        /*private*/ expertView : boolean;

        /*private*/ expertViewFilter : de.visaq.view.elements.navbar.ExpertViewFilter;

        /*private*/ historicalView : boolean;

        /*private*/ timeline : de.visaq.view.elements.navbar.Timeline;

        /*private*/ time : java.time.Instant;

        public constructor(map : L.Map, airQualityData : de.visaq.view.elements.airquality.AirQualityData[]) {
            super();
            if(this.map===undefined) this.map = null;
            if(this.airqualityData===undefined) this.airqualityData = null;
            if(this.overlayBuilder===undefined) this.overlayBuilder = null;
            if(this.overlayFactories===undefined) this.overlayFactories = null;
            if(this.layers===undefined) this.layers = null;
            if(this.legend===undefined) this.legend = null;
            if(this.sensorOverview===undefined) this.sensorOverview = null;
            if(this.searchBar===undefined) this.searchBar = null;
            if(this.currentAirQualityData===undefined) this.currentAirQualityData = null;
            if(this.expertView===undefined) this.expertView = false;
            if(this.expertViewFilter===undefined) this.expertViewFilter = null;
            if(this.historicalView===undefined) this.historicalView = false;
            if(this.timeline===undefined) this.timeline = null;
            if(this.time===undefined) this.time = null;
            this.map = map;
            this.airqualityData = airQualityData;
            this.layers = <any>([]);
            this.overlayFactories = <any>([]);
            let sensorOverlayFactory : de.visaq.view.overlay.factory.OverlayFactory = new de.visaq.view.overlay.factory.SensorOverlayFactory();
            let interpolationOverlayFactory : de.visaq.view.overlay.factory.OverlayFactory = new de.visaq.view.overlay.factory.InterpolationOverlayFactory();
            /* add */(this.overlayFactories.push(sensorOverlayFactory)>0);
            /* add */(this.overlayFactories.push(interpolationOverlayFactory)>0);
            this.overlayBuilder = new de.visaq.view.overlay.factory.OverlayBuilder(this.overlayFactories);
            this.timeline = new de.visaq.view.elements.navbar.Timeline();
        }

        /**
         * 
         */
        public show() {
            if(this.historicalView) {
                this.timeline.show();
            }
            this.legend = new de.visaq.view.elements.map.Legend(this.currentAirQualityData);
            this.legend.show();
            this.removeOverlays();
            this.addOverlays();
        }

        /**
         * Is activated when to user marks a point on the map. Shows the Sidebar containing the
         * different information to either the chosen Point or the Sensor.
         * 
         * @param {org.json.JSONObject} coordinates       The coordinates
         */
        public mapDataQueryCoordinates(coordinates : org.json.JSONObject) {
            this.sensorOverview = new de.visaq.view.elements.map.SensorOverview(this.airqualityData, coordinates, this.currentAirQualityData, this.time);
            this.sensorOverview.show();
        }

        /**
         * Is activated when to user marks a sensor on the map. Shows the Sidebar containing the
         * different information to either the chosen Point or the Sensor.
         * 
         * @param {de.visaq.model.Sensor} sensor            The sensor
         */
        public mapDataQuerySensor(sensor : de.visaq.model.Sensor) {
            this.sensorOverview = new de.visaq.view.elements.map.SensorOverview(this.airqualityData, sensor, this.currentAirQualityData, this.time);
            this.sensorOverview.show();
        }

        /**
         * 
         * @param {de.visaq.view.elements.navbar.SearchBar} searchBar
         * @param {de.visaq.view.elements.airquality.AirQualityData} currentAirQualityData
         * @param {boolean} expertView
         * @param {de.visaq.view.elements.navbar.ExpertViewFilter} expertViewFilter
         * @param {boolean} historicalView
         */
        public update(searchBar : de.visaq.view.elements.navbar.SearchBar, currentAirQualityData : de.visaq.view.elements.airquality.AirQualityData, expertView : boolean, expertViewFilter : de.visaq.view.elements.navbar.ExpertViewFilter, historicalView : boolean) {
            this.searchBar = searchBar;
            this.currentAirQualityData = currentAirQualityData;
            this.expertView = expertView;
            this.expertViewFilter = expertViewFilter;
            this.historicalView = historicalView;
            this.show();
        }

        /**
         * Adds Overlays to the instance Map of Map View.
         * @private
         */
        /*private*/ addOverlays() {
            if(!this.historicalView) {
                this.time = java.time.Instant.now();
            } else {
                this.time = this.timeline.getTime();
            }
            if(this.expertView) {
                /* addAll */((l1, l2) => l1.push.apply(l1, l2))(this.layers, this.overlayBuilder.buildExpertOverlays(this.currentAirQualityData, this.map.getBounds(), this.expertViewFilter.getSelectedSensors(), this.time));
            } else {
                /* addAll */((l1, l2) => l1.push.apply(l1, l2))(this.layers, this.overlayBuilder.buildOverlays(this.currentAirQualityData, this.map.getBounds(), this.time));
            }
        }

        /**
         * Removes Overlays from the Map instance.
         * @private
         */
        /*private*/ removeOverlays() {
        }
    }
    MapView["__class"] = "de.visaq.view.MapView";
    MapView["__interfaces"] = ["de.visaq.view.NavbarObserver"];


}

