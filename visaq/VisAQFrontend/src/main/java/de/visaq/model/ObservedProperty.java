package de.visaq.model;

import java.util.Map;

/**
 * <p>
 * Representation of the ObservedProperty entity in the Frontend.
 * </p>
 * <p>
 * An ObservedProperty specifies the phenomenon of an {@link Observation}.
 * </p>
 * 
 * @see <a href=
 *      "https://developers.sensorup.com/docs/#observedProperties_post">https://developers.sensorup.com/docs/#observedProperties_post</a>
 */
public class ObservedProperty extends Sensorthing<ObservedProperty> {
    public final String name;
    public final String definition;
    public final String description;
    public final Map<String, Object> properties;

    /**
     * Constructs a new {@link ObservedProperty}.
     * 
     * @param id          The identifier of the {@link ObservedProperty} in the SensorThings
     *                    standard
     * @param description The description of the {@link ObservedProperty}
     * @param name        The name of the {@link ObservedProperty}
     * @param properties  The properties of the Observed Property
     * @param definition  A URL which links to a definition of the {@link ObservedProperty}
     */
    public ObservedProperty(String id, String description, String name,
            Map<String, Object> properties, String definition) {
        super(id);
        this.name = name;
        this.definition = definition;
        this.description = description;
        this.properties = properties;
    }

    @Override
    public boolean equals(Object obj) {
        // TODO Auto-generated method stub
        return super.equals(obj);
    }
}