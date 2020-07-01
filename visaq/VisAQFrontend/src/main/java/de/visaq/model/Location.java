package de.visaq.model;

import java.awt.Point;

/**
 * <p>
 * Representation of the Locations entity in the Frontend.
 * </p>
 * <p>
 * The Location entity locates the Thing(s) it associated with. A Thing's Location entity is defined
 * as the last known location of the Thing.
 * </p>
 * 
 * @see <a href=
 *      "https://developers.sensorup.com/docs/#locations_post">https://developers.sensorup.com/docs/#locations_post</a>
 */
public class Location extends Sensorthing<Location> {
    public final String name;
    public final String description;
    // TODO: Check if point is the only possible value
    public final Point location;

    /**
     * Constructs a new {@link Location}.
     *
     * @param id          The identifier of the {@link FeatureOfInterest} in the SensorThings
     *                    standard
     * @param name        The name of the {@link Location}
     * @param description The description of the {@link Location}
     * @param location    A point describing the actual location
     */
    public Location(String id, String name, String description, Point location) {
        super(id);
        this.name = name;
        this.description = description;
        this.location = location;
    }

    @Override
    public boolean equals(Object obj) {
        // TODO Auto-generated method stub
        return super.equals(obj);
    }
}
