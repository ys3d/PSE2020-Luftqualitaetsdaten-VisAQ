package de.visaq.model.sensorthings;

import java.util.Map;

import de.visaq.controller.link.MultiNavigationLink;

/**
 * <p>
 * Representation of the Sensors entity in the OGC SensorThings API.
 * </p>
 * <p>
 * A Sensor in SensorThings API is an instrument that observes a property or phenomenon with the
 * goal of producing an estimate of the value of the property.
 * </p>
 * 
 * @see <a href=
 *      "https://developers.sensorup.com/docs/#sensors_post">https://developers.sensorup.com/docs/#sensors_post</a>
 */
public class Sensor extends Sensorthing<Sensor> implements SensorthingsProperties {
    public final String description;
    public final String name;
    public final Map<String, Object> properties;
    public final MultiNavigationLink<Datastream> datastreamsLink;

    /**
     * Constructs a new {@link Sensor}.
     * 
     * @param id              {@link Sensorthing#Sensorthings(String, String, boolean)}
     * @param selfUrl         {@link Sensorthing#Sensorthings(String, String, boolean)}
     * @param relative        {@link Sensorthing#Sensorthings(String, String, boolean)}
     * @param description     The description of the {@link Sensor}
     * @param name            The name of the {@link Sensor}
     * @param properties      Several properties of the {@link Sensor}
     * @param datastreamsLink Links to the {@link Datastream}
     */
    public Sensor(String id, String selfUrl, boolean relative, String description, String name,
            Map<String, Object> properties, MultiNavigationLink<Datastream> datastreamsLink) {
        super(id, selfUrl, relative);
        this.description = description;
        this.name = name;
        this.properties = properties;
        this.datastreamsLink = datastreamsLink;
    }

    @Override
    public boolean equals(Object obj) {
        // TODO Auto-generated method stub
        return super.equals(obj);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Object getPropertyByKey(String key) {
        // TODO Auto-generated method stub
        return null;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public boolean hasProperties(String key) {
        // TODO Auto-generated method stub
        return false;
    }
}
