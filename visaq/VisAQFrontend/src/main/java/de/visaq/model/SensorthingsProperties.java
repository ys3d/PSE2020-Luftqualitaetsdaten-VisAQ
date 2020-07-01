package de.visaq.model;

/**
 * Interface for all {@link Sensorthings} with properties.
 */
public interface SensorthingsProperties {
    /**
     * Returns the property given by the unique key.
     * 
     * @param key A unique key for the properties
     * @return The Property given by the key or null if nothing was found
     */
    public Object getPropertyByKey(String key);

    /**
     * Checks if the property with the given key exists for this {@link Sensorthings}.
     * 
     * @param key The key of the searched property
     * @return True if the property exists, false otherwise
     */
    public boolean hasProperties(String key);
}
