package de.visaq.view;

import java.time.Instant;
import java.util.ArrayList;

import org.json.JSONObject;

import de.visaq.model.Sensor;
import de.visaq.view.elements.airquality.AirQualityData;
import de.visaq.view.elements.map.Legend;
import de.visaq.view.elements.map.SensorOverview;
import de.visaq.view.elements.navbar.ExpertViewFilter;
import de.visaq.view.elements.navbar.SearchBar;
import de.visaq.view.elements.navbar.Timeline;
import de.visaq.view.overlay.factory.InterpolationOverlayFactory;
import de.visaq.view.overlay.factory.OverlayBuilder;
import de.visaq.view.overlay.factory.OverlayFactory;
import de.visaq.view.overlay.factory.SensorOverlayFactory;
import def.leaflet.l.Layer;
import def.leaflet.l.Map;

/**
 * Map View creates the view for the Map using the Map Overlay allowing the user to see the Map as
 * well as the Legend, Timeline and SensorOverview.
 */
public class MapView extends View {
    public final Map map;
    public final AirQualityData[] airqualityData;
    private OverlayBuilder overlayBuilder;
    private ArrayList<OverlayFactory> overlayFactories;
    private ArrayList<Layer> layers;
    private Legend legend;
    private SensorOverview sensorOverview;
    private SearchBar searchBar;
    private AirQualityData currentAirQualityData;
    private boolean expertView;
    private ExpertViewFilter expertViewFilter;
    private boolean historicalView;
    private Timeline timeline;
    private Instant time;

    /**
     * Construct a MapView using the provided Map.
     * 
     * @param airQualityData    The Air Quality Data
     * @param map               The Map instance
     */
    public MapView(Map map, AirQualityData[] airQualityData) {
        this.map = map;
        this.airqualityData = airQualityData;
        this.layers = new ArrayList<Layer>();
        this.overlayFactories = new ArrayList<OverlayFactory>();
        OverlayFactory sensorOverlayFactory = new SensorOverlayFactory();
        OverlayFactory interpolationOverlayFactory = new InterpolationOverlayFactory();
        this.overlayFactories.add(sensorOverlayFactory);
        this.overlayFactories.add(interpolationOverlayFactory);
        this.overlayBuilder = new OverlayBuilder(overlayFactories);
        this.timeline = new Timeline();
    }

    @Override
    public void show() {
        if (historicalView) {
            timeline.show();
        }
        this.legend = new Legend(currentAirQualityData);
        legend.show();
        removeOverlays();
        addOverlays();
        // TODO Auto-generated method stub

    }   

    /**
     * Is activated when to user marks a point on the map. Shows the Sidebar containing the
     * different information to either the chosen Point or the Sensor.
     *
     * @param coordinates       The coordinates
     */
    public void mapDataQueryCoordinates(JSONObject coordinates) {
        sensorOverview = new SensorOverview(airqualityData, coordinates, currentAirQualityData, 
                this.time);
        sensorOverview.show();
    }

    /**
     * Is activated when to user marks a sensor on the map. Shows the Sidebar containing the
     * different information to either the chosen Point or the Sensor.
     *
     * @param sensor            The sensor
     */
    public void mapDataQuerySensor(Sensor sensor) {
        sensorOverview = new SensorOverview(airqualityData, sensor, currentAirQualityData, 
                this.time);
        sensorOverview.show();
    }

    @Override
    public void update(SearchBar searchBar, AirQualityData currentAirQualityData,
            boolean expertView, ExpertViewFilter expertViewFilter, boolean historicalView) {
        this.searchBar = searchBar;
        this.currentAirQualityData = currentAirQualityData;
        this.expertView = expertView;
        this.expertViewFilter = expertViewFilter;
        this.historicalView = historicalView;
        show();
    }

    /**
     * Adds Overlays to the instance Map of Map View.
     */
    private void addOverlays() {
        if (!historicalView) {
            time = Instant.now();
        } else {
            time = timeline.getTime();
        }
        if (expertView) {
            layers.addAll(overlayBuilder.buildExpertOverlays(currentAirQualityData, map.getBounds(),
                    expertViewFilter.getSelectedSensors(), time));
        } else {
            layers.addAll(overlayBuilder.buildOverlays(currentAirQualityData, 
                    map.getBounds(), time));
        }
    }

    /**
     * Removes Overlays from the Map instance.
     */
    private void removeOverlays() {
    }
}
