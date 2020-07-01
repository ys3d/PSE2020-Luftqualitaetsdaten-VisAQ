package de.visaq.view.overlay.factory;

import java.time.Instant;
import java.util.ArrayList;

import de.visaq.controller.AngularController;
import de.visaq.model.Sensor;
import de.visaq.model.SensorDatum;
import de.visaq.view.elements.airquality.AirQualityData;
import def.leaflet.l.LatLngBounds;
import def.leaflet.l.Layer;

/**
 * Access point to the overlay factory. It builds overlays for maps using the special factories.
 */
public class OverlayBuilder {

    private ArrayList<OverlayFactory> factories = null;
    private AngularController angularController;
    
    /**
     * Default Builder uses Sensor Overlay Factory and Interpolation Overlay Factory.
     */
    public OverlayBuilder() {
    }

    /**
     * Builder for building overlays with the given factories.
     * 
     * @param factories Are the Overlay Factories used to fabricate Map Overlays
     */
    public OverlayBuilder(ArrayList<OverlayFactory> factories) {
    }

    /**
     * Method that runs Overlay Factories with the matching data.
     * 
     * @param airQuality   Is the Observed Property of the Sensors
     * @param latLngBounds The bounds of the Map
     * @param time         The time
     * @return The resulting Map Overlays
     */
    public ArrayList<Layer> buildOverlays(AirQualityData airQuality, LatLngBounds latLngBounds,
            Instant time) {
        ArrayList<Layer> layers = new ArrayList<Layer>();
        SensorDatum[] data = null;
        for (OverlayFactory factory : factories) {
            layers.add(factory.build(airQuality, data));
        }
        return layers;
    }

    /**
     * Method that runs Overlay Factories with the matching data restricted by a collection of
     * Sensor Types.
     * 
     * @param airQuality          Is the Observed Property of the Sensors
     * @param latLngBounds        The bounds of the map
     * @param selectedSensortypes The selected Sensor Types
     * @param time                The time
     * @return The resulting Map Overlays
     */
    public ArrayList<Layer> buildExpertOverlays(AirQualityData airQuality,
            LatLngBounds latLngBounds, ArrayList<Sensor> selectedSensortypes, Instant time) {
        ArrayList<Layer> layers = new ArrayList<Layer>();
        return layers;
    }
}
