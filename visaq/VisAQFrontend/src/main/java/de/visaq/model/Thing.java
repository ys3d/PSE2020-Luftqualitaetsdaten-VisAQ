package de.visaq.model;

import java.util.Map;

/**
 * <p>
 * Representation of the Things entity in the Frontend.
 * </p>
 * <p>
 * A Thing is an object of the physical world (physical Things) or the information world (virtual
 * Things) that is capable of being identified and integrated into communication networks [ITU-T
 * Y.2060]. A Thing has Locations and one or more Datastreams to collect Observations.
 * </p>
 * 
 * @see <a href=
 *      "https://developers.sensorup.com/docs/#things">https://developers.sensorup.com/docs/#things</a>
 */
public class Thing extends Sensorthing<Thing> {
    public final String description;
    public final String name;
    public final Map<String, Object> properties;

    /**
     * Constructs a new {@link Thing}.
     * 
     * @param id          The identifier of the {@link Thing} in the SensorThings standard
     * @param description The description of the {@link Thing}
     * @param name        The name of the {@link Thing}
     * @param properties  Several properties of the {@link Sensor}
     */
    public Thing(String id, String description, String name, Map<String, Object> properties) {
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
