package de.visaq.model;

import java.time.Instant;

/**
 * <p>
 * Representation of the Observation entity in the Frontend.
 * </p>
 * <p>
 * An Observation is the act of measuring or otherwise determining the value of a property. An
 * Observation in SensorThings represents a single Sensor reading of an ObservedProperty.
 * </p>
 * 
 * @see <a href=
 *      "https://developers.sensorup.com/docs/#observations_post">https://developers.sensorup.com/docs/#observations_post</a>
 */
public class Observation extends Sensorthing<FeatureOfInterest> implements SensorthingTimeStamp {
    public final Instant phenomenonTime;
    public final Double result;
    public final Instant resultTime;

    /**
     * Constructs a new {@link Observation}.
     * 
     * @param id             The identifier of the {@link FeatureOfInterest} in the SensorThings
     *                       standard
     * @param phenomenonTime The time when the Observation occurred
     * @param result         The result of the {@link Observation}
     * @param resultTime     The Time of the measuring result
     */
    public Observation(String id, Instant phenomenonTime, Double result, Instant resultTime) {
        super(id);
        this.phenomenonTime = phenomenonTime;
        this.result = result;
        this.resultTime = resultTime;
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
    public boolean isOlder(SensorthingTimeStamp other) {
        // TODO Auto-generated method stub
        return false;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public boolean isNewer(SensorthingTimeStamp other) {
        // TODO Auto-generated method stub
        return false;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public boolean isEqualOld(SensorthingTimeStamp other) {
        // TODO Auto-generated method stub
        return false;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Instant getTimeStamp() {
        // TODO Auto-generated method stub
        return null;
    }
}
