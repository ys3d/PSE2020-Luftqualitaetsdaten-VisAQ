package de.visaq.model;

import java.time.Instant;

/**
 * Interface for all {@link Sensorthings} with timestamps.
 */
public interface SensorthingTimeStamp {
    /**
     * Checks if this objects timestamp is older than the given on.
     * 
     * @param other The second Object
     * @return True if this one is older, false otherwise
     */
    public boolean isOlder(SensorthingTimeStamp other);

    /**
     * Checks if this objects timestamp is newer than the given on.
     * 
     * @param other The second Object
     * @return True if this one is newer, false otherwise
     */
    public boolean isNewer(SensorthingTimeStamp other);

    /**
     * Checks if this objects timestamp is equal old than the given on.
     * 
     * @param other The second Object
     * @return True if this one is equal old, false otherwise
     */
    public boolean isEqualOld(SensorthingTimeStamp other);

    /**
     * Returns the timestamp that identifies the oldness of the {@link SensorthingsTimeStamp}.
     * 
     * @return The timestamp
     */
    public Instant getTimeStamp();
}
