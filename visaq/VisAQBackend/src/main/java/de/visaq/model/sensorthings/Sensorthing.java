package de.visaq.model.sensorthings;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import de.visaq.controller.link.SingleLocalLink;

/**
 * Encapsulates all Sensorthings objects.
 * 
 * @param <SensorthingT> A class that implements the abstract class Sensorthings, used for f-bounded
 *                       quantification.
 */
@JsonIdentityInfo(property = "id", generator = ObjectIdGenerators.PropertyGenerator.class)
public abstract class Sensorthing<SensorthingT extends Sensorthing<SensorthingT>> {

    /**
     * Unique identifier of the entity.
     */
    public final String id;
    /**
     * Links to this entity in the Sensorthings database. We use f-bounded quantification to ensure
     * that this always links to an entity of the same type as the type of the class. Assume we have
     * a class Datastream, then this will have to be something akin to
     * SingleLocalLink&lt;Datastream&gt;.
     */
    public final SingleLocalLink<SensorthingT> selfLink;

    /**
     * Creates a new Sensorthings object with the given id and the specified database link.
     * 
     * @param id       Unique identifier of the object that will be created.
     * @param selfUrl  Links to the Sensorthings database object.
     * @param relative Whether or not the selfUrl is relative to the Sensorthings entry point or
     *                 absolute
     */
    public Sensorthing(String id, String selfUrl, boolean relative) {
        this.id = id;
        this.selfLink = new SingleLocalLink<SensorthingT>(selfUrl, relative, this);
    }
}
