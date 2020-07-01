package de.visaq.model;

/**
 * Class to encapsulate the data of one sensor, its location and one Observation.
 */
public class SensorDatum {

    public final Sensor sensor;
    public final Location location;
    public final Observation observation;

    /**
     * Sole constructor of the class PointData.
     * 
     * @param sensor      The Sensor
     * @param location    The Location
     * @param observation The Observation
     */
    public SensorDatum(Sensor sensor, Location location, Observation observation) {
        this.sensor = sensor;
        this.location = location;
        this.observation = observation;

    }
}
