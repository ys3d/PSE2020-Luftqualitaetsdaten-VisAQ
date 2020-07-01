package de.visaq.view.overlay.factory;

import de.visaq.model.SensorDatum;
import de.visaq.view.elements.airquality.AirQualityData;
import def.leaflet.l.Layer;

/**
 * Creates an interpolated Map Overlay from given Sensor Data.
 */
public class InterpolationOverlayFactory implements OverlayFactory {

    @Override
    public Layer build(AirQualityData airquality, SensorDatum[] data) {
        return null;

    }
}
