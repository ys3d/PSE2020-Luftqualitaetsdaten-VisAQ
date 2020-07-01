package de.visaq.model;

import java.util.Map;

/**
 * <p>
 * Representation of the Sensors entity in the Frontend.
 * </p>
 * <p>
 * A Sensor in SensorThings API is an instrument that observes a property or phenomenon with the
 * goal of producing an estimate of the value of the property.
 * </p>
 * 
 * @see <a href=
 *      "https://developers.sensorup.com/docs/#sensors_post">https://developers.sensorup.com/docs/#sensors_post</a>
 */
public class Sensor extends Sensorthing<Sensor> {
    public final String description;
    public final String name;
    public final Map<String, Object> properties;

    /**
     * Constructs a new {@link Sensor}.
     *
     * @param id          The identifier of the {@link Sensor} in the SensorThings
     *                    standard
     * @param description The description of the {@link Sensor}
     * @param name        The name of the {@link Sensor}
     * @param properties  Several properties of the {@link Sensor}
     */
    public Sensor(String id, String description, String name, Map<String, Object> properties) {
        super(id);
        this.description = description;
        this.name = name;
        this.properties = properties;
    }

    @Override
    public boolean equals(Object obj) {
        // TODO Auto-generated method stub
        return super.equals(obj);
    }
}
