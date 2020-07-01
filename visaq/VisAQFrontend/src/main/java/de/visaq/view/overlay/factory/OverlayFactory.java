package de.visaq.view.overlay.factory;

import de.visaq.model.SensorDatum;
import de.visaq.view.elements.airquality.AirQualityData;
import def.leaflet.l.Layer;

/**
 * Encapsulates the control over all Overlay Factories.
 */
public interface OverlayFactory {

    /**
     * Builds a Map Overlay using Sensor Data and the Color Theme of the Air Quality Instace.
     *
     * @param airQuality    The Air Quality that is depicted
     * @param data          Array of the Sensor Data to construct an Map Overlay
     * @return              A Map Overlay for the map.
     */
    public abstract Layer build(AirQualityData airQuality, SensorDatum[] data);
}
