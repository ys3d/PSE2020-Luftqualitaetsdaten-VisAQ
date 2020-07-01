package de.visaq.model;

import java.util.Map;

/**
 * <p>
 * Representation of the Datastream entity in the Frontend.
 * </p>
 * <p>
 * Datastreams group {@link Observation}s on the same {@link ObservedProperty} and {@link Sensor}
 * </p>
 * 
 * @see <a href=
 *      "https://developers.sensorup.com/docs/#datastreams_post">https://developers.sensorup.com/docs/#datastreams_post</a>
 */
public class Datastream extends Sensorthing<Datastream> {
    public final String name;
    public final String description;
    public final UnitOfMeasurement unitOfMeasurement;

    /**
     * Constructs a new {@link Datastream}.
     * 
     * @param id                The identifier of the {@link Datastream} in the SensorThings
     *                          standard
     * @param name              The name of the {@link Datastream}
     * @param description       The description of the {@link Datastream}
     * @param properties        Several properties given by the database
     * @param unitOfMeasurement The Unit of Measurement
     */
    public Datastream(String id, String name, String description, Map<String, Object> properties,
            UnitOfMeasurement unitOfMeasurement) {
        super(id);
        this.name = name;
        this.description = description;
        this.unitOfMeasurement = unitOfMeasurement;
    }

    @Override
    public boolean equals(Object obj) {
        // TODO Auto-generated method stub
        return super.equals(obj);
    }
}
