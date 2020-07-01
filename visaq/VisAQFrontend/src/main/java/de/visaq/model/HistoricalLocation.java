package de.visaq.model;

import java.time.Instant;

/**
 * <p>
 * Representation of the {@link HistoricalLocation} entity in the Frontend.
 * </p>
 * <p>
 * {@link HistoricalLocation} provides time for the stored Location
 * </p>
 * 
 * @see <a href=
 *      "https://developers.sensorup.com/docs/#historicalLocations_get">https://developers.sensorup.com/docs/#historicalLocations_get</a>
 */
public class HistoricalLocation extends Sensorthing<Datastream> implements SensorthingTimeStamp {
    public final Instant time;

    /**
     * Constructs a new {@link HistoricalLocation}.
     * 
     * @param id   The identifier of the {@link  HistoricalLocation} in the SensorThings standard
     * @param time The time
     */
    public HistoricalLocation(String id, Instant time) {
        super(id);
        this.time = time;
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
