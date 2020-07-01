package de.visaq.model;

/**
 * Encapsulates all Sensorthings objects.
 *
 * @param <SensorthingT>  Generics of type Sensorthing
 */
public abstract class Sensorthing<SensorthingT extends Sensorthing<SensorthingT>> {

    /**
     * Unique identifier of the object.
     */
    public final String id;

    /**
     * Constructor of class Sensorthing.
     */
    public Sensorthing() {
        this.id = null;
    }

    /**
     * Creates a new Sensorthings object with the given id and the specified database link.
     * 
     * @param id      Unique identifier of the object that will be created.
     */
    public Sensorthing(String id) {
        this.id = id;
    }
}
