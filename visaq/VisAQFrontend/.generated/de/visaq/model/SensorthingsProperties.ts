/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
namespace de.visaq.model {
    /**
     * Interface for all {@link Sensorthings} with properties.
     * @class
     */
    export interface SensorthingsProperties {
        /**
         * Returns the property given by the unique key.
         * 
         * @param {string} key A unique key for the properties
         * @return {*} The Property given by the key or null if nothing was found
         */
        getPropertyByKey(key : string) : any;

        /**
         * Checks if the property with the given key exists for this {@link Sensorthings}.
         * 
         * @param {string} key The key of the searched property
         * @return {boolean} True if the property exists, false otherwise
         */
        hasProperties(key : string) : boolean;
    }
}

