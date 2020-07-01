package de.visaq.controller.math;

import java.awt.Point;
import java.time.Instant;
import java.time.temporal.TemporalAmount;
import java.util.ArrayList;

import org.locationtech.jts.geom.Coordinate;
import org.locationtech.jts.geom.Envelope;

import de.visaq.controller.FeatureOfInterestController;
import de.visaq.controller.ObservationController;
import de.visaq.model.PointDatum;
import de.visaq.model.sensorthings.FeatureOfInterest;
import de.visaq.model.sensorthings.Observation;
import de.visaq.model.sensorthings.ObservedProperty;

/**
 * Handles the Interpolation of Observations.
 */
public abstract class Interpolation {
    /**
     * Interpolates all Observations within the specified envelope and time range.
     * 
     * @param envelope         Covers the area of all allowed locations
     * @param time             A point in time
     * @param range            The Observation must have been recorded in [time - range, time +
     *                         range]
     * @param observedProperty The ObservedProperty that was observed
     * @return An array of PointData
     */
    public PointDatum[] interpolate(Envelope envelope, Instant time, TemporalAmount range,
            ObservedProperty observedProperty) {
        ArrayList<Observation> observations =
                new ObservationController().get(envelope, time, range, observedProperty);
        FeatureOfInterestController controller = new FeatureOfInterestController();
        ArrayList<Coordinate> coordinates = new ArrayList<>();

        observations.forEach((observation) -> {
            Point p = controller.getLocationPoint(
                    (FeatureOfInterest) observation.featureOfInterestLink.get(controller));

            if (p != null) {
                coordinates.add(new Coordinate(p.getX(), p.getY(), observation.result));
            }
        });

        return interpolateCoordinates(envelope, coordinates);
    }

    /**
     * Interpolates a Coordinate ArrayList inside the specified envelope.
     * 
     * @param envelope    Covers the x,y-plane of all allowed coordinates
     * @param coordinates An ArrayList of Coordinate objects, each Coordinate represents a Point in
     *                    space (x,y) and value (z)
     * @return Interpolated array of PointData
     */
    protected abstract PointDatum[] interpolateCoordinates(Envelope envelope,
            ArrayList<Coordinate> coordinates);
}
