/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
namespace de.visaq.model {
    /**
     * Interface for all {@link Sensorthings} with timestamps.
     * @class
     */
    export interface SensorthingTimeStamp {
        /**
         * Checks if this objects timestamp is older than the given on.
         * 
         * @param {*} other The second Object
         * @return {boolean} True if this one is older, false otherwise
         */
        isOlder(other : SensorthingTimeStamp) : boolean;

        /**
         * Checks if this objects timestamp is newer than the given on.
         * 
         * @param {*} other The second Object
         * @return {boolean} True if this one is newer, false otherwise
         */
        isNewer(other : SensorthingTimeStamp) : boolean;

        /**
         * Checks if this objects timestamp is equal old than the given on.
         * 
         * @param {*} other The second Object
         * @return {boolean} True if this one is equal old, false otherwise
         */
        isEqualOld(other : SensorthingTimeStamp) : boolean;

        /**
         * Returns the timestamp that identifies the oldness of the {@link SensorthingsTimeStamp}.
         * 
         * @return {java.time.Instant} The timestamp
         */
        getTimeStamp() : java.time.Instant;
    }
}

